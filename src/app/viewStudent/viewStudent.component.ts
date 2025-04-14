import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    }



    modalAberto: boolean = false;
    

    abrirModalCreateStudent() {
        this.modalAberto = true;
    }
    fecharModalCreateStudent() {
        this.modalAberto = false;
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
}
