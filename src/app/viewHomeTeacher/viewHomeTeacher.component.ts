import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewHomeTeacher',
    templateUrl: './viewHomeTeacher.component.html',
    styleUrl: './viewHomeTeacher.component.css'
})
export class viewHomeTeacherComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewHomeTeacher');
        this.verificaModalAlterarEstudante();
        this.verificaModalCS();
        this.moverScrool();
        this.verificaModalAlterarProfessor();
    }


    modalAberto: boolean = false;


    abrirModalCreateTeachers() {
        this.modalAberto = true;
    }
    fecharModalCreateTeachers() {
        this.modalAberto = false;
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
        if (this.lastScrool == 'student') {
            setTimeout(() => {
                this.rollStudent();
            }, 100); // ou 200ms se ainda falhar
        }
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
        { nome: '7º Ano A', pontos: 1420 },
        { nome: '7º Ano B', pontos: 1300 },
        { nome: '7º Ano C', pontos: 1100 },
        { nome: '8º Ano A', pontos: 1000 },
        { nome: '8º Ano B', pontos: 950 },
        { nome: '9º Ano A', pontos: 1180 },
        { nome: '9º Ano C', pontos: 1280 },
    ];



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
        }
        else {
            this.mostrarModalAlterarProfessor = false;
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
}
