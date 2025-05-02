import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { PopUpErroCadastroComponent } from '../pop-up-erro-cadastro/pop-up-erro-cadastro.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-alunos',
  imports: [FormsModule],
  templateUrl: './cadastro-alunos.component.html',
  styleUrl: './cadastro-alunos.component.css'
})
export class CadastroAlunosComponent {
  email!: string;
  nome!: string
  genero!: string;
  nascimento!: Date;
  alimentacao!: string;
  escolaridade!: string;

  constructor(private dialog: MatDialog) {}

  navegarCadastroNotas(form: NgForm) {
    if (form.valid) {
    window.location.href = '/cadastro-aluno-notas';
    }
    else {
      const dialog = this.dialog.open(PopUpErroCadastroComponent, {
        panelClass: 'popup-erro',
        hasBackdrop: false,
        enterAnimationDuration: '200ms',
        exitAnimationDuration: '200ms',
        position: {
          bottom: '20px'
        }
      });
      setTimeout(() => dialog.close(), 5000);
    }
  }

  descartar(form: NgForm) {
    form.resetForm();
  }
}
