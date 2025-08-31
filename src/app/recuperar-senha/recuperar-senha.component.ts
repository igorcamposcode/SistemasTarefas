// Importando os módulos e componentes necessários para o funcionamento do formulário e da interface
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  AbstractControl,
  FormControl,
  FormsModule,
  ValidationErrors,
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
  ): ValidationErrors | null => {
    const senha = control.get('senha')?.value;
    const checkPassword = control.get('checkPassword')?.value;

    if (senha !== checkPassword) {
      return { confirm: true, error: true }; // Retorna erro se as senhas não coincidirem
    }
    return null; // Sem erros
  };

  // Construtor que inicializa o grupo de formulário com os controles e suas validações
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  // ✅ Formulário reativo com validações
  validateForms = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(8)]],
    checkPassword: ['', [Validators.required, Validators.minLength(8)]],
  }, {
    // 🔑 Validador customizado para garantir que "senha" = "checkPassword"
    validators: this.confirmationValidator
  });

  onSubmit(): void {
    if (this.validateForms.invalid) {
      // Marca todos os campos como "tocados" para exibir mensagens de erro
      this.validateForms.markAllAsTouched();
      return;
    }

    const { email, senha, checkPassword } = this.validateForms.value;

    // Segurança extra contra valores nulos/undefined
    if (!email || !senha || !checkPassword) {
      return;
    }

    // Corrigindo o tipo dos parâmetros para passar os argumentos separadamente, conforme esperado pelo serviço
    this.authService.recuperarSenha(email, senha, checkPassword).subscribe({
      next: () => {
        console.log('Senha atualizada com sucesso!');
        this.router.navigate(['/login']);
      },
    });
  }

}
