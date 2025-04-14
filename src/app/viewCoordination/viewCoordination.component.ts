import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewCoordination',
    templateUrl: './viewCoordination.component.html',
    styleUrl: './viewCoordination.component.css'
})
export class viewCoordinationComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}
  

    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewCoordination');
    }


    modalAberto: boolean = false;
    abrirModalCreateCoordination() {
        this.modalAberto = true;
    }
    fecharModalCreateCoordination() {
        this.modalAberto = false;
    }




    filtro: string = '';
    membrosCoordenacao = [
        { nome: 'João Silva Pereira', cargo: 'Diretor', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Maria Oliveira Costa', cargo: 'Coordenadora', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Ana Souza Lima', cargo: 'Diretora', escola: 'EEEFM São José' },
        { nome: 'Pedro Santos Rocha', cargo: 'Coordenador', escola: 'EEEFM São José' },
        { nome: 'Carlos Mendes Pereira', cargo: 'Diretor', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Fernanda Lima Alves', cargo: 'Coordenadora', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Ricardo Gomes Oliveira', cargo: 'Diretor', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Paula Fernandes Costa', cargo: 'Coordenadora', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Lucas Martins Silva', cargo: 'Diretor', escola: 'EEEFM São José' },
        { nome: 'Juliana Castro Rodrigues', cargo: 'Coordenadora', escola: 'EEEFM São José' },
        { nome: 'Eduardo Nunes Pereira', cargo: 'Diretor', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Camila Rocha Almeida', cargo: 'Coordenadora', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Roberto Farias Costa', cargo: 'Diretor', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Tatiane Lopes Silva', cargo: 'Coordenadora', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Fernando Ribeiro Martins', cargo: 'Diretor', escola: 'EEEFM São José' },
        { nome: 'Mariana Souza Ferreira', cargo: 'Coordenadora', escola: 'EEEFM São José' },
        { nome: 'Gustavo Lima Souza', cargo: 'Diretor', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Vanessa Mendes Oliveira', cargo: 'Coordenadora', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Bruno Cardoso Pereira', cargo: 'Diretor', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Letícia Almeida Souza', cargo: 'Coordenadora', escola: 'EEEFM Alfredo Chaves' }
    ];



    get membrosFiltrados() {
    return this.membrosCoordenacao.filter(membro => 
        membro.nome.toLowerCase().includes(this.filtro.toLowerCase()));
    }





    @Input() detailsSchool: boolean = false; // Recebe do pai
    @Output() abrirDetalhes = new EventEmitter<void>(); // Envia para o pai

    abrirDetailsCoordination() {
        this.abrirDetalhes.emit(); 
    }
}
