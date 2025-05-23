import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../service/darkMode/dark-mode.service';
import { Login, ResponseUsuarioEscolaPerfil, Auth, UsuarioEscolaPerfil } from '../../Class';
import { jwtDecode } from 'jwt-decode';
import { ConectAuth, ConectUsuarioEscolaPerfil } from '../../API';
import { HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-homeTeacher',
    templateUrl: './homeTeacher.component.html',
    styleUrls: ['./homeTeacher.component.css'],
    encapsulation: ViewEncapsulation.None // Desativa o encapsulamento de estilos
})
export class homeTeacherComponent implements OnInit {
    constructor(private conectUsuario: ConectAuth,private conectUsuarioEscolaPerfil: ConectUsuarioEscolaPerfil, private router: Router, private darkModeService: DarkModeService) {}

    ngOnInit(): void {
        this.verificaLastRoute();
        localStorage.setItem('lastRoute', '/homeTeacher');
        this.CarregaUsuario();
    }

    usuario: Auth = new Auth;
    perfilUsuario: string;
    ResponseUsuarioEscolaPerfil: ResponseUsuarioEscolaPerfil[];
    usuarioEscolaPerfilAtivo: UsuarioEscolaPerfil = new UsuarioEscolaPerfil;
    usuarioEscolaPerfilDesativo: UsuarioEscolaPerfil = new UsuarioEscolaPerfil;
    CarregaUsuario() {
        const token = localStorage.getItem('Authorization');
        const decoded: any = jwtDecode(token);
        console.log('decoded: ',decoded)

        this.perfilUsuario = decoded.tipoUsuario;
        this.perfilUsuario = this.perfilUsuario.charAt(0).toUpperCase() + this.perfilUsuario.slice(1);

        this.usuario.nome = decoded.unique_name;

        const usuarioId = localStorage.getItem('usuarioId');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        this.conectUsuarioEscolaPerfil.GETAllByUsuarioId(Number(usuarioId), headers).subscribe({
            next: (response: ResponseUsuarioEscolaPerfil[]) => {
                this.ResponseUsuarioEscolaPerfil = response;

                // Agora que temos os dados, percorremos a lista
                for (let u of this.ResponseUsuarioEscolaPerfil) {
                    this.perfis.push(u.perfil.nome);


                    if (u.ativo) {
                        this.usuarioEscolaPerfilAtivo.escolaId = u.escola.id;
                        this.usuarioEscolaPerfilAtivo.perfilId = u.perfil.id;
                        this.usuarioEscolaPerfilAtivo.usuarioId = Number(localStorage.getItem('usuarioId'));
                    }
                    else {
                        this.usuarioEscolaPerfilDesativo.escolaId = u.escola.id;
                        this.usuarioEscolaPerfilDesativo.perfilId = u.perfil.id;
                        this.usuarioEscolaPerfilDesativo.usuarioId = Number(localStorage.getItem('usuarioId'));
                    }
                }



                this.perfilAtual = this.perfilUsuario;
            },
            error: (error: any) => {
                console.error('Erro completo:', error);
                alert(JSON.stringify(error.error));
            }
        });
    }

    lastRoute: string;
    verificaLastRoute() {
        this.lastRoute = localStorage.getItem('lastRoute');

        if (this.lastRoute === '/viewStudent') {
            this.secaoAtual = 'alunos';
        }
        else if (this.lastRoute === '/viewActivitiesTeacher') {
            this.secaoAtual = 'Atividades'
        }
        else {
            this.secaoAtual = 'inicio'
        }
    }


    secaoAtual: string = 'inicio';

    detailsSchool: boolean;


    abrirDetalhes() {
        this.detailsSchool = true; // Fecha e volta para o título
    }

    selecionarSecao(secao: string) {
        this.secaoAtual = secao;
        if(this.secaoAtual === 'inicio') {
            this.detailsSchool = false;
        }
    }


    outLogin(route: String): void {
        localStorage.removeItem("Authorization");
        localStorage.removeItem('email');
        localStorage.removeItem('senha');
        localStorage.removeItem('usuarioId');
        this.router.navigate([route]);
    }


    perfilAtual: string;
    perfis = [];
    mostrarDropdown = false;

    usuarioLogin: Login = new Login;
    trocarPerfil(novoPerfil: string) {
        this.perfilAtual = novoPerfil;
        this.mostrarDropdown = false;


        const token = localStorage.getItem('Authorization');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        this.conectUsuarioEscolaPerfil.DISABLE(this.usuarioEscolaPerfilAtivo, headers).subscribe({
            next: (response: ResponseUsuarioEscolaPerfil[]) => {

            },
            error: (error: any) => {
                console.error('Erro completo:', error);
                alert(JSON.stringify(error.error));
            }
        });
        this.conectUsuarioEscolaPerfil.ACTIVATE(this.usuarioEscolaPerfilDesativo, headers).subscribe({
            next: (response: ResponseUsuarioEscolaPerfil[]) => {

            },
            error: (error: any) => {
                console.error('Erro completo:', error);
                alert(JSON.stringify(error.error));
            }
        });

        this.usuarioLogin.email = localStorage.getItem('email');
        this.usuarioLogin.senha = localStorage.getItem('senha');

        this.conectUsuario.LOGIN(this.usuarioLogin).subscribe({
            next: (response: any) => {
                let key = "Authorization";
                let token = response.body.token;
                let usuarioId = response.body.usuario.id;
                window.localStorage.setItem(key, token);
                localStorage.setItem('details','false');
                localStorage.setItem('localScroll','');
                localStorage.setItem('mostrarModalAd','');
                localStorage.setItem('mostrarModalAl','');
                localStorage.setItem('mostrarModalPA','');
                this.navigateTo('/login');
            },
            error: (error: any) => {
                console.error('Erro completo:', error);
                alert(JSON.stringify(error.error));
            }

        })
    }

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }

    @HostListener('document:click', ['$event'])
    onClickFora(event: MouseEvent) {
        const alvo = event.target as HTMLElement;
        const clicouDentro = alvo.closest('.dropdown-container');

        if (!clicouDentro) {
            this.mostrarDropdown = false;
        }
    }


}
