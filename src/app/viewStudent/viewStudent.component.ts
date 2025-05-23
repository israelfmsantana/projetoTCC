import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewStudent',
    templateUrl: './viewStudent.component.html',
    styleUrl: './viewStudent.component.css'
})
export class viewStudentComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewStudent');
        this.verificaModalPesquisaAvancada();
        this.verificaModalCS();
        this.verificaModalDetalhes();
    }

    mostrarModalCS: boolean = false;
    ExibirModalCreateStudent(mostrar: boolean) {
        this.mostrarModalCS = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalAd', 'student');
        }
        else {
            localStorage.setItem('mostrarModalAd', '');
        }
    }

    mostrarModalCSStorage: String;
    verificaModalCS() {
        this.mostrarModalCSStorage = localStorage.getItem('mostrarModalAd');
        if (this.mostrarModalCSStorage === 'student') {
            this.mostrarModalCS = true;
        }
        else {
            this.mostrarModalCS = false;
        }
    }


    modalDetails: String;
    verificaModalDetalhes() {
        this.modalDetails = localStorage.getItem('details');
        if (this.modalDetails === 'true'){
            this.detailsSchool = true;
        }
    }


    filtroAluno: string = '';
    membrosAlunos = [
        { nome: 'João Pereira Lima', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Mariana Costa Oliveira', escola: 'EEEFM São José' },
        { nome: 'Carlos Mendes Rocha', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Fernanda Souza Martins', escola: 'EEEFM São Domingos' },
        { nome: 'Ricardo Gomes Nunes', escola: 'EEEFM Manoel Vieira Lessa' },
        { nome: 'Paula Fernandes Cardoso', escola: 'EMEF Professor Paulo Freire' },
        { nome: 'Lucas Silva Ribeiro', escola: 'EEEFM Zélia Viana' },
        { nome: 'Juliana Almeida Castro', escola: 'EEEFM São José' },
        { nome: 'Eduardo Farias Mendes', escola: 'EMEF Professora Hilda Miranda' },
        { nome: 'Camila Lopes Nogueira', escola: 'EEEFM Dom João Batista' },
        { nome: 'Bruno Rodrigues Lima', escola: 'EEEFM São Domingos' },
        { nome: 'Letícia Nunes Ferreira', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Tatiane Rocha Almeida', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Gustavo Martins Farias', escola: 'EEEFM São José' },
        { nome: 'Vanessa Mendes Souza', escola: 'EMEF Professora Hilda Miranda' },
        { nome: 'Pedro Cardoso Ribeiro', escola: 'EEEFM Dom João Batista' },
        { nome: 'Ana Nogueira Castro', escola: 'EEEFM Zélia Viana' },
        { nome: 'Fernando Oliveira Nunes', escola: 'EEEFM Manoel Vieira Lessa' },
        { nome: 'Roberto Costa Lima', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Tatiane Souza Mendes', escola: 'EMEF Professor Paulo Freire' }
    ];


    get alunosFiltrados() {
        return this.membrosAlunos.filter(membro =>
        membro.nome.toLowerCase().includes(this.filtroAluno.toLowerCase()));
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



    mostrarModalPA: boolean = false;
    mostrarModalPAStorage: String;
    ExibirModalPA(mostrar: boolean) {
        this.mostrarModalPA = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalPA', 'student');
        }
        else {
            localStorage.setItem('mostrarModalPA', '');
        }
    }

    verificaModalPesquisaAvancada() {
        this.mostrarModalPAStorage = localStorage.getItem('mostrarModalPA');
        if(this.mostrarModalPAStorage === 'student') {
            this.mostrarModalPA = true;
        }
        else {
            this.mostrarModalPA = false;
        }
    }




    @Input() detailsSchool: boolean = false; // Recebe do pai
    @Input() perfil: String; // Recebe do pai
    @Output() abrirDetalhes = new EventEmitter<void>(); // Envia para o pai

    abrirDetalhesStudent() {
        localStorage.setItem('localScroll', 'student');
        this.abrirDetails();
    }

    abrirDetails() {
        this.abrirDetalhes.emit();
    }
}
