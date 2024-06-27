import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Login } from '../../Class';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';
import LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None // Desativa o encapsulamento de estilos
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private darkModeService: DarkModeService) {}


  ngOnInit(): void {
    localStorage.setItem('lastRoute', '/login');
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.1, // Adjust this value for more or less fluidity
    });
  }

  login: Login = new Login();

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  get isDarkMode(): boolean {
    return this.darkModeService.isDarkMode;
  }
}
