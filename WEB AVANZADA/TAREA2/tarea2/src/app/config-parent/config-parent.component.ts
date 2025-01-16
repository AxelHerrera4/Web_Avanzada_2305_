import { Component } from '@angular/core';
import { ConfigChildComponent } from '../config-child/config-child.component';

@Component({
  selector: 'app-config-parent',
  standalone: true,
  imports: [ConfigChildComponent], // Incluye ConfigChildComponent aquí
  template: `
    <h2>Configuración</h2>
    <app-config-child [config]="config"></app-config-child>
  `,
  styleUrls: ['./config-parent.component.css']
})
export class ConfigParentComponent {
  config = {
    theme: 'dark',
    language: 'es',
  };
}
