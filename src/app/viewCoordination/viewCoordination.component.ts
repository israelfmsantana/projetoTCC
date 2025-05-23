import { ConectEscola, ConectUsuario } from './../../API';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';
import { HttpHeaders } from '@angular/common/http';
import { ConectUsuarioEscolaPerfil } from '../../API';
import { Escola, Usuario } from '../../Class';

@Component({
    selector: 'app-viewCoordination',
    templateUrl: './viewCoordination.component.html',
    styleUrl: './viewCoordination.component.css'
})
export class viewCoordinationComponent implements OnInit {

    constructor(private conectUsuario: ConectUsuario, private conectEscola: ConectEscola, private ConectUsuarioEscolaPerfil: ConectUsuarioEscolaPerfil,private router: Router, private darkModeService: DarkModeService) {}

    listaEscolas: Escola[] = [];
    listaUsuarioCoordencao: Usuario[] = [];
    listaPerfilId = [2,4,5];
    GetAll(): void {
        const token = localStorage.getItem('Authorization');
        const headers = new HttpHeaders().set('Authorization', `${token}`);
        const headersBearer = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        this.conectEscola.GETall(headersBearer).subscribe({
            next: (p) => {
                this.listaEscolas = p;

                for (let i of this.listaPerfilId) {
                    for(let escola of this.listaEscolas) {
                        this.conectUsuario.GETallByEscolaIdAndPerfilId(escola.id, i, headersBearer).subscribe({
                            next: (p) => {
                                this.listaUsuarioCoordencao.push(...p);

                                for( let coordenacao of this.listaUsuarioCoordencao ) {
                                    this.membrosCoordenacao.push({nome: coordenacao.nome, cargo: i, escola: escola.nome })
                                }
                            },
                            error: (err) => {
                                console.error('Erro ao buscar escolas:', err);
                            }
                        });
                    }
                }
            },
            error: (err) => {
                console.error('Erro ao buscar escolas:', err);
            }
        });

    }


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewCoordination');
        this.verificaModalPesquisaAvancada();
        this.verificaModalCC();
        this.verificaModalDetalhes();
        this.GetAll();
    }


    mostrarModalCC: boolean = false;
    exibirModalCreateCoordination(mostrar: boolean) {
      this.mostrarModalCC = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalAd', 'coordination');
        }
        else {
            localStorage.setItem('mostrarModalAd', '');
        }
    }

    mostrarModalCCStorage: String;
    verificaModalCC() {
        this.mostrarModalCCStorage = localStorage.getItem('mostrarModalAd');
        if (this.mostrarModalCCStorage === 'coordination') {
            this.mostrarModalCC = true;
        }
        else {
            this.mostrarModalCC = false;
        }
    }




    filtro: string = '';
    membrosCoordenacao: { nome: string; cargo: number; escola: string }[] = [];



    get membrosFiltrados() {
    return this.membrosCoordenacao.filter(membro =>
        membro.nome.toLowerCase().includes(this.filtro.toLowerCase()));
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

    modalDetails: String;
    verificaModalDetalhes() {
        this.modalDetails = localStorage.getItem('details');
        if (this.modalDetails === 'true'){
            this.detailsSchool = true;
        }
    }



    mostrarModalPA: boolean;
    mostrarModalPAStorage: String;
    ExibirModalPA(mostrar: boolean) {
        this.mostrarModalPA = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalPA', 'coordination');
        }
        else {
            localStorage.setItem('mostrarModalPA', '');
        }
    }

    verificaModalPesquisaAvancada() {
        this.mostrarModalPAStorage = localStorage.getItem('mostrarModalPA');
        if(this.mostrarModalPAStorage === 'coordination') {
            this.mostrarModalPA = true;
        }
        else {
            this.mostrarModalPA = false;
        }
    }








    @Input() detailsSchool: boolean = false; // Recebe do pai
    @Input() perfil: String;
    @Output() abrirDetalhes = new EventEmitter<void>(); // Envia para o pai

    abrirDetalhesCoordinaiton() {
        localStorage.setItem('localScroll', 'coordination');
        this.abrirDetails();
    }

    abrirDetails() {
        this.abrirDetalhes.emit();
    }
}
