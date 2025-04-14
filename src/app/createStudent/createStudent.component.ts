import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
  selector: 'app-createStudent',
  templateUrl: './createStudent.component.html',
  styleUrl: './createStudent.component.css'
})
export class createStudentComponent implements OnInit {

  constructor(private router: Router, private darkModeService: DarkModeService) {}
  

  ngOnInit(): void {
    // localStorage.setItem('lastRoute', '/project');
  }

  @Output() fechar = new EventEmitter<void>();
  
  nome: string = '';

  fecharModal() {
    this.fechar.emit();
  }

  salvarAluno() {
    console.log('aluno adicionada:', this.nome);
    this.fechar.emit();
  }
}
