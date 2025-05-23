import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewActivitiesStudent',
    templateUrl: './viewActivitiesStudent.component.html',
    styleUrl: './viewActivitiesStudent.component.css'
})
export class viewActivitiesStudentComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewActivitiesStudent');
        this.verificaModalPesquisaAvancada();
        this.verificaModalCC();
        this.verificaModalDetalhes();
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
    membrosCoordenacao = [
        { nome: 'João Silva Pereira', cargo: 'Diretor', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Maria Oliveira Costa', cargo: 'Coordenador', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Ana Souza Lima', cargo: 'Pedagogo', escola: 'EEEFM São José' },
        { nome: 'Pedro Santos Rocha', cargo: 'Coordenador', escola: 'EEEFM São José' },
        { nome: 'Carlos Mendes Pereira', cargo: 'Diretor', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Fernanda Lima Alves', cargo: 'Coordenador', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Ricardo Gomes Oliveira', cargo: 'Pedagogo', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Paula Fernandes Costa', cargo: 'Coordenador', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Lucas Martins Silva', cargo: 'Diretor', escola: 'EEEFM São José' },
        { nome: 'Juliana Castro Rodrigues', cargo: 'Pedagogo', escola: 'EEEFM São José' },
        { nome: 'Eduardo Nunes Pereira', cargo: 'Diretor', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Camila Rocha Almeida', cargo: 'Coordenador', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Roberto Farias Costa', cargo: 'Pedagogo', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Tatiane Lopes Silva', cargo: 'Coordenador', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Fernando Ribeiro Martins', cargo: 'Pedagogo', escola: 'EEEFM São José' },
        { nome: 'Mariana Souza Ferreira', cargo: 'Coordenador', escola: 'EEEFM São José' },
        { nome: 'Gustavo Lima Souza', cargo: 'Diretor', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Vanessa Mendes Oliveira', cargo: 'Coordenador', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Bruno Cardoso Pereira', cargo: 'Pedagogo', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Letícia Almeida Souza', cargo: 'Coordenador', escola: 'EEEFM Alfredo Chaves' }
    ];



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
