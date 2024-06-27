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
}
