import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewDetailsManager',
    templateUrl: './viewDetailsManager.component.html',
    styleUrl: './viewDetailsManager.component.css'
})
export class viewDetailsManagerComponent implements OnInit {

    constructor(private renderer: Renderer2, private router: Router, private darkModeService: DarkModeService) {}


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewDetailsManager');
        localStorage.setItem('details', 'true');
        this.verificaModalCC();
        this.verificaModalCT();
        this.verificaModalAlterarEscola();
        this.verificaModalAlterarCoordenacao();
        this.verificaModalAlterarProfessor();
        this.moverScrool();

    }


    modalAberto: boolean = false;



    filtroProf: string = '';
    membrosProfessores = [
        { nome: 'João Pereira Lima', materia: 'Matemática' },
        { nome: 'Mariana Costa Oliveira', materia: 'Ciências' },
        { nome: 'Carlos Mendes Rocha', materia: 'História' },
        { nome: 'Fernanda Souza Martins', materia: 'Geografia' },
        { nome: 'Ricardo Gomes Nunes', materia: 'Português' },
        { nome: 'Paula Fernandes Cardoso', materia: 'Inglês' },
        { nome: 'Lucas Silva Ribeiro', materia: 'Educação Física' },
        { nome: 'Juliana Almeida Castro', materia: 'Artes' },
        { nome: 'Eduardo Farias Mendes', materia: 'Matemática' },
        { nome: 'Camila Lopes Nogueira', materia: 'Ciências' },
        { nome: 'Bruno Rodrigues Lima', materia: 'História' },
        { nome: 'Letícia Nunes Ferreira', materia: 'Geografia' },
        { nome: 'Tatiane Rocha Almeida', materia: 'Português' },
        { nome: 'Gustavo Martins Farias', materia: 'Inglês' },
        { nome: 'Vanessa Mendes Souza', materia: 'Educação Física' },
        { nome: 'Pedro Cardoso Ribeiro', materia: 'Artes' },
        { nome: 'Ana Nogueira Castro', materia: 'Matemática' },
        { nome: 'Fernando Oliveira Nunes', materia: 'Ciências' },
        { nome: 'Roberto Costa Lima', materia: 'História' },
        { nome: 'Tatiane Souza Mendes', materia: 'Geografia' }
    ];




    get professoresFiltrados() {
        return this.membrosProfessores.filter(membro =>
        membro.nome.toLowerCase().includes(this.filtroProf.toLowerCase()));
    }



    pontuacaoTurmas = [
        { nome: '6º Ano A', pontos: 1245 },
        { nome: '6º Ano B', pontos: 1180 },
        { nome: '6º Ano C', pontos: 1350 },
        { nome: '6º Ano D', pontos: 1280 },
        { nome: '7º Ano A', pontos: 1420 },
        { nome: '7º Ano B', pontos: 1300 },
        { nome: '7º Ano C', pontos: 1100 },
        { nome: '8º Ano A', pontos: 1000 },
        { nome: '8º Ano B', pontos: 950 },
        { nome: '9º Ano A', pontos: 1180 },
        { nome: '9º Ano B', pontos: 1130 },
        { nome: '9º Ano C', pontos: 1280 },
    ];


    rollCoordination() {
        const elemento = document.getElementById('coordination');
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        localStorage.setItem('localScroll','');
    }
    rollSchool() {
        const elemento = document.getElementById('school');
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        localStorage.setItem('localScroll','');
    }
    rollTeachers() {
        const elemento = document.getElementById('teacher');
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        localStorage.setItem('localScroll','');
    }


    lastScrool: string;
    moverScrool() {
        this.lastScrool = localStorage.getItem('localScroll');
        if (this.lastScrool == 'coordination') {
            setTimeout(() => {
                this.rollCoordination();
            }, 100); // ou 200ms se ainda falhar
        }
        else if (this.lastScrool == 'school') {
            setTimeout(() => {
                this.rollSchool();
            }, 100); // ou 200ms se ainda falhar
        }
        else if (this.lastScrool == 'teacher') {
            setTimeout(() => {
                this.rollTeachers();
            }, 100); // ou 200ms se ainda falhar
        }
    }




    mostrarModalAlterarEscola = false;
    ExibirModalAlterarEscola(mostrar: boolean) {
        this.mostrarModalAlterarEscola = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalAl', 'school');
        }
        else {
            localStorage.setItem('mostrarModalAl', '');
        }
    }

    mostrarModalAEStorage: String;
    verificaModalAlterarEscola() {
        this.mostrarModalAEStorage = localStorage.getItem('mostrarModalAl');
        if (this.mostrarModalAEStorage === 'school') {
            this.mostrarModalAlterarEscola = true;
            localStorage.setItem('localScroll','school');
        }
        else {
            this.mostrarModalAlterarEscola = false;
        }
    }



    mostrarModalAlterarCoordenacao = false;
    ExibirModalAlterarCoordenacao(mostrar: boolean) {
        this.mostrarModalAlterarCoordenacao = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalAl', 'coordination');
        }
        else {
            localStorage.setItem('mostrarModalAl', '');
        }
    }

    mostrarModalACStorage: String;
    verificaModalAlterarCoordenacao() {
        this.mostrarModalACStorage = localStorage.getItem('mostrarModalAl');
        if (this.mostrarModalACStorage === 'coordination') {
            this.mostrarModalAlterarCoordenacao = true;
            localStorage.setItem('localScroll','coordination');
        }
        else {
            this.mostrarModalAlterarCoordenacao = false;
        }
    }


    mostrarModalAlterarProfessor = false;
    ExibirModalAlterarProfessor(mostrar: boolean) {
        this.mostrarModalAlterarProfessor = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalAl', 'teacher');
        }
        else {
            localStorage.setItem('mostrarModalAl', '');
        }
    }

    mostrarModalAPStorage: String;
    verificaModalAlterarProfessor() {
        this.mostrarModalAPStorage = localStorage.getItem('mostrarModalAl');
        if (this.mostrarModalAPStorage === 'teacher') {
            this.mostrarModalAlterarProfessor = true;
            localStorage.setItem('localScroll','teacher');
        }
        else {
            this.mostrarModalAlterarProfessor = false;
        }
    }















    mostrarModalCC: boolean = false;
    ExibirModalCreateCoordination(mostrar: boolean) {
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
            localStorage.setItem('localScroll','coordination');
        }
        else {
            this.mostrarModalCC = false;
        }
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
            localStorage.setItem('localScroll','teacher');
        }
        else {
            this.mostrarModalCT = false;
        }
    }





    sextoAnoSelecionados: string[] = [];
    alternarSextoAno(ano: string) {
        const ordem = ['A', 'B', 'C', 'D'];
        const indexSelecionado = ordem.indexOf(ano);

        // Se o ano já está completamente selecionado (até aquele ponto), desmarcar todos
        const todosAteSelecionado = ordem.slice(0, indexSelecionado + 1);
        const jaEstaoTodosSelecionados = todosAteSelecionado.every(letra =>
            this.sextoAnoSelecionados.includes(letra)
        );

        if (jaEstaoTodosSelecionados) {
            // Desmarca todos
            this.sextoAnoSelecionados = [];
        } else {
            // Marca do início até o botão clicado
            this.sextoAnoSelecionados = todosAteSelecionado;
        }
    }



    setimoAnoSelecionados: string[] = [];
    alternarSetimoAno(ano: string) {
        const ordem = ['A', 'B', 'C', 'D'];
        const indexSelecionado = ordem.indexOf(ano);

        // Se o ano já está completamente selecionado (até aquele ponto), desmarcar todos
        const todosAteSelecionado = ordem.slice(0, indexSelecionado + 1);
        const jaEstaoTodosSelecionados = todosAteSelecionado.every(letra =>
            this.setimoAnoSelecionados.includes(letra)
        );

        if (jaEstaoTodosSelecionados) {
            // Desmarca todos
            this.setimoAnoSelecionados = [];
        } else {
            // Marca do início até o botão clicado
            this.setimoAnoSelecionados = todosAteSelecionado;
        }
    }



    oitavoAnoSelecionados: string[] = [];
    alternarOitavoAno(ano: string) {
        const ordem = ['A', 'B', 'C', 'D'];
        const indexSelecionado = ordem.indexOf(ano);

        // Se o ano já está completamente selecionado (até aquele ponto), desmarcar todos
        const todosAteSelecionado = ordem.slice(0, indexSelecionado + 1);
        const jaEstaoTodosSelecionados = todosAteSelecionado.every(letra =>
            this.oitavoAnoSelecionados.includes(letra)
        );

        if (jaEstaoTodosSelecionados) {
            // Desmarca todos
            this.oitavoAnoSelecionados = [];
        } else {
            // Marca do início até o botão clicado
            this.oitavoAnoSelecionados = todosAteSelecionado;
        }
    }


    nonoAnoSelecionados: string[] = [];
    alternarNonoAno(ano: string) {
        const ordem = ['A', 'B', 'C', 'D'];
        const indexSelecionado = ordem.indexOf(ano);

        // Se o ano já está completamente selecionado (até aquele ponto), desmarcar todos
        const todosAteSelecionado = ordem.slice(0, indexSelecionado + 1);
        const jaEstaoTodosSelecionados = todosAteSelecionado.every(letra =>
            this.nonoAnoSelecionados.includes(letra)
        );

        if (jaEstaoTodosSelecionados) {
            // Desmarca todos
            this.nonoAnoSelecionados = [];
        } else {
            // Marca do início até o botão clicado
            this.nonoAnoSelecionados = todosAteSelecionado;
        }
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


    anoSelecionados: string[] = [];

    alternarAno(ano: string) {
        const index = this.anoSelecionados.indexOf(ano);
        if (index > -1) {
            this.anoSelecionados.splice(index, 1); // Remove se já estava
        } else {
            this.anoSelecionados.push(ano); // Adiciona se não estava
        }
    }




}
