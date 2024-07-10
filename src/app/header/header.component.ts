import { Component, AfterViewInit, Renderer2, ViewEncapsulation, OnInit} from '@angular/core';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, AfterViewInit {
  savedMode = "";
  ngOnInit(): void {

    this.collapseMenu();
    this.lasrouter = window.localStorage.getItem(this.keyRoute);
    this.verifica(this.lasrouter);



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
  }

  constructor(private renderer: Renderer2, private darkModeService: DarkModeService) {}

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














  // ngOnInit(): void {
  //   this.collapseMenu();
  //   this.lasrouter = window.localStorage.getItem(this.keyRoute);
  //   this.verifica(this.lasrouter)

    
  // }

  keyRoute: string = 'lastRoute';
  isCollapsed: boolean = false;
  lasrouter: string;

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
    // this.router.navigate([route]);
  }
}
