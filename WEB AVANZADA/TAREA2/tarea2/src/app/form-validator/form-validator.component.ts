import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.css']
})
export class FormValidatorComponent {
  email: string = '';

  @Output() formValidated = new EventEmitter<string>();

  validateForm() {
    const validationMessage = this.email.includes('@')
      ? 'Formulario válido'
      : 'Correo inválido';
    this.formValidated.emit(validationMessage); // Emitiendo un string
  }
}
