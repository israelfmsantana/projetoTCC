import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';



@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent implements OnInit, OnDestroy {
  currentPosition = 1;
  intervalId: any; // Tipo pode ser ajustado conforme necessário

  // Tempos de visualização individuais para cada item (em milissegundos)
  itemDurations = [5000, 3000, 6000, 4000, 7000];

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateCarouselPosition() {
    return { '--position': this.currentPosition.toString() };
  }

  nextItem() {
    this.currentPosition = (this.currentPosition % 5) + 1; // Assume que há 5 itens no carrossel
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextItem();
      this.restartInterval();
    }, this.itemDurations[this.currentPosition - 1]);
  }

  restartInterval() {
    clearInterval(this.intervalId);
    this.startCarousel();
  }

  setCarouselPosition(position: number) {
    this.currentPosition = position;
    this.restartInterval();
  }
  
  
}
