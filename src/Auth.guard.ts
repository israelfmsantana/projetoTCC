// auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanActivate } from '@angular/router';

import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardDenied {

    constructor(private router: Router) {}

    canActivate(): boolean | UrlTree {
      const token = localStorage.getItem('Authorization');

      if (!token) {
        return this.router.createUrlTree(['/login']);
      }

      try {
        const decoded: any = jwtDecode(token);

        const perfil = decoded.tipoUsuario

        switch (perfil) {
          case 'admin':
            return this.router.createUrlTree(['/homeManager']);

          case 'diretor':
            return this.router.createUrlTree(['/homeCoordination']);

          case 'coordenador':
            return this.router.createUrlTree(['/homeCoordination']);
          case 'pedagogo':
            return this.router.createUrlTree(['/homeCoordination']);

          case 'professor':
            return this.router.createUrlTree(['/homeTeacher']);

          case 'aluno':
            return this.router.createUrlTree(['/homeStudent']);
          default:
            return this.router.createUrlTree(['/login']);
        }
      } catch (error) {
        console.error('Erro ao decodificar token:', error);
        return this.router.createUrlTree(['/login']);
      }
    }
  }



@Injectable({
  providedIn: 'root',
})
export class AuthGuardConfirmedManager {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let key = "Authorization";
    const token = localStorage.getItem(key);
    const decoded: any = jwtDecode(token);

    if (decoded.tipoUsuario === 'admin') {
      return true;
    }

    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuardConfirmedCoordination {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let key = "Authorization";
    const token = localStorage.getItem(key);
    const decoded: any = jwtDecode(token);

    if (decoded.tipoUsuario === 'direto' || 'coordenador' || 'pedagogo') {
      return true;
    }

    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuardConfirmedTeachers {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let key = "Authorization";
    const token = localStorage.getItem(key);
    const decoded: any = jwtDecode(token);

    if (decoded.tipoUsuario === 'professor') {
      return true;
    }


    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}


@Injectable({
  providedIn: 'root',
})
export class AuthGuardConfirmedStudent {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let key = "Authorization";
    const token = localStorage.getItem(key);
    // const decoded: any = jwtDecode(token);

    if (token === '444') {
      return true;
    }


    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
