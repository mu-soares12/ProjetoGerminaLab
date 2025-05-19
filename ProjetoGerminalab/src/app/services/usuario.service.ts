import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Usuario {
  email: string;
  senha: string;
  nomecompleto: string;
  genero: string;
  datanascimento: Date;
  tipoalimentacao: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private endpointCadastrar = 'http://localhost:8080/api/usuarios/cadastrar';
  private endpointLogin = 'http://localhost:8080/api/usuarios/login';

  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.endpointCadastrar, usuario);
  }
  loginUsuario(usuario: Usuario) {
    return this.http.get<Usuario[]>(this.endpointLogin, {
      params: { email: usuario.email, senha: usuario.senha }
    });
  }
}
