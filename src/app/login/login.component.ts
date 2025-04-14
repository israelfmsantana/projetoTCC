import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import { Login } from '../../Class';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None // Desativa o encapsulamento de estilos
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private darkModeService: DarkModeService) {}

  // constructor(private conectLogin: ConectLogin, private toastr: ToastrService) {}

  ngOnInit(): void {
    localStorage.setItem('lastRoute', '/login');
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  senha: string = '';

  entrar(): void {
    let key = "Authorization";
    let token = this.senha; 
    window.localStorage.setItem(key, token);

    if (token === "111")
    this.router.navigate(["/homeManager"]);

    else if (token === "222")
    this.router.navigate(["/homeCoordination"]);

    else if (token === "333")
    this.router.navigate(["/homeTeacher"]);
  
    else if (token === "444")
    this.router.navigate(["/homeStudent"]);
  }

  


//   savedMode = "";
//   isToggled = false;
//   ngOnInit(): void {
//     localStorage.setItem('lastRoute', '/home');
//     this.images = document.querySelectorAll('.carousel img');
//     this.startCarousel();

//     this.savedMode = localStorage.getItem('darkMode');
//     if(this.savedMode === "true"){
//       this.isToggled = true;
//     }
//     else {
//       this.isToggled = false;
//     }
//   }


//   toggleSlide() {
//     this.isToggled = !this.isToggled;
//   }

//   currentIndex = 0;
//   images: NodeListOf<HTMLImageElement>;

//   startCarousel() {
//     setInterval(() => {
//       this.slideNext();
//     }, 4000);
//   }
  

//   slideNext() {
//     this.images[this.currentIndex].classList.add('hidden');
//     this.currentIndex = (this.currentIndex + 1) % this.images.length;
//     this.images[this.currentIndex].classList.remove('hidden');
//   }


//   login: Login = new Login();

//   navigateTo(route: string): void {
//     this.router.navigate([route]);
//   }

//   get isDarkMode(): boolean {
//     return this.darkModeService.isDarkMode;
//   }




//   @ViewChild('irAbout') irAbout!: ElementRef;
//   @ViewChild('irHome') irHome!: ElementRef;
//   @ViewChild('irProject') irProject!: ElementRef;
//   @ViewChild('irContact') irContact!: ElementRef;

//   rollAbout() {
//     const elemento = document.getElementById('about');
//     if (elemento) {
//       elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   }

//   rollHome() {
//     const elemento = document.getElementById('home');
//     if (elemento) {
//       elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   }

//   rollProject() {
//     const elemento = document.getElementById('project');
//     if (elemento) {
//       elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   }

//   rollContact() {
//     const elemento = document.getElementById('contact');
//     if (elemento) {
//       elemento.scrollIntoView({ behavior: 'smooth', block: 'end' });
//     }
//   }




//   @ViewChild('localScrollHome') localScrollHome!: ElementRef;
//   @ViewChild('localScrollAbout') localScrollAbout!: ElementRef;
//   @ViewChild('localScrollProject') localScrollProject!: ElementRef;
//   @ViewChild('localScrollContact') localScrollContact!: ElementRef;
  
//   estaVisivel = false;

//   ngAfterViewInit() {

//     const observerHome = new IntersectionObserver(([entry]) => {
//       this.estaVisivel = entry.isIntersecting; // Se estiver visível, atualiza a variável
//       if (this.estaVisivel) {
//         localStorage.setItem('localScroll', 'home');
//       }
//     }, { threshold: 0.9 }); // Define um limite de visibilidade (10% do elemento visível)
//     observerHome.observe(this.localScrollHome.nativeElement);
    

//     const observerAbout = new IntersectionObserver(([entry]) => {
//       this.estaVisivel = entry.isIntersecting; // Se estiver visível, atualiza a variável
//       if (this.estaVisivel) {
//         localStorage.setItem('localScroll', 'about');
//       }
//     }, { threshold: 0.9 }); // Define um limite de visibilidade (10% do elemento visível)
//     observerAbout.observe(this.localScrollAbout.nativeElement);


//     const observerProject = new IntersectionObserver(([entry]) => {
//       this.estaVisivel = entry.isIntersecting; // Se estiver visível, atualiza a variável
//       if (this.estaVisivel) {
//         localStorage.setItem('localScroll', 'project');
//       }
//     }, { threshold: 0.9 }); // Define um limite de visibilidade (10% do elemento visível)
//     observerProject.observe(this.localScrollProject.nativeElement);
    
    
//     const observerContact = new IntersectionObserver(([entry]) => {
//       this.estaVisivel = entry.isIntersecting; // Se estiver visível, atualiza a variável
//       if (this.estaVisivel) {
//         localStorage.setItem('localScroll', 'contact');
//       }
//     }, { threshold: 0.9 }); // Define um limite de visibilidade (10% do elemento visível)
//     observerContact.observe(this.localScrollContact.nativeElement);
//   }
}
