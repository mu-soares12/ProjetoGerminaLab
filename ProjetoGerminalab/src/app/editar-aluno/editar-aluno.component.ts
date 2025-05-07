import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-aluno',
  imports: [FormsModule],
  templateUrl: './editar-aluno.component.html',
  styleUrl: './editar-aluno.component.css'
})
export class EditarAlunoComponent {
  aluno = {
    nome: 'Willamy Andreotti',
    email: 'willamy.andreotti@germinare.org.br',
    ano: '3',
    serie: 'E',
    exatas: 8,
    linguagens: 6,
    ciencias: 3,
  };

  editarAluno(form: NgForm) {
    this.aluno = {
      nome: form.value.nome,
      email: form.value.email,
      ano: form.value.ano,
      serie: form.value.serie,
      exatas: form.value.exatas,
      linguagens: form.value.linguagens,
      ciencias: form.value.ciencias,
    }
    window.location.href = '/home';
  }
  descartar() {
    window.location.href = '/home';
  }
}
