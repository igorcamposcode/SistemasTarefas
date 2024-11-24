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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzCheckboxModule,
    HttpClientModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  nome: FormControl<String> | undefined;
  telefone: FormControl<String> | undefined;
  email: FormControl<String> | undefined;
  senha: FormControl<String> | undefined;
  checkPassword: FormControl<String> | undefined;
  acordo: FormControl<boolean> | undefined;
  validateForms: FormGroup;
  userService: any;

  submitForm(): void {
    const usuario = {
      nome: this.validateForms.get('nome')?.value,
      telefone: this.validateForms.get('telefone')?.value,
      email: this.validateForms.get('email')?.value,
      senha: this.validateForms.get('senha')?.value,
      checkPassword: this.validateForms.get('checkPassword')?.value,
    };

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
  ): { [s: string]: boolean } => {
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
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(7)]],
      checkPassword: ['',[Validators.required, this.confirmationValidator]],
      acordo: [true],
    });
  }



  onSubmit() {
    if (this.validateForms.valid) {
      const formData = this.validateForms.value;

      this.authService.criarUsuario(formData).subscribe({
        next: (res) => {
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
