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
    // localStorage.setItem('lastRoute', '/project');
  }

  @Output() fechar = new EventEmitter<void>();
  
  nome: string = '';

  fecharModal() {
    this.fechar.emit();
  }

  salvarCoordenacao() {
    console.log('Coordenação adicionada:', this.nome);
    this.fechar.emit();
  }
}
