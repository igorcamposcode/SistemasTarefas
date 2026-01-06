
// Importações necessárias de módulos e bibliotecas do Angular e NG-ZORRO
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';
import { NgIf } from '@angular/common';

// Declaração do componente
@Component({
    selector: 'app-login', // Define que o componente é autônomo
    // Importa os módulos necessários para o funcionamento do formulário e componentes NG-ZORRO
    imports: [FormsModule, ReactiveFormsModule,
       NgIf],
    templateUrl: './login.component.html', // Caminho do arquivo HTML associado ao componente
    styleUrl: './login.component.css' // Caminho do arquivo CSS associado ao componente
})

// Declaração da classe LoginComponent
export class LoginComponent {

  email = '';
  senha = '';
  error: string | undefined = undefined;

  // Método para submeter o formulário
  submitForm(): void {
    // Verifica se o formulário é válido
    if (this.validateForms.valid) {
      // Não loga dados do formulário por segurança
      // Chama o método onSubmit para processar o login
      this.onSubmit();
    } else {
      // Caso inválido, marca todos os controles como sujos (dirty) para exibir os erros
      Object.values(this.validateForms.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty(); // Marca o campo como "sujo" para exibir erros
          control.updateValueAndValidity({ onlySelf: true }); // Atualiza a validade do campo
        }
      });
    }
  }

  // Construtor da classe, onde o FormBuilder e o Router são injetados
  // FormBuilder é usado para criar o formulário reativo, e Router para navegação entre páginas
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
    // Criação do formulário com três campos: userName, password e remember
    // 'Validators.required' garante que o campo é obrigatório
    validateForms = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      remember: [false]
    });

    onSubmit(): void {
      if (this.validateForms.invalid) {
        // Marca todos os campos como tocados, forçando exibição de mensagens de erro no template
        this.validateForms.markAllAsTouched();
        return;
      }
      const { email, senha } = this.validateForms.value;
      if (!email || !senha) {
        return; // segurança extra contra valores null/undefined
      }
      this.authService.login(email, senha).subscribe({
        next: () => {
          // O token já é armazenado automaticamente pelo AuthService no método login()
          // Não precisa armazenar novamente aqui
          // Não loga informações por segurança
          // Redireciona para a página principal (home)
          this.notificationService.showSuccess('Login realizado com sucesso!');
          this.router.navigate(['/home']);
        },
        error: () => {
          // Não loga detalhes do erro por segurança
          // Define mensagem de erro genérica
          this.error = 'Email ou senha inválidos. Tente novamente.';
          this.notificationService.showError('Email ou senha inválidos. Tente novamente.');
          // Marca o formulário como não submetido para permitir nova tentativa
          this.validateForms.reset();
        },
      });
    }

  //Método para navegação ao clicar no texto "Registre Agora", redireciona para a página especificada
  cliqueRegistrar(pageName: string) {
    this.router.navigate([`${pageName}`])
  }
  //Método para navegação ao clicar no texto "Recuperar Senha", redireciona para a página especificada
  cliqueRecuperarSenha(pageName: string) {
    this.router.navigate([`${pageName}`])
  }
  // Método para navegação ao clicar no botão "Entrar", redireciona para a página especificada
  CliqueMenu(pageName: string) {
    this.router.navigate([`${pageName}`]); // Navega para a rota com o nome da página passada como parâmetro
  }
}
