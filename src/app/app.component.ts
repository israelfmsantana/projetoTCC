import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DarkModeService } from './service/darkMode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  // private cursorShadow!: HTMLElement;
  // private mouseX = 0;
  // private mouseY = 0;
  // private shadowX = 0;
  // private shadowY = 0;

  ngOnInit() {
    // this.cursorShadow = document.getElementById('cursor-shadow')!;
    // this.animateCursor();
  }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   this.mouseX = event.clientX;
  //   this.mouseY = event.clientY;

  //   // Altera a cor com base na posição
  //   const red = Math.min(255, Math.max(0, (this.mouseX / window.innerWidth) * 255));
  //   const blue = Math.min(255, Math.max(0, (this.mouseY / window.innerHeight) * 255));
  // }

  // private animateCursor() {
  //   requestAnimationFrame(() => this.animateCursor());

  //   // Suaviza o movimento (efeito de delay)
  //   this.shadowX += (this.mouseX - this.shadowX) * 0.9;
  //   this.shadowY += (this.mouseY - this.shadowY) * 0.9;

  //   this.cursorShadow.style.transform = `translate(${this.shadowX - 32}px, ${this.shadowY - 32}px)`;
  // }
  
  constructor(private router: Router,private darkModeService: DarkModeService) {

  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  title = 'angular-dark-mode';


}
