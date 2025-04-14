import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import { Login} from '../../Class';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
  selector: 'app-homeTeacher',
  templateUrl: './homeTeacher.component.html',
  styleUrls: ['./homeTeacher.component.css'],
  encapsulation: ViewEncapsulation.None // Desativa o encapsulamento de estilos
})
export class homeTeacherComponent implements OnInit {
  constructor( private router: Router, private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    localStorage.setItem('lastRoute', '/homeManager');
  }

  
  isNotificationsOpen = false;

  toggleNotifications() {
    this.isNotificationsOpen = !this.isNotificationsOpen;
  }
  

  secaoAtual: string = 'inicio';
  teste: boolean = true;

  detailsSchool: boolean;


  fecharDetalhes() {
    this.detailsSchool = true; // Fecha e volta para o título
  }

  selecionarSecao(secao: string) {
    this.secaoAtual = secao;
    if(this.secaoAtual === 'escola') {
      this.detailsSchool = false;
    }
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
