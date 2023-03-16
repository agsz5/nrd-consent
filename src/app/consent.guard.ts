import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConsentGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    //HJL: Simple check to see if sessionStorage is allowed
    if (!window.sessionStorage) {
      console.error("sessionStorage is not available on your Browser");
      this.router.navigate(['']);
      return false;
    }
    const consentGiven = sessionStorage.getItem('consentGiven');
    const nextClicked = sessionStorage.getItem('nextClicked');

    //HJL: Access to "Next" is granted if the Consent Input has been checked and "Next" button clicked
    if (consentGiven==='true' && nextClicked ==='true') {
      return true;
    } else {
      this.router.navigate(['']);
      const consent = consentGiven === 'true' ? true : false;
      sessionStorage.setItem('consentGiven', consent.toString());
      sessionStorage.setItem('nextClicked', 'false');
      return false;
    }
  }
}
