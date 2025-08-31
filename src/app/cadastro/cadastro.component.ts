import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
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
  validateForms: FormGroup;
  // userService removido pois não é utilizado

  submitForm(): void {
    // Dados do usuário são processados no onSubmit()

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

  constructor(
    private fb: FormBuilder,
    private router: Router, private authService: AuthService  ) {
      this.validateForms = this.fb.group({
        nome: ['', Validators.required],
        telefone: [''],
        email: ['', [Validators.required, Validators.email]], // Validação do email
        senha: ['', [Validators.required, Validators.minLength(8)]],
        checkPassword: ['', Validators.required],
      });
  }

  onSubmit() {
    if (this.validateForms.valid) {
      const formData = this.validateForms.value;

      this.authService.criarUsuario(formData).subscribe({
        next: () => {
          alert('Usuário cadastrado com sucesso!');
          this.validateForms.reset();
        },
        error: (err) => {
          console.error('Erro ao cadastrar usuário:', err.error || err.message);
          alert('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
        },
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
  }

  CliqueRetornar(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
