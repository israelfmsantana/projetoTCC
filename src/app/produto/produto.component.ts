import { ConectProduto } from '../../API';
import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';
import { Produto } from '../../Class';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProdutoComponent implements OnInit {

    modalSelecao: boolean = false;

    filtroProduto: Produto = {
    title: '',
    price: null,
    description: '',
    category: '',
    image: '',
    rating: null
    };

    produtos: Produto[] = [];

    sugestoesTitulo: string[] = [];
    sugestoesCategoria: string[] = [];
    modalDropdown = false;

    mostrarModalDropdown() {
        this.modalDropdown = !this.modalDropdown;
    }

    filtrarSugestoesTitulo(): void {
    const query = this.filtroProduto.title.toLowerCase();
    this.sugestoesTitulo = this.produtos
        .map(p => p.title)
        .filter(title => title.toLowerCase().includes(query))
        .filter((value, index, self) => self.indexOf(value) === index)
        .slice(0, 5);
    }

    filtrarSugestoesCategoria(): void {
    const query = this.filtroProduto.category.toLowerCase();
    this.sugestoesCategoria = this.produtos
        .map(p => p.category)
        .filter(category => category.toLowerCase().includes(query))
        .filter((value, index, self) => self.indexOf(value) === index)
        .slice(0, 5);
    }

    selecionarTitulo(titulo: string): void {
    this.filtroProduto.title = titulo;
    this.sugestoesTitulo = [];
    }

    selecionarCategoria(categoria: string): void {
    this.filtroProduto.category = categoria;
    this.sugestoesCategoria = [];
    }

    limparCampoPalavraChave(): void {
        this.palavraChave = '';
        this.filtrarPorPalavraChave();
    }

    aoSairDoCampoTitulo(): void {
        this.sugestoesTitulo = [];
    }
    aoSairDoCampoCategoria(): void {
        this.sugestoesCategoria = [];
    }


    limparFiltroTitulo(): void {
        this.filtroProduto.title = '';
        this.filtrarSugestoesTitulo();
    }

    limparFiltroCategoria(): void {
        this.filtroProduto.category = '';
        this.filtrarSugestoesCategoria();
    }




    aplicarFiltros(): void {
        this.produtosFiltrados = this.produtos.filter(produto => {
            const titleMatch = !this.filtroProduto.title || produto.title.toLowerCase().includes(this.filtroProduto.title.toLowerCase());
            const categoryMatch = !this.filtroProduto.category || produto.category.toLowerCase().includes(this.filtroProduto.category.toLowerCase());
            const precoMinMatch = this.filtroProduto.precoMin == null || produto.price >= this.filtroProduto.precoMin;
            const precoMaxMatch = this.filtroProduto.precoMax == null || produto.price <= this.filtroProduto.precoMax;
            const ratingMinMatch = this.filtroProduto.ratingMin == null || Number(produto.rating) >= this.filtroProduto.ratingMin;

            return titleMatch && categoryMatch && precoMinMatch && precoMaxMatch && ratingMinMatch;
        });

        this.mostrarModalPA = false;
        localStorage.setItem('mostrarModalPA', 'false');
    }

    limpaFiltro(): void {
        this.produtosFiltrados = this.produtos;
        this.filtroProduto.category = '';
        this.filtroProduto.title = '';
        this.filtroProduto.precoMin = null;
        this.filtroProduto.precoMax = null;
        this.filtroProduto.ratingMin = null;

        this.mostrarModalPA = false;
        localStorage.setItem('mostrarModalPA', 'false');
    }



    GETprodutos() {
        this.conectProduto.GETallProdutos().subscribe({
            next: (response: any) => {
                this.produtos = response.map((p: Produto) => ({ ...p, selecionado: false }));
                this.produtosFiltrados = [...this.produtos];
            },
            error: (error: any) => {
                console.error('Erro completo:', error);
                alert(JSON.stringify(error.error));
            }
        });
    }


    MostrarModalSelecao() {
        this.modalSelecao = !this.modalSelecao
    }

    executarSelecao() {
        this.PegarProdutoBanco().then(() => {
            const naoSelecionados = this.produtos.filter(p => p.selecionado == false);
            const selecionados = this.produtos.filter(p => p.selecionado);

            for (const produto of selecionados) {
                const existeNoBanco = this.produtoSalvo.some(p => p.title === produto.title);
                if (!existeNoBanco) {
                    this.SalvarProduto(produto);
                }
            }


            for (const produto of naoSelecionados) {
                const existeNoBanco = this.produtoSalvo.some(p => p.title === produto.title);
                if (existeNoBanco) {
                    this.DeletarProduto(produto.id);
                }
            }

            this.modalSelecao = false;
            this.MostrarSelecaoSucesso();
        });
    }

    MostrarSelecaoSucesso() {
        this.toastr.success('Seleção feita com sucesso!', 'Sucesso');
    }


    toggleSelecionado(membro: Produto): void {
        membro.selecionado = !membro.selecionado;
    }


    constructor(private toastr: ToastrService, private conectProduto: ConectProduto ,private router: Router, private darkModeService: DarkModeService) {}

    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/produto');
        this.carregado = false;
        this.GETprodutos();
        this.verificaModalPesquisaAvancada();
        setTimeout(() => {
            this.sincronizarProdutosSalvos();
        }, 5000);

    }

    produtoSalvo: Produto[];
    PegarProdutoBanco(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.conectProduto.GETprodutosSalvos().subscribe({
                next: (res) => {
                    this.produtoSalvo = res;
                    resolve();
                },
                error: (err) => {
                    console.error('Erro ao pegar produtos salvos:', err);
                    reject(err);
                }
            });
        });
    }

    DeletarProduto(id: number) {
    this.conectProduto.DELETEprodutoSalvo(id).subscribe({
        next: () => {

        },
        error: (err) => {
            console.error(`Erro ao deletar produto id=${id}:`, err);
        }
    });
}



    SalvarProduto(produto: Produto) {
        this.conectProduto.POSTsalvarProduto(produto).subscribe({
            next: (res) => {

            },
            error: (err) => {
                console.error('Erro ao salvar produto:', err);
            }
        });

    }


    carregado = false;
    sincronizarProdutosSalvos() {
        this.PegarProdutoBanco();
        setTimeout(() => {
            for (const produto of this.produtos) {
                const existeNoBanco = this.produtoSalvo.some(p => p.title === produto.title);
                if (existeNoBanco) {
                    produto.selecionado = true;
                } else {
                    produto.selecionado = false;
                }
            }
            this.carregado = true;
        }, 2000);

    }



    navigateTo(route: string): void {
        this.router.navigate([route]);
    }


    palavraChave: string = '';
    produtosFiltrados: Produto[] = [];

    filtrarPorPalavraChave(): void {
        const query = this.palavraChave.trim().toLowerCase();
        if (!query) {
            this.produtosFiltrados = [...this.produtos];
        } else {
            this.produtosFiltrados = this.produtos.filter(produto =>
            produto.title.toLowerCase().includes(query)
            );
        }
    }




    mostrarModalPA: boolean;
    mostrarModalPAStorage: String;
    ExibirModalPA(mostrar: boolean) {
        this.mostrarModalPA = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalPA', 'true');
        }
        else {
            localStorage.setItem('mostrarModalPA', 'false');
        }
    }

    verificaModalPesquisaAvancada() {
        this.mostrarModalPAStorage = localStorage.getItem('mostrarModalPA');
        if(this.mostrarModalPAStorage === 'true') {
            this.mostrarModalPA = true;
        }
        else {
            this.mostrarModalPA = false;
        }
    }
}
