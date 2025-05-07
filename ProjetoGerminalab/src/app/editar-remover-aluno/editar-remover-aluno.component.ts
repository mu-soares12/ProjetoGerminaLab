import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarAlunoComponent } from '../editar-aluno/editar-aluno.component';

@Component({
  selector: 'app-editar-remover-aluno',
  imports: [],
  templateUrl: './editar-remover-aluno.component.html',
  styleUrl: './editar-remover-aluno.component.css'
})
export class EditarRemoverAlunoComponent {
  constructor(private dialog: MatDialog) {}
  fechar() {
    this.dialog.closeAll();
  }
  editar() {
    this.dialog.open(EditarAlunoComponent, {
      panelClass: 'popup-editar-aluno',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      position: {
        right: '0px'
      }
    });
  }
}
