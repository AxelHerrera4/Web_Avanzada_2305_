import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  standalone: true,
  imports: [],
  template: `
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ count }}</span>
      <button (click)="increment()">+</button>
    </div>
  `,
  styleUrls: ['./counter-child.component.css']
})
export class CounterChildComponent {
  @Output() countChanged = new EventEmitter<number>();
  count = 0;

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }
}
