import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { CadastroAlunosNotasComponent } from './cadastro-alunos-notas/cadastro-alunos-notas.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { LaboratorioGerminareComponent } from './laboratorio-germinare/laboratorio-germinare.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: LaboratorioGerminareComponent},
    {path: 'home', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro-aluno', component: CadastroAlunosComponent},
    {path: 'cadastro-aluno-notas', component: CadastroAlunosNotasComponent},
    {path: 'editar', component: EditarAlunoComponent}
];
