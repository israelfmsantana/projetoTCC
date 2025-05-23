import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ConectUser } from '../../API';
import { ToastrService } from 'ngx-toastr';
import { Auth } from '../../Class';
import { ConectAuth } from '../../API';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    localStorage.setItem('lastRoute', '/signup');
  }

  // userCreate: UserCreateDTO = new UserCreateDTO();
  // showPasswordInfo: boolean = false;




  navigateTo(): void {
      this.router.navigate(['/homeManager']);
  }


  nome: string = '';
  senha: string = '';
  opcaoSelecionada: string = '';
  mensagemSenha: string = '';
  opcoes: string[] = ['Vitória', 'Serra', 'Cariacica', 'Vila Velha'];

  validateName(): void {
    this.nome = this.nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
  }

  validatePassword(): void {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!regex.test(this.senha)) {
      this.mensagemSenha = 'A senha deve ter entre 6 e 12 caracteres, incluindo uma letra maiúscula, uma minúscula e um número.';
    } else {
      this.mensagemSenha = '';
    }
  }

  cadastrar(): void {
    if (this.mensagemSenha) return;
    console.log('Cadastro realizado:', { nome: this.nome, senha: this.senha, opcaoSelecionada: this.opcaoSelecionada });
  }






  // inputUsername(event: Event): void {
  //   this.userCreate.username = (<HTMLInputElement>event.target).value;
  // }

  // inputPassword(event: Event): void {
  //   this.userCreate.password = (<HTMLInputElement>event.target).value;
  // }




  // showSuccess() {
  //   this.toastr.success('User created', 'Success', {
  //     timeOut: 2000,
  //   });
  // }

  // showIncorrect() {
  //   this.toastr.error('Username or Password is incorrect', 'Incorrect', {
  //     timeOut: 2000,
  //   });
  // }

  // showConflit() {
  //   this.toastr.error('Username already exists', 'Conflit', {
  //     timeOut: 2000,
  //   });
  // }




  // Create(user: UserCreateDTO) {
  //   this.conectUser.CREATE(user).subscribe({
  //     next: () => {
  //       this.showSuccess();
  //       this.navigateToLogin();
  //     },
  //     error: (error: any) => {
  //       if (error.status === 422)
  //         this.showIncorrect()

  //       else if (error.status === 409)
  //         this.showConflit();
  //     }
  //   })
  // }


}

