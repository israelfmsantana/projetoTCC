import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewSchool',
    templateUrl: './viewSchool.component.html',
    styleUrl: './viewSchool.component.css'
})
export class viewSchoolComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}
    

    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewSchool');
    }


    modalAberto: boolean = false;
    abrirModalCreateSchool() {
        this.modalAberto = true;
    }
    fecharModalCreateSchool() {
        this.modalAberto = false;
    }



    filtroEscolas: string = '';
    listaEscolas = [
        { nome: 'EEEFM Alfredo Chaves', diretor: 'João Silva', coordenador: 'Maria Oliveira', colocacao: "1" },
        { nome: 'EEEFM São José', diretor: 'Ana Souza', coordenador: 'Pedro Santos', colocacao: "4" },
        { nome: 'EMEF Professor Antônio Carlos Santos', diretor: 'Ricardo Alves', coordenador: 'Tatiane Rocha', colocacao: "2" },
        { nome: 'EEEFM São Domingos', diretor: 'Fernando Ribeiro', coordenador: 'Juliana Costa', colocacao: "6" },
        { nome: 'EEEFM Manoel Vieira Lessa', diretor: 'Lucas Martins', coordenador: 'Beatriz Ferreira', colocacao: "7" },
        { nome: 'EEEFM Zélia Viana', diretor: 'Paulo César', coordenador: 'Vanessa Lima', colocacao: "5" },
        { nome: 'EEEFM Dom João Batista', diretor: 'André Santos', coordenador: 'Camila Souza', colocacao: "8" },
        { nome: 'EMEF Professora Hilda Miranda', diretor: 'Mariana Nunes', coordenador: 'Roberto Farias', colocacao: "9" },
        { nome: 'EMEF Professor Paulo Freire', diretor: 'Bruno Costa', coordenador: 'Carla Andrade', colocacao: "3" },
    ];

    filtroDiretor = '';
    filtroCoordenador = '';
    mostrarModal = false;

    get escolasFiltrados() {
    return this.listaEscolas.filter(escola =>
        escola.nome.toLowerCase().includes(this.filtroEscolas.toLowerCase()) &&
        escola.diretor.toLowerCase().includes(this.filtroDiretor.toLowerCase()) &&
        escola.coordenador.toLowerCase().includes(this.filtroCoordenador.toLowerCase())
    );
    }

    limparFiltros() {
        this.filtroDiretor = '';
        this.filtroCoordenador = '';
        this.filtroEscolas = '';
    }




    @Input() detailsSchool: boolean = false; // Recebe do pai
    @Output() abrirDetalhes = new EventEmitter<void>(); // Envia para o pai

    abrirDetailsSchool() {
        this.abrirDetalhes.emit(); 
    }
}
