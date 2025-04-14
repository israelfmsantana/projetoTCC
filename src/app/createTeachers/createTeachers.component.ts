import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
  selector: 'app-createTeachers',
  templateUrl: './createTeachers.component.html',
  styleUrl: './createTeachers.component.css'
})
export class CreateTeachersComponent implements OnInit {

  constructor(private router: Router, private darkModeService: DarkModeService) {}
  

  ngOnInit(): void {
    // localStorage.setItem('lastRoute', '/project');
  }

  @Output() fechar = new EventEmitter<void>();
  
  nome: string = '';

  fecharModal() {
    this.fechar.emit();
  }

  salvarProfessor() {
    console.log('Professor adicionada:', this.nome);
    this.fechar.emit();
  }
}
