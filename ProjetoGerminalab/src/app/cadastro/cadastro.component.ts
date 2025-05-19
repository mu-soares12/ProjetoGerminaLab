import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

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

  constructor(private usuarioService: UsuarioService) {}

  cadastrar(form: NgForm) {
    if (form.invalid) {
      console.error('Formulário inválido');
      return;
    }
    if (form.valid){
      this.usuarioService.cadastrarUsuario({
        email: form.value.email,
        senha: form.value.senha,
        nomecompleto: form.value.nome,
        genero: form.value.genero,
        datanascimento: form.value.nascimento,
        tipoalimentacao: form.value.alimentacao
      }).subscribe({
        next: (res) => {
          console.log('Usuário cadastrado com sucesso:', res);
          window.location.href = '/login';
        },
        error: (err) => {
          console.error('Erro ao cadastrar usuário:', err);
        }
      });
    }
  }
}