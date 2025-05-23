import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';
import { Escola, Usuario } from '../../Class';
import { HttpHeaders } from '@angular/common/http';
import { ConectEscola, ConectUsuario, ConectUsuarioEscolaPerfil } from '../../API';

@Component({
    selector: 'app-viewTeachers',
    templateUrl: './viewTeachers.component.html',
    styleUrl: './viewTeachers.component.css'
})
export class viewTeachersComponent implements OnInit {

    constructor(private conectUsuario: ConectUsuario, private conectEscola: ConectEscola, private ConectUsuarioEscolaPerfil: ConectUsuarioEscolaPerfil,private router: Router, private darkModeService: DarkModeService) {}


    listaEscolas: Escola[] = [];
    listaUsuarioCoordencao: Usuario[] = [];
    GetAll(): void {
        const token = localStorage.getItem('Authorization');
        const headersBearer = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        this.conectEscola.GETall(headersBearer).subscribe({
            next: (p) => {
                this.listaEscolas = p;

                for(let escola of this.listaEscolas) {
                    this.conectUsuario.GETallByEscolaIdAndPerfilId(escola.id, 3, headersBearer).subscribe({
                        next: (p) => {
                            this.listaUsuarioCoordencao.push(...p);

                            for( let coordenacao of this.listaUsuarioCoordencao ) {
                                this.membrosProfessores.push({nome: coordenacao.nome, escola1: escola.nome, escola2: '' })
                            }
                        },
                        error: (err) => {
                            console.error('Erro ao buscar escolas:', err);
                        }
                    });
                }
            },
            error: (err) => {
                console.error('Erro ao buscar escolas:', err);
            }
        });

    }

    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewTeachers');
        this.verificaModalPesquisaAvancada();
        this.verificaModalCT();
        this.verificaModalDetalhes();
        this.GetAll();
    }


    mostrarModalCT: boolean = false;
    ExibirModalCreateTeachers(mostrar: boolean) {
        this.mostrarModalCT = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalAd', 'teacher');
        }
        else {
            localStorage.setItem('mostrarModalAd', '');
        }
    }

    mostrarModalCTStorage: String;
    verificaModalCT() {
        this.mostrarModalCTStorage = localStorage.getItem('mostrarModalAd');
        if (this.mostrarModalCTStorage === 'teacher') {
            this.mostrarModalCT = true;
        }
        else {
            this.mostrarModalCT = false;
        }
    }




    filtroProf: string = '';
    membrosProfessores: { nome: string; escola1: string; escola2: string }[] = [];


    get professoresFiltrados() {
        return this.membrosProfessores.filter(membro =>
        membro.nome.toLowerCase().includes(this.filtroProf.toLowerCase()));
    }

    materiaSelecionados: string[] = [];

    alternarMateria(materia: string) {
        const index = this.materiaSelecionados.indexOf(materia);
        if (index > -1) {
            this.materiaSelecionados.splice(index, 1); // Remove se já estava
        } else {
            this.materiaSelecionados.push(materia); // Adiciona se não estava
        }
    }

    modalDetails: String;
    verificaModalDetalhes() {
        this.modalDetails = localStorage.getItem('details');
        if (this.modalDetails === 'true'){
            this.detailsSchool = true;
        }
    }


    anoSelecionados: string[] = [];

    alternarAno(ano: string) {
        const index = this.anoSelecionados.indexOf(ano);
        if (index > -1) {
            this.anoSelecionados.splice(index, 1); // Remove se já estava
        } else {
            this.anoSelecionados.push(ano); // Adiciona se não estava
        }
    }


    mostrarModalPA = false;
    mostrarModalPAStorage: String;
    ExibirModalPA(mostrar: boolean) {
        this.mostrarModalPA = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalPA', 'teacher');
        }
        else {
            localStorage.setItem('mostrarModalPA', '');
        }
    }

    verificaModalPesquisaAvancada() {
        this.mostrarModalPAStorage = localStorage.getItem('mostrarModalPA');
        if(this.mostrarModalPAStorage === 'teacher') {
            this.mostrarModalPA = true;
        }
        else {
            this.mostrarModalPA = false;
        }
    }




    @Input() detailsSchool: boolean = false; // Recebe do pai
    @Input() perfil: String; // Recebe do pai
    @Output() abrirDetalhes = new EventEmitter<void>(); // Envia para o pai

    abrirDetalhesTeachers() {
        localStorage.setItem('localScroll', 'teacher');
        this.abrirDetails();
    }

    abrirDetails() {
        this.abrirDetalhes.emit();
    }
}
