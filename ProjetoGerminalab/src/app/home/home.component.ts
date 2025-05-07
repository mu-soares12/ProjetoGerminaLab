import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditarRemoverAlunoComponent } from '../editar-remover-aluno/editar-remover-aluno.component';
import { EditarAlunoComponent } from '../editar-aluno/editar-aluno.component';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data = [
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado", acao: "icons/menu.png" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado", acao: "icons/menu.png" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado", acao: "icons/menu.png" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado", acao: "icons/menu.png" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado", acao: "icons/menu.png" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado", acao: "icons/menu.png" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado", acao: "icons/menu.png" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado", acao: "icons/menu.png" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado", acao: "icons/menu.png" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado", acao: "icons/menu.png" }
  ];
  currentPage = 1;
  itemsPerPage = 5;
  itemsPerPageOptions = [5, 10, 15];
  paginatedData: any[] = [];

  redirecionarCadastroAluno() {
    window.location.href = '/cadastro-aluno';
  }

  ngOnInit() {
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.data.slice(startIndex, endIndex);
    console.log('Dados da página atual:', this.paginatedData);

  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.data.length) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  constructor(private dialog: MatDialog) {
  }

  editarRemover() {
    this.dialog.open(EditarRemoverAlunoComponent, {
        panelClass: 'popup-editar-remover-aluno',
        enterAnimationDuration: '200ms',
        exitAnimationDuration: '200ms',
        width: "0px",
        position: {
          right: '20px',
        }
    })
  }

  editarAluno(form: NgForm) {
    document.body.style.overflow = 'hidden';

    this.dialog.open(EditarAlunoComponent, {
      panelClass: 'popup-editar-aluno',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      position: {
        right: '0px'
      }
    })
  }
}
