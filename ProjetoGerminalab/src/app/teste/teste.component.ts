import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-teste',
  imports: [FormsModule, CommonModule],
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  data = [
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado" },
    { nome: "Willamy Andreotti", email: "willamy.andreotti@germinare.org.br", ano: 3, serie: "E", exatas: 8, linguagens: 6, ciencias: 3, media: 10, situacao: "Aprovado" },
  ];
  currentPage = 1;
  itemsPerPage = 5;
  itemsPerPageOptions = [5, 10, 15];
  paginatedData: any[] = [];

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

  acao(item: any) {

  }
}