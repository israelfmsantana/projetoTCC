import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
  selector: 'app-createSchool',
  templateUrl: './createSchool.component.html',
  styleUrl: './createSchool.component.css'
})
export class createSchoolComponent implements OnInit {

  constructor(private router: Router, private darkModeService: DarkModeService) {}
  

  ngOnInit(): void {
    // localStorage.setItem('lastRoute', '/project');
  }

  @Output() fechar = new EventEmitter<void>();
  
  nomeEscola: string = '';

  fecharModal() {
    this.fechar.emit();
  }

  salvarEscola() {
    console.log('Escola adicionada:', this.nomeEscola);
    this.fechar.emit();
  }
}
