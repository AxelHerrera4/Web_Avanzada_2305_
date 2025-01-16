import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  standalone: true,
  template: `
    <li>{{ task.name }}</li>
  `,
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: { id: number; name: string }; // Define correctamente el decorador Input
}
