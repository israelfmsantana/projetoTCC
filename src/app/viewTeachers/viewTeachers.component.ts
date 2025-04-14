import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewTeachers',
    templateUrl: './viewTeachers.component.html',
    styleUrl: './viewTeachers.component.css'
})
export class viewTeachersComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}
    

    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewTeachers');
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
        { nome: 'João Pereira Lima', escola1: 'EEEFM Alfredo Chaves', escola2: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Mariana Costa Oliveira', escola1: 'EEEFM São José', escola2: '' },
        { nome: 'Carlos Mendes Rocha', escola1: 'EEEFM Alfredo Chaves', escola2: 'EEEFM São José' },
        { nome: 'Fernanda Souza Martins', escola1: '', escola2: 'EEEFM São José' },
        { nome: 'Ricardo Gomes Nunes', escola1: 'EEEFM São José', escola2: '' },
        { nome: 'Paula Fernandes Cardoso', escola1: 'EMEF Professor Antônio Carlos Santos', escola2: '' },
        { nome: 'Lucas Silva Ribeiro', escola1: 'EMEF Professor Antônio Carlos Santos', escola2: 'EEEFM São José' },
        { nome: 'Juliana Almeida Castro', escola1: '', escola2: 'EEEFM Alfredo Chaves' },
        { nome: 'Eduardo Farias Mendes', escola1: 'EEEFM Alfredo Chaves', escola2: '' },
        { nome: 'Camila Lopes Nogueira', escola1: '', escola2: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Bruno Rodrigues Lima', escola1: 'EEEFM São José', escola2: '' },
        { nome: 'Letícia Nunes Ferreira', escola1: '', escola2: 'EEEFM Alfredo Chaves' },
        { nome: 'Tatiane Rocha Almeida', escola1: 'EEEFM Alfredo Chaves', escola2: 'EEEFM São José' },
        { nome: 'Gustavo Martins Farias', escola1: '', escola2: 'EEEFM Alfredo Chaves' },
        { nome: 'Vanessa Mendes Souza', escola1: 'EEEFM São José', escola2: '' },
        { nome: 'Pedro Cardoso Ribeiro', escola1: 'EEEFM Alfredo Chaves', escola2: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Ana Nogueira Castro', escola1: 'EEEFM São José', escola2: 'EEEFM Alfredo Chaves' },
        { nome: 'Fernando Oliveira Nunes', escola1: 'EEEFM Alfredo Chaves', escola2: '' },
        { nome: 'Roberto Costa Lima', escola1: 'EMEF Professor Antônio Carlos Santos', escola2: 'EEEFM São José' },
        { nome: 'Tatiane Souza Mendes', escola1: '', escola2: 'EMEF Professor Antônio Carlos Santos' }
    ];



    get professoresFiltrados() {
        return this.membrosProfessores.filter(membro => 
        membro.nome.toLowerCase().includes(this.filtroProf.toLowerCase()));
    }
}
