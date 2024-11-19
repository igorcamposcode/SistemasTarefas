import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
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
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  nome: FormControl<string> | undefined;
  telefone: FormControl<string> | undefined;
  email: FormControl<string> | undefined;
  password: FormControl<string> | undefined;
  checkPassword: FormControl<string> | undefined;
  acordo: FormControl<boolean> | undefined;
  validateForms: FormGroup;
  userService: any;

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
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (
      control.value !== this.validateForms.controls['password'].value
    ) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router  ) {
    this.validateForms = this.fb.group({
      nome: ['', [Validators.email, Validators.required]],
      telefone: ['', [Validators.email, Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
      acordo: [false],
    });
  }



  CliqueRetornar(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
