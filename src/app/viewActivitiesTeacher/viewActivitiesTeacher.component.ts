import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
    selector: 'app-viewActivitiesTeacher',
    templateUrl: './viewActivitiesTeacher.component.html',
    styleUrl: './viewActivitiesTeacher.component.css'
})
export class viewActivitiesTeacherComponent implements OnInit {

    constructor(private router: Router, private darkModeService: DarkModeService) {}


    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/viewActivitiesTeacher');
        this.verificaModalPesquisaAvancada();
        this.verificaModalCC();
        this.verificaModalDetalhes();
    }


    mostrarModalCC: boolean = false;
    exibirModalCreateCoordination(mostrar: boolean) {
      this.mostrarModalCC = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalAd', 'coordination');
        }
        else {
            localStorage.setItem('mostrarModalAd', '');
        }
    }

    mostrarModalCCStorage: String;
    verificaModalCC() {
        this.mostrarModalCCStorage = localStorage.getItem('mostrarModalAd');
        if (this.mostrarModalCCStorage === 'coordination') {
            this.mostrarModalCC = true;
        }
        else {
            this.mostrarModalCC = false;
        }
    }




    filtro: string = '';
    membrosCoordenacao = [
        { nome: 'João Silva Pereira', cargo: 'Diretor', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Maria Oliveira Costa', cargo: 'Coordenador', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Ana Souza Lima', cargo: 'Pedagogo', escola: 'EEEFM São José' },
        { nome: 'Pedro Santos Rocha', cargo: 'Coordenador', escola: 'EEEFM São José' },
        { nome: 'Carlos Mendes Pereira', cargo: 'Diretor', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Fernanda Lima Alves', cargo: 'Coordenador', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Ricardo Gomes Oliveira', cargo: 'Pedagogo', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Paula Fernandes Costa', cargo: 'Coordenador', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Lucas Martins Silva', cargo: 'Diretor', escola: 'EEEFM São José' },
        { nome: 'Juliana Castro Rodrigues', cargo: 'Pedagogo', escola: 'EEEFM São José' },
        { nome: 'Eduardo Nunes Pereira', cargo: 'Diretor', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Camila Rocha Almeida', cargo: 'Coordenador', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Roberto Farias Costa', cargo: 'Pedagogo', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Tatiane Lopes Silva', cargo: 'Coordenador', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Fernando Ribeiro Martins', cargo: 'Pedagogo', escola: 'EEEFM São José' },
        { nome: 'Mariana Souza Ferreira', cargo: 'Coordenador', escola: 'EEEFM São José' },
        { nome: 'Gustavo Lima Souza', cargo: 'Diretor', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Vanessa Mendes Oliveira', cargo: 'Coordenador', escola: 'EMEF Professor Antônio Carlos Santos' },
        { nome: 'Bruno Cardoso Pereira', cargo: 'Pedagogo', escola: 'EEEFM Alfredo Chaves' },
        { nome: 'Letícia Almeida Souza', cargo: 'Coordenador', escola: 'EEEFM Alfredo Chaves' }
    ];



    get membrosFiltrados() {
    return this.membrosCoordenacao.filter(membro =>
        membro.nome.toLowerCase().includes(this.filtro.toLowerCase()));
    }


    cargosSelecionados: string[] = [];

    alternarCargo(cargo: string) {
        const index = this.cargosSelecionados.indexOf(cargo);
        if (index > -1) {
            this.cargosSelecionados.splice(index, 1); // Remove se já estava
        } else {
            this.cargosSelecionados.push(cargo); // Adiciona se não estava
        }
    }

    ordemColocacao: 'asc' | 'desc' = 'asc';

    alternarOrdenacao() {
        this.ordemColocacao = this.ordemColocacao === 'asc' ? 'desc' : 'asc';

    }

    modalDetails: String;
    verificaModalDetalhes() {
        this.modalDetails = localStorage.getItem('details');
        if (this.modalDetails === 'true'){

        }
    }



    mostrarModalPA: boolean;
    mostrarModalPAStorage: String;
    ExibirModalPA(mostrar: boolean) {
        this.mostrarModalPA = mostrar;
        if (mostrar){
            localStorage.setItem('mostrarModalPA', 'coordination');
        }
        else {
            localStorage.setItem('mostrarModalPA', '');
        }
    }

    verificaModalPesquisaAvancada() {
        this.mostrarModalPAStorage = localStorage.getItem('mostrarModalPA');
        if(this.mostrarModalPAStorage === 'coordination') {
            this.mostrarModalPA = true;
        }
        else {
            this.mostrarModalPA = false;
        }
    }





    atividades = [
        {
          tema: 'Frações',
          questoes: [
            { enunciado: 'Quanto é 1/2 + 1/4?', alternativas: ['3/4', '1/2', '1', '2'], resposta: '3/4' },
            { enunciado: 'Quanto é 3/5 - 1/5?', alternativas: ['1/5', '2/5', '3/5', '4/5'], resposta: '2/5' },
            { enunciado: 'Qual fração é equivalente a 2/4?', alternativas: ['1/2', '3/4', '1/3', '2/3'], resposta: '1/2' },
            { enunciado: 'Qual é o resultado de 1/3 + 1/6?', alternativas: ['1/2', '2/3', '5/6', '1/6'], resposta: '1/2' },
            { enunciado: 'Quanto é 5/8 - 1/8?', alternativas: ['3/8', '4/8', '5/8', '2/8'], resposta: '4/8' }
          ]
        },
        {
          tema: 'Números Inteiros',
          questoes: [
            { enunciado: 'Qual é o oposto de -7?', alternativas: ['7', '-7', '0', '-1'], resposta: '7' },
            { enunciado: 'Quanto é -3 + 5?', alternativas: ['-8', '-2', '2', '8'], resposta: '2' },
            { enunciado: 'Qual número é menor?', alternativas: ['-1', '0', '-3', '1'], resposta: '-3' },
            { enunciado: 'Quanto é -4 - 6?', alternativas: ['10', '-10', '-2', '2'], resposta: '-10' },
            { enunciado: 'Qual número está entre -2 e 2?', alternativas: ['3', '0', '-3', '5'], resposta: '0' }
          ]
        },
        {
          tema: 'Operações Básicas',
          questoes: [
            { enunciado: 'Quanto é 7 + 5?', alternativas: ['10', '11', '12', '13'], resposta: '12' },
            { enunciado: 'Qual é o resultado de 9 - 3?', alternativas: ['6', '7', '5', '4'], resposta: '6' },
            { enunciado: 'Quanto é 4 × 6?', alternativas: ['20', '24', '22', '26'], resposta: '24' },
            { enunciado: 'Qual é o quociente de 20 ÷ 4?', alternativas: ['4', '5', '6', '3'], resposta: '5' },
            { enunciado: 'Qual o resultado de 3 × 3 + 1?', alternativas: ['9', '10', '11', '12'], resposta: '10' }
          ]
        },
        {
          tema: 'Geometria',
          questoes: [
            { enunciado: 'Quantos lados tem um triângulo?', alternativas: ['3', '4', '5', '6'], resposta: '3' },
            { enunciado: 'Um quadrado tem:', alternativas: ['4 lados iguais', '3 lados', '2 lados maiores', '6 lados'], resposta: '4 lados iguais' },
            { enunciado: 'O que é um ângulo reto?', alternativas: ['45º', '60º', '90º', '180º'], resposta: '90º' },
            { enunciado: 'Quantos vértices tem um retângulo?', alternativas: ['2', '4', '6', '8'], resposta: '4' },
            { enunciado: 'Qual figura tem todos os lados iguais e ângulos retos?', alternativas: ['Retângulo', 'Triângulo', 'Quadrado', 'Trapézio'], resposta: 'Quadrado' }
          ]
        },
        {
          tema: 'Medidas',
          questoes: [
            { enunciado: 'Quantos centímetros há em 1 metro?', alternativas: ['10', '100', '1000', '1'], resposta: '100' },
            { enunciado: 'Qual unidade usamos para medir peso?', alternativas: ['Litro', 'Metro', 'Quilograma', 'Hora'], resposta: 'Quilograma' },
            { enunciado: 'O litro mede:', alternativas: ['Tempo', 'Distância', 'Peso', 'Capacidade'], resposta: 'Capacidade' },
            { enunciado: 'Quanto é 1 metro e meio em centímetros?', alternativas: ['100 cm', '150 cm', '200 cm', '50 cm'], resposta: '150 cm' },
            { enunciado: 'Qual medida usamos para o tempo?', alternativas: ['Metro', 'Litro', 'Minuto', 'Grama'], resposta: 'Minuto' }
          ]
        }
      ];


      atividadeSelecionada: any = null;

questaoAtualIndex: number = 0;
questaoAtual: any = null;

abrirDetalhes(atividade: any) {
  this.atividadeSelecionada = atividade;
  this.questaoAtualIndex = 0;
  this.questaoAtual = atividade.questoes[0];
}

fecharDetalhes() {
  this.atividadeSelecionada = null;
  this.questaoAtualIndex = 0;
  this.questaoAtual = null;
}

proximaQuestao() {
  if (this.questaoAtualIndex < this.atividadeSelecionada.questoes.length - 1) {
    this.questaoAtualIndex++;
    this.questaoAtual = this.atividadeSelecionada.questoes[this.questaoAtualIndex];
  }
}

anteriorQuestao() {
  if (this.questaoAtualIndex > 0) {
    this.questaoAtualIndex--;
    this.questaoAtual = this.atividadeSelecionada.questoes[this.questaoAtualIndex];
  }
}




}
