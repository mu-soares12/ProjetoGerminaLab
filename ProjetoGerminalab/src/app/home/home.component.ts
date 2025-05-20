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
  constructor(private dialog: MatDialog, private alunoService: AlunoService) { }

  currentPage = 1;
  itemsPerPage = 5;
  itemsPerPageOptions = [5, 10, 15];
  paginatedData: Aluno[] = [];
  data!: Aluno[];
  searchTerm = '';
  filteredData: Aluno[] = [];


  redirecionarCadastroAluno() {
    window.location.href = '/cadastro-aluno';
  }


  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    const origem = this.filteredData.length ? this.filteredData : this.data;
    this.paginatedData = origem.slice(startIndex, endIndex);

    console.log('Dados da página atual:', this.paginatedData);
  }


  listar() {
    this.alunoService.listarAlunos().subscribe({
      next: (res) => {
        this.data = res;
        this.filteredData = [];
        this.updatePagination();
      },
      error: (err) => {
        console.error('Erro ao listar alunos:', err);
      }
    });
  }

  ngOnInit() {
    this.listar();

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

  onSearch() {
    const termo = this.searchTerm.toLowerCase().trim();

    this.filteredData = this.data.filter(p =>
      p.nomecompleto.toLowerCase().includes(termo)
    );

    this.currentPage = 1; // volta pra página 1
    this.updatePagination();
  }

}
