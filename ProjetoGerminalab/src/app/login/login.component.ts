import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ErroLoginComponent } from '../erro-login/erro-login.component';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent {
  email!: string;
  senha!: string;

  comp_login(callback: Function) {
    callback();
  }

  navegarCadastro() {
    window.location.href = '/cadastro';
  }

  constructor(private dialog: MatDialog, private usuarioService: UsuarioService) {}

  logar(form: NgForm) {
    if (form.valid) {
      this.usuarioService.loginUsuario({
        email: form.value.email,
        senha: form.value.senha,
        nomecompleto: '',
        genero: '',
        datanascimento: (new Date()), 
        tipoalimentacao: '' 
      }).subscribe({
        next: (res) => {
          console.log('Usuário logado com sucesso:', res);
          window.location.href = '/home';
        },
        error: (err) => {
          console.error('Erro ao logar usuário:', err);
          this.dialog.open(ErroLoginComponent, {
            panelClass: 'popup-erro',
            enterAnimationDuration: '200ms',
            exitAnimationDuration: '200ms',
          });
        }
      });
    }
    else {
      this.dialog.open(ErroLoginComponent, {
      panelClass: 'popup-erro',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      });
    }
  }
  fecharPopup() {
    this.dialog.closeAll();
  }
}
