import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

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
}
