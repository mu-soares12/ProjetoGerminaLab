import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up-sucesso-login',
  standalone: true,
  template: `
  <div class="conteudo-snackbar">
      <img src="sucesso.png" alt="sucesso">
      <div class="mensagem">Aluno editado!</div>
  </div>
  `,
  styles: [`
    .conteudo-snackbar {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: #333333;
    }
    .mensagem {
      color: white;
      font-family: "Arial", sans-serif;
    }

  `],
  imports: [],
  templateUrl: './pop-up-sucesso-login.component.html',
  styleUrl: './pop-up-sucesso-login.component.css'
})
export class PopUpSucessoLoginComponent {

}
