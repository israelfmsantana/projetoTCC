import { ConectEscola } from './../../API';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';
import { Escola } from '../../Class';
import { HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-viewSchool',
    templateUrl: './viewSchool.component.html',
    styleUrl: './viewSchool.component.css'
})
export class viewSchoolComponent implements OnInit {

    GetAll(): void {
        const token = localStorage.getItem('Authorization');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        this.conectEscola.GETall(headers).subscribe({
            next: (p) => {
                this.listaEscolas = p;
            },
            error: (err) => {
                console.error('Erro ao buscar escolas:', err);
            }
        });
    }

    constructor(private router: Router, private darkModeService: DarkModeService, private conectEscola: ConectEscola) {}


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewSchool');
        this.verificaModalPesquisaAvancada();
        this.verificaModalDetalhes();

        this.GetAll();


    }



    modalAbertoCreate: boolean = false;
    modalDetails: String;
    verificaModalDetalhes() {
        this.modalDetails = localStorage.getItem('details');
        if (this.modalDetails === 'true'){
            this.detailsSchool = true;
        }
    }
    abrirModalCreateSchool() {
        this.modalAbertoCreate = true;
    }
    fecharModalCreateSchool() {
        this.modalAbertoCreate = false;
    }



    filtroEscolas: string = '';
    listaEscolas: Escola[] = [];

    filtroDiretor = '';
    filtroCoordenador = '';


    get escolasFiltrados() {
        if (!this.filtroEscolas) return this.listaEscolas;
        return this.listaEscolas.filter(escola =>
            escola.nome.toLowerCase().includes(this.filtroEscolas.toLowerCase())
        );
    }


    limparFiltros() {
        this.filtroDiretor = '';
        this.filtroCoordenador = '';
        this.filtroEscolas = '';
    }

    cargosSelecionados: string[] = [];

    alternarCargo(cargo: string) {
        const index = this.cargosSelecionados.indexOf(cargo);
        if (index > -1) {
            this.cargosSelecionados.splice(index, 1); // Remove se já estava
        } else {
            this.cargosSelecionados.push(cargo); // Adiciona se não estava
        }
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
            localStorage.setItem('mostrarModalPA', 'school');
        }
        else {
            localStorage.setItem('mostrarModalPA', '');
        }
    }

    verificaModalPesquisaAvancada() {
        this.mostrarModalPAStorage = localStorage.getItem('mostrarModalPA');
        if(this.mostrarModalPAStorage === 'school') {
            this.mostrarModalPA = true;
        }
        else {
            this.mostrarModalPA = false;
        }
    }





    @Input() detailsSchool: boolean = false; // Recebe do pai
    @Input() perfil: String; // Recebe do pai
    @Output() abrirDetalhes = new EventEmitter<void>(); // Envia para o pai

    abrirDetalhesSchool() {
        localStorage.setItem('localScroll', 'school');
        this.abrirDetails();
    }

    abrirDetails() {
        this.abrirDetalhes.emit();
    }
}
