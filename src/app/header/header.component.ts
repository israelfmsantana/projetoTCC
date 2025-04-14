import { Component, AfterViewInit, Renderer2, ViewEncapsulation, OnInit, Output, EventEmitter, ViewChild, ElementRef, HostListener} from '@angular/core';
import { DarkModeService } from '../service/darkMode/dark-mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, AfterViewInit {
  savedMode = "";
  ngOnInit(): void {

    this.verificarLocalStorage();
    this.intervalo = setInterval(() => {
      this.verificarLocalStorage();
    }, 300); // Verifica a cada 500ms


    this.collapseMenu();



    this.savedMode = localStorage.getItem('darkMode');
    if(this.savedMode === "true"){
      this.isToggled = true;
    }
    else {
      this.isToggled = false;
    }
  }
  isToggled = false;

  toggleSlide() {
    this.isToggled = !this.isToggled;
    this.isToggledHead.emit();
  }

  constructor(private renderer: Renderer2, private darkModeService: DarkModeService, private router: Router) {
    this.verificarLocalStorage();
  }

  private intervalo!: any;
  ngOnDestroy() {
    clearInterval(this.intervalo); // Evita vazamento de memória
  }

  verificarLocalStorage() {
    const scroll = localStorage.getItem(this.keyLocalScroll);
    this.lastLocalScroll = scroll // Ativa se o valor for "ativar"
  }



  ngAfterViewInit() {
    const header = this.renderer.selectRootElement('header', true);
    const menuButton = this.renderer.selectRootElement('#menu-button', true);
    const mobileMenu = this.renderer.selectRootElement('#mobile-menu', true);

    this.renderer.listen('window', 'scroll', () => {
      if (window.scrollY > 50) {
        this.renderer.addClass(header, 'scrolled');
      } else {
        this.renderer.removeClass(header, 'scrolled');
      }
    });

    this.renderer.listen(menuButton, 'click', () => {
      if (mobileMenu.classList.contains('hidden')) {
        this.renderer.removeClass(mobileMenu, 'hidden');
      } else {
        this.renderer.addClass(mobileMenu, 'hidden');
      }
    });
  }

  toggleTheme() {
    this.darkModeService.setDarkMode(!this.darkModeService.isDarkMode);
  }

  keyRoute: string = 'lastRoute';
  keyLocalScroll: string = 'localScroll';
  isCollapsed: boolean = false;
  lasrouter: string;
  lastLocalScroll: string;

  verifica(route: string): Boolean {
    if (this.lasrouter === route) {
      return true;
    }
    else {
      return false;
    }
  }

  expandMenu() {
    if (this.isCollapsed) {
      this.isCollapsed = false;
    }
    setTimeout(() => {
      document.querySelector('.nav')?.classList.add('menu-expanded');
    }, 600); // Tempo igual ao tempo de transição em milissegundos
  }

  collapseMenu() {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
    document.querySelector('.nav')?.classList.remove('menu-expanded');
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }


  navigateTo(route: string) {
    this.router.navigate([route]);
  }










  @Output() scrollAbout = new EventEmitter<void>();
  @Output() scrollHome = new EventEmitter<void>();
  @Output() scrollProject = new EventEmitter<void>();
  @Output() isToggledHead = new EventEmitter<void>();
  @Output() scrollContact = new EventEmitter<void>();

  goAbout() {
    this.scrollAbout.emit();
  }

  goHome() {
    this.scrollHome.emit();
  }
  goProject() {
    this.scrollProject.emit();
  }
  goContact() {
    this.scrollContact.emit();
  }




  @ViewChild('meuElemento') meuElemento!: ElementRef;
  estaVisivel = false;
}

