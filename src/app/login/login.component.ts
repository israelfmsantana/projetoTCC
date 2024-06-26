import { Component, OnInit } from '@angular/core';
import { Login} from '../../Class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.setItem('lastRoute', '/login');
  }

  login: Login = new Login();



  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
