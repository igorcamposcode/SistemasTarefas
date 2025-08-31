
// Importações necessárias de módulos e bibliotecas do Angular e NG-ZORRO
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
      // Se válido, imprime os valores do formulário no console
      console.log('submit', this.validateForms.value);
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
        next: (res) => {
          this.authService.armazenarToken(res.token);
          // Aqui você pode exibir um toast, snackbar ou mensagem de sucesso no template
          console.log('Login bem-sucedido!');
          this.router.navigate(['/menu']);
        },
        error: (err) => {
          console.error('Erro no login:', err);
          // Ideal: exibir mensagem de erro amigável no template
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
