import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  email!: string;
  senha!: string;
  nome!: string;
  genero!: string;
  nascimento!: string;
  alimentacao!: string;

  cadastrar(form: NgForm) {
    if (form.valid) {
      window.location.href = '/home';
    }
  }
}