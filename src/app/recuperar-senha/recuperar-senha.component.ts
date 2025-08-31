// Importando os módulos e componentes necessários para o funcionamento do formulário e da interface
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AbstractControl,
  FormControl,
  FormsModule,
  ValidatorFn,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

// Definindo o componente recuperar-senha com seu seletor, template e estilo
@Component({
    selector: 'app-recuperar-senha',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    templateUrl: './recuperar-senha.component.html',
    styleUrl: './recuperar-senha.component.css'
})
export class RecuperarSenhaComponent {
  // Definindo os campos do formulário: email, senha e confirmação de senha
  email: FormControl<string> | undefined;
  password: FormControl<string> | undefined;
  checkPassword: FormControl<string> | undefined;

  // Grupo de formulário que gerencia os controles do formulário
  validateForms: FormGroup;

  // Método para enviar o formulário, verifica se o formulário é válido
  submitForm(): void {
    if (this.validateForms.valid) {
      console.log('submit', this.validateForms.value); // Loga os valores do formulário no console
    } else {
      // Se inválido, marca os controles como "sujo" para exibir os erros
      Object.values(this.validateForms.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  // Método para validar a confirmação da nova senha
  validateNewPassword(): void {
    Promise.resolve().then(() =>
      this.validateForms.controls['checkPassword'].updateValueAndValidity()
    );
  }

  // Função de validação customizada que verifica se a senha e a confirmação de senha são iguais
  confirmationValidator: ValidatorFn = (
    control: AbstractControl
  ): Record<string, boolean> => {
    if (!control.value) {
      return { required: true }; // Retorna erro se o campo estiver vazio
    } else if (
      control.value !== this.validateForms.controls['password'].value
    ) {
      return { confirm: true, error: true }; // Retorna erro se as senhas não coincidirem
    }
    return {}; // Sem erros
  };

  // Construtor que inicializa o grupo de formulário com os controles e suas validações
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.validateForms = this.fb.group({
      email: ['', [Validators.email, Validators.required]], // Validações para o campo email
      senha: ['', [Validators.required, Validators.minLength(8)]], // Validação para o campo senha
      checkPassword: ['', [Validators.required, Validators.minLength(8)]], // Validação para a confirmação de senha
    });
  }
  onSubmit(): void {
    if (this.validateForms.valid) {
      const { email, senha, checkPassword } = this.validateForms.value;

      this.authService.recuperarSenha(email, senha, checkPassword).subscribe({
        next: () => {
          alert('Senha atualizada com sucesso! Redirecionando para o login...');
          this.router.navigate(['login']); // Redireciona para a página de login
        },
        error: (err) => {
          console.error('Erro ao atualizar senha:', err);
          alert(err.error || 'Erro ao atualizar senha.');
        },
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
