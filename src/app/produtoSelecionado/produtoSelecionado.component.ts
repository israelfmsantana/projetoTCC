import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';
import { Produto } from '../../Class';
import { ConectProduto } from '../../API';

@Component({
    selector: 'app-produtoSelecionado',
    templateUrl: './produtoSelecionado.component.html',
    styleUrl: './produtoSelecionado.component.css'
})
export class ProdutoSelecionadoComponent implements OnInit {

    constructor(private conectProduto: ConectProduto ,private router: Router, private darkModeService: DarkModeService) {}


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/produtoSelecionado');
        setTimeout(() => {
            this.PegarProdutoBanco();
            this.carregado = true;
        }, 2000);


    }
    carregado = false;
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

    produtosFiltrados: Produto[] = [];

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }

    modalDropdown = false;

    mostrarModalDropdown() {
        this.modalDropdown = !this.modalDropdown;
    }
}
