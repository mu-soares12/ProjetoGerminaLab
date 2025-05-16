import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Aluno {
  nomeCompleto: string;
  email: string;
  ano: number;
  serie: string;
  notaExatas: number;
  notaLinguagens: number;
  notaCiencias: number;
  mediaGeral: number;
  statusFinal: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private endpointGetAll = 'http://localhost:8080/api/alunos';

  constructor(private http: HttpClient) {}

  listarAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.endpointGetAll);
  }
}