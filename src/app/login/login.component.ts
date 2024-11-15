/* eslint-disable @typescript-eslint/no-unused-vars */
// Importações necessárias de módulos e bibliotecas do Angular e NG-ZORRO
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon'; // Módulo para ícones da biblioteca NG-ZORRO
import { NzFormModule } from 'ng-zorro-antd/form'; // Módulo de formulários NG-ZORRO
import { NzInputModule } from 'ng-zorro-antd/input'; // Módulo de input NG-ZORRO
import { NzButtonModule } from 'ng-zorro-antd/button'; // Módulo de botões NG-ZORRO
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'; // Módulo de checkbox NG-ZORRO
import { AuthService } from '../services/auth.service';

// Declaração do componente
@Component({
  selector: 'app-login', // Seletor do componente (como ele será referenciado no HTML)
  standalone: true, // Define que o componente é autônomo
  // Importa os módulos necessários para o funcionamento do formulário e componentes NG-ZORRO
  imports: [FormsModule, ReactiveFormsModule, NzFormModule, NzIconModule, NzInputModule, NzButtonModule, NzCheckboxModule],
  templateUrl: './login.component.html', // Caminho do arquivo HTML associado ao componente
  styleUrl: './login.component.css' // Caminho do arquivo CSS associado ao componente
})

// Declaração da classe LoginComponent
export class LoginComponent {

  email: string = '';
  senha: string = '';
  error: string | null = null;

  validateForms: FormGroup; // Define o formulário de validação como um grupo de controle

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
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    // Criação do formulário com três campos: userName, password e remember
    // 'Validators.required' garante que o campo é obrigatório
    this.validateForms = this.fb.group({
      userName: [null, [Validators.required]], // Campo de nome de usuário
      password: [null, [Validators.required]], // Campo de senha
      remember: [false] // Checkbox para "Lembrar-me", com valor inicial false
    });
  }

  login() {
    this.authService.login(this.email, this.senha).subscribe(
      (response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/tasks']); // Redireciona para a lista de tarefas
      },
      (err): void => {
        this.error = 'Credenciais inválidas';
      }
    );
  }

  //Método para navegação ao clicar no texto "Registre Agora", redireciona para a página especificada
  CliqueRegistrar(pageName: string) {
    this.router.navigate([`${pageName}`])
  }
  //Método para navegação ao clicar no texto "Recuperar Senha", redireciona para a página especificada
  CliqueRecuperar_Senha(pageName: string) {
    this.router.navigate([`${pageName}`])
  }
  // Método para navegação ao clicar no botão "Entrar", redireciona para a página especificada
  CliqueMenu(pageName: string) {
    this.router.navigate([`${pageName}`]); // Navega para a rota com o nome da página passada como parâmetro
  }
}
