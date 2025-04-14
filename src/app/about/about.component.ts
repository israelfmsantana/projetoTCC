import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../service/darkMode/dark-mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  constructor(private router: Router, private darkModeService: DarkModeService) {}
  

  ngOnInit(): void {
    localStorage.setItem('lastRoute', '/about');
  }
  
}
