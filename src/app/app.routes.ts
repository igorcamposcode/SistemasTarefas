import { Routes } from '@angular/router';
import { MinhasTarefasComponent } from './minhas-tarefas/minhas-tarefas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { AuthGuard } from './services/auth.guard';

// Definindo as rotas do aplicativo
export const routes: Routes = [
  // Rota para a tela de login
  { path: 'login', component: LoginComponent },

  // Rota para o home principal (protegida)
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  // Rota para minhas tarefas (protegida)
  { path: 'minhas-tarefas', component: MinhasTarefasComponent, canActivate: [AuthGuard] },

  // Rota para a página de Cadastro de usuário
  { path: 'cadastro', component: CadastroComponent },

  // Rota para a página de recuperação de Senha
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },

  // Rota padrão - redireciona para login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Rota para capturar URLs inválidas
  { path: '**', redirectTo: 'login' }
];
