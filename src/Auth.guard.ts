// auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardConfirmedManager {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let key = "Authorization";
    const token = localStorage.getItem(key);

    if (token === "111") {
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

    if (token === "222") {
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
export class AuthGuardConfirmedTeacher {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let key = "Authorization";
    const token = localStorage.getItem(key);

    if (token === "333") {
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

    if (token === "444") {
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
export class AuthGuardDenied {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let key = "Authorization";
    const token = localStorage.getItem(key);

    if (token) {
      this.router.navigate(['/homeManager']);
      return false;
    } else {
      return true;
    }
  }
}
