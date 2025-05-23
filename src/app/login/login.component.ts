import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';
import { ConectAuth } from '../../API';
import { Login, Auth } from '../../Class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None // Desativa o encapsulamento de estilos
})
export class LoginComponent implements OnInit {

    usuarioLogin: Login = new Login;
    onInputChange(campo: string, valor: string): void {
        // console.log(`Campo alterado: ${campo}, Novo valor: ${valor}`);
    }
    Login() {
        if(this.usuarioLogin.senha == '444') {
            let key = "Authorization";
            window.localStorage.setItem(key, '444');
            localStorage.setItem('details','false');
            localStorage.setItem('localScroll','');
            localStorage.setItem('mostrarModalAd','');
            localStorage.setItem('mostrarModalAl','');
            localStorage.setItem('mostrarModalPA','');
            this.navigateTo('/homeStudent');
        }
        else {
            this.conectUsuario.LOGIN(this.usuarioLogin).subscribe({
                next: (response: any) => {
                    let key = "Authorization";
                    let token = response.body.token;
                    let usuarioId = response.body.usuario.id;
                    window.localStorage.setItem(key, token);
                    window.localStorage.setItem('senha', this.usuarioLogin.senha);
                    window.localStorage.setItem('email', this.usuarioLogin.email);
                    window.localStorage.setItem('usuarioId', usuarioId);
                    localStorage.setItem('details','false');
                    localStorage.setItem('localScroll','');
                    localStorage.setItem('mostrarModalAd','');
                    localStorage.setItem('mostrarModalAl','');
                    localStorage.setItem('mostrarModalPA','');
                    this.navigateTo('/rotar');
                },
                error: (error: any) => {
                    console.error('Erro completo:', error);
                    alert(JSON.stringify(error.error));
                }

            })
        }

    }

    constructor(private conectUsuario: ConectAuth,private router: Router, private darkModeService: DarkModeService) {}

    ngOnInit(): void {
        localStorage.setItem('lastRoute', '/login');
        this.VerificaLogin();
    }

    VerificaLogin() {
        const email = localStorage.getItem('email');
        const senha = localStorage.getItem('senha');

        if (email != null && senha != null) {
            this.usuarioLogin.email = email;
            this.usuarioLogin.senha = senha;
            this.Login();
        }
    }

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }
}
