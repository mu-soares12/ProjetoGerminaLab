import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-erro-login',
  imports: [],
  templateUrl: './erro-login.component.html',
  styleUrl: './erro-login.component.css'
})
export class ErroLoginComponent {
  constructor(private erroLogin: LoginComponent) {}

  fechar() {
    this.erroLogin.comp_login(() => this.erroLogin.fecharPopup());
  }
}
