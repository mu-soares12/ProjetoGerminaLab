import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { CadastroAlunosNotasComponent } from './cadastro-alunos-notas/cadastro-alunos-notas.component';

export const routes: Routes = [
    {path: 'cadastro', component: CadastroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro-aluno', component: CadastroAlunosComponent},
    {path: 'cadastro-aluno-notas', component: CadastroAlunosNotasComponent},
];
