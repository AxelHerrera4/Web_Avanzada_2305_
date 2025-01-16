import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-config-child',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  template: `
    <div [ngClass]="config.theme">
      <p>Idioma: {{ config.language === 'es' ? 'Español' : 'Inglés' }}</p>
      <p>Tema: {{ config.theme === 'dark' ? 'Oscuro' : 'Claro' }}</p>
    </div>
  `,
  styleUrls: ['./config-child.component.css']
})
export class ConfigChildComponent {
  @Input() config!: { theme: string; language: string }; // Define el decorador Input
}
