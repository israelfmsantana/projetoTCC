import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewDetailsCoordination',
    templateUrl: './viewDetailsCoordination.component.html',
    styleUrl: './viewDetailsCoordination.component.css'
})
export class viewDetailsCoordinationComponent implements OnInit {

    constructor(private renderer: Renderer2, private router: Router, private darkModeService: DarkModeService) {}


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewDetailsCoordination');
        localStorage.setItem('details', 'true');
        this.verificaModalCC();
        this.verificaModalCT();
        this.verificaModalCS();
        this.verificaModalAlterarEscola();
        this.verificaModalAlterarCoordenacao();
        this.verificaModalAlterarEstudante();
        this.verificaModalAlterarProfessor();
        this.moverScrool();

    }


    modalAberto: boolean = false;


    filtroAluno: string = '';
    membrosAlunos = [
        { nome: 'João Pereira Lima', pontos: 1200, turma: '7º A' },
        { nome: 'Mariana Costa Oliveira', pontos: 980, turma: '9º B' },
        { nome: 'Carlos Mendes Rocha', pontos: 2100, turma: '8º A' },
        { nome: 'Fernanda Souza Martins', pontos: 540, turma: '6º B' },
        { nome: 'Ricardo Gomes Nunes', pontos: 1540, turma: '9º A' },
        { nome: 'Paula Fernandes Cardoso', pontos: 1680, turma: '7º C' },
        { nome: 'Lucas Silva Ribeiro', pontos: 1900, turma: '8º D' },
        { nome: 'Juliana Almeida Castro', pontos: 980, turma: '8º C' },
        { nome: 'Eduardo Farias Mendes', pontos: 750, turma: '6º D' },
        { nome: 'Camila Lopes Nogueira', pontos: 890, turma: '7º A' },
        { nome: 'Bruno Rodrigues Lima', pontos: 540, turma: '9º B' },
        { nome: 'Letícia Nunes Ferreira', pontos: 1200, turma: '9º D' },
        { nome: 'Tatiane Rocha Almeida', pontos: 2100, turma: '6º D' },
        { nome: 'Gustavo Martins Farias', pontos: 980, turma: '8º C' },
        { nome: 'Vanessa Mendes Souza', pontos: 750, turma: '7º B' },
        { nome: 'Pedro Cardoso Ribeiro', pontos: 890, turma: '6º D' },
        { nome: 'Ana Nogueira Castro', pontos: 1900, turma: '8º A' },
        { nome: 'Fernando Oliveira Nunes', pontos: 1540, turma: '7º C' },
        { nome: 'Roberto Costa Lima', pontos: 1200, turma: '9º C' },
        { nome: 'Tatiane Souza Mendes', pontos: 1680, turma: '8º A' }
    ];



    get alunosFiltrados() {
        return this.membrosAlunos.filter(membro =>
        membro.nome.toLowerCase().includes(this.filtroAluno.toLowerCase()));
    }



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
        localStorage.setItem('localScroll', '');
    }
    rollSchool() {
        const elemento = document.getElementById('school');
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        localStorage.setItem('localScroll', '');
    }
    rollTeachers() {
        const elemento = document.getElementById('teacher');
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        localStorage.setItem('localScroll', '');
    }
    rollStudent() {
        const elemento = document.getElementById('student');
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        localStorage.setItem('localScroll', '');
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
        else if (this.lastScrool == 'student') {
            setTimeout(() => {
                this.rollStudent();
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
            localStorage.setItem('localScroll', 'school');
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
            localStorage.setItem('localScroll', 'coordination');
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
            localStorage.setItem('localScroll', 'teacher');
        }
        else {
            this.mostrarModalAlterarProfessor = false;
        }
    }



    mostrarModalAlterarEstudante = false;
    ExibirModalAlterarEstudante(mostrar: boolean) {
        this.mostrarModalAlterarEstudante = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalAl', 'student');
        }
        else {
            localStorage.setItem('mostrarModalAl', '');
        }
    }

    mostrarModalAeStorage: String;
    verificaModalAlterarEstudante() {
        this.mostrarModalAeStorage = localStorage.getItem('mostrarModalAl');
        if (this.mostrarModalAeStorage === 'student') {
            this.mostrarModalAlterarEstudante = true;
            localStorage.setItem('localScroll', 'student');
        }
        else {
            this.mostrarModalAlterarEstudante = false;
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
            localStorage.setItem('localScroll', 'coordination');
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
            localStorage.setItem('localScroll', 'teacher');
        }
        else {
            this.mostrarModalCT = false;
        }
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
            localStorage.setItem('localScroll', 'student');
        }
        else {
            this.mostrarModalCS = false;
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
