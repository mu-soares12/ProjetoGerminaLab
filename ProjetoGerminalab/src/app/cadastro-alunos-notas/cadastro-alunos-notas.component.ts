import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { PopUpErroLoginComponent } from '../pop-up-erro-login/pop-up-erro-login.component';
import { PopUpSucessoLoginComponent } from '../pop-up-sucesso-login/pop-up-sucesso-login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-alunos-notas',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './cadastro-alunos-notas.component.html',
  styleUrl: './cadastro-alunos-notas.component.css',
})
export class CadastroAlunosNotasComponent {
  linguagens!: number;
  exatas!: number;
  ciencias!: number;
  
  redirecionarHome() {
    window.location.href = '/home';
  }

  constructor(private dialog: MatDialog) {}

  cadastrarAluno(form: NgForm) {
    if (form.invalid) {
    const dialog = this.dialog.open(PopUpErroLoginComponent, {
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
  else {
    if (form.value.linguagens < 0 || form.value.linguagens > 10 || form.value.exatas < 0 || form.value.exatas > 10 || form.value.ciencias < 0 || form.value.ciencias > 10) {
      const dialog = this.dialog.open(PopUpErroLoginComponent, {
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
    else {
      const dialog = this.dialog.open(PopUpSucessoLoginComponent, {
        panelClass: 'popup-sucesso',
        hasBackdrop: false,
        enterAnimationDuration: '200ms',
        exitAnimationDuration: '200ms',
        position: {
          bottom: '20px'
        }
      });
        setTimeout(() => dialog.close(), 5000);

        setTimeout(() => {
          this.redirecionarHome();
        }, 5000);
    }}
  }
  descartar(form: NgForm) {
    form.resetForm();
  }
}