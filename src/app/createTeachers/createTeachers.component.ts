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
        localStorage.setItem('mostrarModalAd', 'teacher');
    }

    @Output() fechar = new EventEmitter<void>();

    nome: string = '';
    materia: string = '';
    escola: string = '';
    email: string = '';


    fecharModalAdicionar() {
        localStorage.setItem('mostrarModalAd', '');
        this.fechar.emit();
    }

    cadastrarProfessor() {
        localStorage.setItem('mostrarModalAd', '');
        console.log('Professor adicionada:', this.nome);
        this.fechar.emit();
    }


    anoSelecionados: string;

    alternarAno(ano: string) {
        this.anoSelecionados = ano;
    }


    materiaSelecionados: string[] = [];

    alternarMateria(materia: string) {
        const index = this.materiaSelecionados.indexOf(materia);
        if (index > -1) {
            this.materiaSelecionados.splice(index, 1); // Remove se já estava
        } else {
            this.materiaSelecionados.push(materia); // Adiciona se não estava
        }
    }
}
