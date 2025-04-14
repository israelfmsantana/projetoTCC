import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import { Login} from '../../Class';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-homeManager',
    templateUrl: './homeManager.component.html',
    styleUrls: ['./homeManager.component.css'],
    encapsulation: ViewEncapsulation.None // Desativa o encapsulamento de estilos
})
export class HomeManagerComponent implements OnInit {
    constructor( private router: Router, private darkModeService: DarkModeService) {}

    ngOnInit(): void {
        this.verificaLastRoute();
        localStorage.setItem('lastRoute', '/homeManager');
    }

    
    isNotificationsOpen = false;

    toggleNotifications() {
        this.isNotificationsOpen = !this.isNotificationsOpen;
    }

    verificaLastRoute() {
        this.lastRoute = localStorage.getItem('lastRoute');

        if (this.lastRoute === '/viewSchool') {
            this.secaoAtual = 'escola';
        }
        else if (this.lastRoute === '/viewCoordination') {
            this.secaoAtual = 'coordenacao';
        }
        else if (this.lastRoute === '/viewTeachers') {
            this.secaoAtual = 'professores';
        }
        else {
            this.secaoAtual = 'escola';
        }
    }
    
    lastRoute: string;
    secaoAtual: string;
    teste: boolean = true;

    detailsSchool: boolean;


    abrirDetalhes() {
        this.detailsSchool = true;
    }

    selecionarSecao(secao: string) {
        this.secaoAtual = secao;
        this.detailsSchool = false;

    }

    navigateTo(route: String): void {
        this.router.navigate([route]);
    }
    outLogin(route: String): void {
        localStorage.removeItem("Authorization");
        this.router.navigate([route]);
    }
    
    perfilAtual = 'Administrador';
    perfis = ['Administrador', 'Coordenador'];
    mostrarDropdown = false;

    trocarPerfil(novoPerfil: string) {
        this.perfilAtual = novoPerfil;
        this.mostrarDropdown = false;
    }

}
