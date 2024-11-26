import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAutosizeDirective } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { AuthService } from '../services/auth.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSwitchModule } from 'ng-zorro-antd/switch';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NzModalModule,NzButtonModule,NzFormModule,ReactiveFormsModule,
   FormsModule,NzAutosizeDirective,NzDatePickerModule,NzSelectModule, NzAvatarModule, NzCardModule, NzIconModule, NzSwitchModule, NzSkeletonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
submitForm() {
throw new Error('Method not implemented.');
}
  value? : string
  text: FormControl<string> | undefined
  textTarefa: FormControl<string> | undefined
  dateFormat = 'yyyy/MM/dd';
  selectedValue = null;
  isVisible = false;
  validateForms!: FormGroup<any>;

  loading = false;

  CliqueTarefa(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button  ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  constructor(private router: Router,private authService: AuthService){}

  // Redireciona para página consulta
  CliqueMinhaTarefa(pageName: string){
    this.router.navigate([`${pageName}`]);
  }
  // Retorna ao login/Finaliza a sessão
  CliqueHome(pageName: string){
    this.authService.removerToken(); // Remove o token
    alert('Você saiu do sistema!');
    this.router.navigate([`${pageName}`]);
  }
}
