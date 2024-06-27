import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DarkModeService } from './service/darkMode/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private router: Router,private darkModeService: DarkModeService) {

  }

  ngOnInit(): void {
    this.navigateTo("/login");
  }


  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  title = 'angular-dark-mode';


}
