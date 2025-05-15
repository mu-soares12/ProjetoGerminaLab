import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditarRemoverAlunoComponent } from '../editar-remover-aluno/editar-remover-aluno.component';
import { EditarAlunoComponent } from '../editar-aluno/editar-aluno.component';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlunoService, Aluno } from '../services/aluno.service';


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
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, private dialog: MatDialog) { }

  tableOnInit(): void {
    this.alunoService.listarAlunos().subscribe(data => {
      this.alunos = data;
    });
  }
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
    this.paginatedData = this.alunos.slice(startIndex, endIndex);
    console.log('Dados da página atual:', this.paginatedData);

  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.alunos.length) {
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
