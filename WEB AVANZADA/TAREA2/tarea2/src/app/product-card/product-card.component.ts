import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true, // Declarar como independiente
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';
}
