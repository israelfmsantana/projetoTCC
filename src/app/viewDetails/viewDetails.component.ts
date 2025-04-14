import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewDetails',
    templateUrl: './viewDetails.component.html',
    styleUrl: './viewDetails.component.css'
})
export class viewDetailsComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}
    

    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewDetails');
    }


    modalAberto: boolean = false;
    

    abrirModalCreateTeachers() {
        this.modalAberto = true;
    }
    fecharModalCreateTeachers() {
        this.modalAberto = false;
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
  
}
