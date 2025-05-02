import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-erro-login',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-erro-login.component.html',
  styleUrl: './pop-up-erro-login.component.css',
})
export class PopUpErroLoginComponent {
  constructor(public dialogRef: MatDialogRef<PopUpErroLoginComponent>) {}

}
