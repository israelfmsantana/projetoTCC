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
        localStorage.setItem('mostrarModalAd', 'student');
    }

    @Output() fechar = new EventEmitter<void>();

    nome: string = '';


    fecharModalAdicionar() {
        localStorage.setItem('mostrarModalAd', '');
        this.fechar.emit();
    }

    cadastrarAluno() {
        localStorage.setItem('mostrarModalAd', '');
        console.log('Aluno adicionada:', this.nome);
        this.fechar.emit();
    }


    anoSelecionados: string = '';
    salaSelecionados: string = '';

    alternarAno(ano: string) {
      this.anoSelecionados = ano;
      this.salaSelecionados = ''; // limpa a sala ao trocar o ano
    }

    // Define quais salas estão disponíveis para cada ano
    salasDisponiveisPorAno: { [key: string]: string[] } = {
      sexto: ['A', 'B'],
      setimo: ['A', 'B', 'C'],
      oitavo: ['A', 'B', 'C', 'D'],
      nono: ['A', 'C', 'D'],
    };

    alternarSala(sala: string) {
      // Verifica se a sala está disponível para o ano selecionado
      if (this.anoSelecionados && this.salasDisponiveisPorAno[this.anoSelecionados]?.includes(sala)) {
        this.salaSelecionados = sala;
      }
    }

}
