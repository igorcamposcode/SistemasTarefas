import { RouterModule, Routes } from '@angular/router';
import { MinhasTarefasComponent } from './minhas-tarefas/minhas-tarefas.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// Definindo as rotas do aplicativo
export const routes: Routes = [
  // 'path' é a URL que será exibida no navegador e mapeia para um componente específico.
  // Rota para a tela de login
  { path: 'login', component: LoginComponent },

  // Rota para o menu principal
  { path: 'menu', component: MenuComponent },

  // Alteração no comportamento da rota minhas-tarefas:
  // Antes era utilizado mês e ano para agrupar as tarefas, agora:
  // - As tarefas são associadas a um id específico.
  // - Cada tarefa tem um objetivo definido.
  // - As tarefas são identificadas por cores conforme seu status.
  // - Cada tarefa possui uma caixa de check que, ao ser marcada, indica que o objetivo foi concluído.
  // - Uma vez concluída, a tarefa é armazenada como parte do histórico para consulta futura.
  { path: 'minhas-tarefas', component: MinhasTarefasComponent },

  // Rota para a página de Cadastro de usuário
  { path: 'registro', component: CadastroComponent },

  //Rota para a página de recuperação de Senha
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },

  // O 'path' vazio indica a rota padrão quando a URL não contém um caminho específico.
  // O 'redirectTo' redireciona para a página de login por padrão.
  // 'pathMatch' define como o roteamento vai casar o caminho. O valor 'full' significa que a URL completa deve corresponder exatamente ao path ('').
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  // Importa as rotas configuradas
  imports: [RouterModule.forRoot(routes), HttpClientModule],

  // Exporta as rotas para serem usadas no resto do aplicativo
  exports: [RouterModule],
})
export class AppRoutingModule {}
