import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule

@Component({
  selector: 'app-form-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent {
  formData = '';
  
  @Output() formSubmitted = new EventEmitter<string>();

  submitForm() {
    // Emitir solo el valor del formulario
    this.formSubmitted.emit(this.formData);
  }
}
