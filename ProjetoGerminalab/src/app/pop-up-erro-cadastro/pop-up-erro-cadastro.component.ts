import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-erro-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-erro-cadastro.component.html',
  styleUrl: './pop-up-erro-cadastro.component.css',
})
export class PopUpErroCadastroComponent {
  constructor(public dialogRef: MatDialogRef<PopUpErroCadastroComponent>) {}

}
