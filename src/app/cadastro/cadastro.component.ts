import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-cadastro',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,NgIf
    ],
    templateUrl: './cadastro.component.html',
    styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome: FormControl<string> | undefined;
  telefone: FormControl<string> | undefined;
  email: FormControl<string> | undefined;
  senha: FormControl<string> | undefined;
  checkPassword: FormControl<string> | undefined;
  acordo: FormControl<boolean> | undefined;

  submitForm(): void {
    if (this.validateForms.valid) {
      console.log('submit', this.validateForms.value);
    } else {
      Object.values(this.validateForms.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.validateForms.controls['checkPassword'].updateValueAndValidity()
    );
  }

  confirmationValidator: ValidatorFn = (
    control: AbstractControl
  ): Record<string, boolean> => {
    if (!control.value) {
      return { required: true };
    } else if (
      control.value !== this.validateForms.controls['senha'].value
    ) {
      return { confirm: true, error: true };
    }
    return {};
  };

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  // ✅ Formulário reativo com validações
  validateForms = this.fb.group({
    nome: ['', Validators.required],
    telefone: [''],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(8)]],
    checkPassword: ['', Validators.required],
  });

  // ✅ Envio do formulário
  onSubmit(): void {
    if (this.validateForms.invalid) {
      // Marca todos os campos para exibir erros no template
      this.validateForms.markAllAsTouched();
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }

    const { nome, telefone, email, senha, checkPassword } = this.validateForms.value;

    // Segurança extra contra undefined
    if (!nome || !email || !senha || !checkPassword) {
      alert('Dados incompletos. Verifique o formulário.');
      return;
    }

    this.authService.criarUsuario({ nome, telefone, email, senha, checkPassword }).subscribe({
      next: () => {
        alert('Usuário cadastrado com sucesso!');
        this.validateForms.reset();
        this.router.navigate(['/login']); // já direciona para login se fizer sentido
      },
      error: (err) => {
        console.error('Erro ao cadastrar usuário:', err.error || err.message);
        alert(err.error?.message || 'Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
      }
    });
  }

  CliqueRetornar(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
