import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewBattle',
    templateUrl: './viewBattle.component.html',
    styleUrl: './viewBattle.component.css'
})
export class viewBattleComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}


    lojaItens = [
        {
        nome: 'Espada Flamejante',
        imagem: '../../assets/loja/espada.png',
        nivel: 3,
        preco: 100,
        },
        {
        nome: 'Elmo do Poder',
        imagem: '../../assets/loja/elmo.png',
        nivel: 5,
        preco: 150,
        },
        {
        nome: 'Capa Mística',
        imagem: '../../assets/loja/capa.png',
        nivel: 2,
        preco: 80,
        },
        {
        nome: 'Poção de Cura',
        imagem: '../../assets/loja/pocao.png',
        nivel: 1,
        preco: 30,
        },
    ];
    
    lojaItemAtual = this.lojaItens[0];
    itemIndexAtual = 0;
    nivelAtual = 4; // Você pode substituir pelo nível real do aluno
    
    ngOnInit() {
        localStorage.setItem('lastRoute', '/viewBattle');
        setInterval(() => {
        this.itemIndexAtual = (this.itemIndexAtual + 1) % this.lojaItens.length;
        this.lojaItemAtual = this.lojaItens[this.itemIndexAtual];
        }, 4000); // troca a cada 4 segundos
    }



    friends = [
        { name: 'Clara', rankingPos: 4 },
        { name: 'Lucas', rankingPos: 5 },
        { name: 'João', rankingPos: 7 },
        { name: 'Ana', rankingPos: 8 },
        { name: 'Pedro', rankingPos: 9 },
        { name: 'Julia', rankingPos: 10 },
        { name: 'Beatriz', rankingPos: 6 }
    ];

    get topFriends() {
        // Ordena pelo rankingPos e pega os 3 primeiros
        return this.friends.sort((a, b) => a.rankingPos - b.rankingPos).slice(0, 3);
    }

    // Restante dos dados
    victories = 68;
    lastBattle = 'Vitória contra Pedro';
    lastBattleScore = '4 x 2';
    ranking = [
        { pos: 4, name: 'Clara' },
        { pos: 5, name: 'Lucas' },
        { pos: 6, name: 'Você' },
        { pos: 7, name: 'João' },
        { pos: 8, name: 'Ana' },
    ];
    lastMessage = {
        sender: 'Pedro',
        text: 'Você vai participar da batalha hoje? 😄',
        time: 'há 1h atrás'
    };



    // homeStudent.component.ts
    missionModalOpen = false;

    missionTasks = [
    { title: 'Complete 3 atividades de matemática', xp: 100, coins: 50 },
    { title: 'Responda ao quiz diário de ciências', xp: 120, coins: 60 },
    { title: 'Participe de 1 batalha com XP', xp: 150, coins: 80 },
    { title: 'Comente na atividade de português', xp: 80, coins: 40 }
    ];

    openMissionModal() {
    this.missionModalOpen = true;
    }

    closeMissionModal() {
    this.missionModalOpen = false;
    }

    isProfileModalOpen: boolean = false;

    // Função para abrir o modal
    openProfileModal() {
        this.isProfileModalOpen = true;
    }

    // Função para fechar o modal
    closeProfileModal() {
        this.isProfileModalOpen = false;
    }



    idiomas = [
        { nome: 'Espanhol', codigo: 'es', ativo: false },
        { nome: 'Inglês', codigo: 'gb', ativo: false },
        { nome: 'Português', codigo: 'br', ativo: true },
        { nome: 'Francês', codigo: 'fr', ativo: false },
        { nome: 'Italiano', codigo: 'it', ativo: false },
    ];

    idiomaSelecionado = 'br';
    oponenteSelecionado = '';
    faseAtual = 1;

    girando = false;

    selecionarIdioma(codigo: string) {
        this.idiomas.forEach(id => id.ativo = id.codigo === codigo);
        this.idiomaSelecionado = codigo;
    }

    selecionarOponente(tipo: string) {
        this.oponenteSelecionado = tipo;
    }

    girarRoda() {
        if (this.girando) return;
        this.girando = true;

        // Simula animação de rotação da roda
        setTimeout(() => {
        this.girando = false;
        this.faseAtual++;
        }, 2000);
    }
}
