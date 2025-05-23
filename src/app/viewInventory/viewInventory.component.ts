import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewInventory',
    templateUrl: './viewInventory.component.html',
    styleUrl: './viewInventory.component.css'
})
export class viewInventoryComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewInventory');
        this.verificaModalPesquisaAvancada();
    }






    filtro: string = '';
    listaInventario = [
        { nome: 'Primavera', tipo: 'cor', ativo: '0' },
        { nome: 'Inverno', tipo: 'cor', ativo: '0' },
        { nome: 'Ferrari', tipo: 'icone', ativo: '1' },
        { nome: 'Lamborguine', tipo: 'icone', ativo: '0' },
        { nome: 'urso', tipo: 'icone', ativo: '0' },
        { nome: 'noturno', tipo: 'cor', ativo: '1' },
    ];


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
