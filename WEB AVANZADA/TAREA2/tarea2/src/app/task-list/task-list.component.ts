import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent], // Incluye TaskItemComponent aquí
  template: `
    <h2>Lista de Tareas</h2>
    <ul>
      <app-task-item *ngFor="let task of tasks" [task]="task"></app-task-item>
    </ul>
  `,
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { id: 1, name: 'Estudiar Angular' },
    { id: 2, name: 'Hacer ejercicio' },
    { id: 3, name: 'Leer un libro' },
  ];
}
