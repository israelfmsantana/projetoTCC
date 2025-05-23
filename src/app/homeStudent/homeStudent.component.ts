import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-homeStudent',
    templateUrl: './homeStudent.component.html',
    styleUrls: ['./homeStudent.component.css'],
    encapsulation: ViewEncapsulation.None // Desativa o encapsulamento de estilos
})
export class homeStudentComponent implements OnInit {
    constructor(private router: Router, private darkModeService: DarkModeService) {}


    isNotificationsOpen = false;
    currentSection = 'inicio'; // Inicia na seção Início


    // Alternar visibilidade do pop-up de notificações
    toggleNotifications() {
        this.isNotificationsOpen = !this.isNotificationsOpen;
    }

    outLogin(route: String): void {
        localStorage.removeItem("Authorization");
        this.router.navigate([route]);
        }

    // Navegação para as seções
    navigateToInicio() {
        this.currentSection = 'inicio';
    }

    navigateToBatalhas() {
        this.currentSection = 'batalhas';
    }

    navigateToChat() {
        this.currentSection = 'chat';
    }

    navigateToRanking() {
        this.currentSection = 'ranking';
    }

    navigateToAmigos() {
        this.currentSection = 'amigos';
    }

    // Navegação para a página de Perfil
    navigateToPerfil() {
        this.router.navigate(['/perfil']);
    }

    // Navegação para Logout (Exemplo)
    navigateToLogout() {
        // Lógica de logout ou navegação para a página de login
        this.router.navigate(['/login']);
    }





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
        this.verificaLastRoute();
        localStorage.setItem('lastRoute', '/homeStudent');
        setInterval(() => {
        this.itemIndexAtual = (this.itemIndexAtual + 1) % this.lojaItens.length;
        this.lojaItemAtual = this.lojaItens[this.itemIndexAtual];
        }, 4000); // troca a cada 4 segundos
    }

    lastRoute: string;
    verificaLastRoute() {
    this.lastRoute = localStorage.getItem('lastRoute');

    if (this.lastRoute === '/viewRanking') {
        this.secaoAtual = 'Ranking';
    }
    else if (this.lastRoute === '/viewActivitiesStudent') {
        this.secaoAtual = 'Atividades';
    }
    else if (this.lastRoute === '/viewBattle') {
        this.secaoAtual = 'Batalhas';
    }
    else if (this.lastRoute === '/viewShop') {
        this.secaoAtual = 'Loja';
    }
    else if (this.lastRoute === '/viewInventory') {
        this.secaoAtual = 'Inventario';
    }
    else if (this.lastRoute === '/viewChallenges') {
        this.secaoAtual = 'Desafios';
    }
    else {
        this.secaoAtual = 'inicio';
    }
}







  secaoAtual: string = 'inicio';

  selecionarSecao(secao: string) {
    this.secaoAtual = secao;
  }






  grupos = [
    { nome: 'Família', ultimaMensagem: 'Vamos nos reunir no sábado?', hora: '18:30', id: 1 },
    { nome: 'Trabalho', ultimaMensagem: 'Reunião às 9:00 AM', hora: '17:50', id: 2 },
    { nome: 'Amigos de Escola', ultimaMensagem: 'Que horas vai ser a festa?', hora: '16:10', id: 3 },
  ];

  novaMensagem: string = '';





  conversas = [
    {
      nome: 'João Silva',
      foto: 'assets/joao.jpg',
      mensagens: [
        { texto: 'Oi, tudo bem?', enviadaPor: 'João' },
        { texto: 'Sim, e você?', enviadaPor: 'eu' }
      ]
    },
    {
      nome: 'Grupo - Matemática',
      foto: 'assets/grupo-matematica.jpg',
      mensagens: [
        { texto: 'Vamos revisar pra prova?', enviadaPor: 'Maria' },
        { texto: 'Sim! Que horas?', enviadaPor: 'eu' }
      ]
    }
  ];

  conversaAtiva: any = null;

  abrirConversa(conversa: any) {
    this.conversaAtiva = conversa;
  }

  enviarMensagem() {
    if (this.novaMensagem.trim()) {
      this.conversaAtiva.mensagens.push({
        texto: this.novaMensagem,
        enviadaPor: 'eu'
      });
      this.novaMensagem = '';
    }
  }
}
