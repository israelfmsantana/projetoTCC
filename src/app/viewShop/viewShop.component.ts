import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewShop',
    templateUrl: './viewShop.component.html',
    styleUrl: './viewShop.component.css'
})
export class viewShopComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewShop');
        this.verificaModalPesquisaAvancada();
    }






    filtro: string = '';
    membrosCoordenacao = [
        { nome: 'Primavera', tipo: 'cor', preco: '1200' },
        { nome: 'Inverno', tipo: 'cor', preco: '1200' },
        { nome: 'Verão', tipo: 'cor', preco: '1200' },
        { nome: 'outono', tipo: 'cor', preco: '1200' },
        { nome: 'Ferrari', tipo: 'icone', preco: '5000' },
        { nome: 'Lamborguine', tipo: 'icone', preco: '5000' },
        { nome: 'caça', tipo: 'icone', preco: '2500' },
        { nome: 'leão', tipo: 'icone', preco: '4000' },
        { nome: 'urso', tipo: 'icone', preco: '3500' },
        { nome: 'noturno', tipo: 'cor', preco: '6000' },
    ];



    get membrosFiltrados() {
    return this.membrosCoordenacao.filter(membro =>
        membro.nome.toLowerCase().includes(this.filtro.toLowerCase()));
    }


    ordemColocacao: 'asc' | 'desc' = 'asc';

    alternarOrdenacao() {
        this.ordemColocacao = this.ordemColocacao === 'asc' ? 'desc' : 'asc';

    }



    mostrarModalPA: boolean;
    mostrarModalPAStorage: String;
    ExibirModalPA(mostrar: boolean) {
        this.mostrarModalPA = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalPA', 'shop');
        }
        else {
            localStorage.setItem('mostrarModalPA', '');
        }
    }

    verificaModalPesquisaAvancada() {
        this.mostrarModalPAStorage = localStorage.getItem('mostrarModalPA');
        if(this.mostrarModalPAStorage === 'shop') {
            this.mostrarModalPA = true;
        }
        else {
            this.mostrarModalPA = false;
        }
    }

}
