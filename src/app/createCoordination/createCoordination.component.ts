import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-createCoordination',
    templateUrl: './createCoordination.component.html',
    styleUrl: './createCoordination.component.css'
})
export class createCoordinationComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}


    ngOnInit(): void {
        localStorage.setItem('mostrarModalAd', 'coordination');
    }

    @Output() fechar = new EventEmitter<void>();

    nome: string = '';
    escola: string = '';
    email: string = '';

    fecharModalAdicionar() {
        localStorage.setItem('mostrarModalAd', '');
        this.fechar.emit();
    }

    cadastrarCoordenacao() {
        localStorage.setItem('mostrarModalAd', '');
        console.log('Coordenação adicionada:', this.nome);
        this.fechar.emit();
    }



    cargosSelecionados: string;

    alternarCargo(cargo: string) {
        this.cargosSelecionados = cargo;
    }
}
