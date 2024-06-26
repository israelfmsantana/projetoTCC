import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.navigateTo("/login");
  }


  navigateTo(route: string) {
    this.router.navigate([route]);
  }


}
