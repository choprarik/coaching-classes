import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  pageTitle = 'Songara Classes';

  constructor(private _router: Router) {}

  onLogin(): void {
    this._router.navigate(['/login']);
  }
}
