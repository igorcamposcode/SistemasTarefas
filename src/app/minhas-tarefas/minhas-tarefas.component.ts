import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';

interface itensTarefas {
  NOME: string;
  ID: number;
  ESTADO: string;
  DATA: string;
}

@Component({
    selector: 'app-minhas-tarefas',
    imports: [
        NzTableModule,
        NzIconModule,
        NzInputModule,
        ReactiveFormsModule,
        FormsModule,
        NzDropdownMenuComponent,
    ],
    templateUrl: './minhas-tarefas.component.html',
    styleUrl: './minhas-tarefas.component.css'
})
export class MinhasTarefasComponent {
  searchValue = '';
  visible = false;
  listOfData: itensTarefas[] = [];

  listOfDisplayData = [...this.listOfData];

  constructor(private router: Router) {}

  Clique_Retornar(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter(
      (item: itensTarefas) => item.NOME.indexOf(this.searchValue) !== -1
    );
  }
}
