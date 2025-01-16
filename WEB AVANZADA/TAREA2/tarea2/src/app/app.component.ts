import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ConfigParentComponent } from './config-parent/config-parent.component';
import { FormChildComponent } from './form-child/form-child.component';
import { CounterChildComponent } from './counter-child/counter-child.component';
import { CartTotalComponent } from './cart-total/cart-total.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { FormValidatorComponent } from './form-validator/form-validator.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ProductCardComponent,
    TaskListComponent,
    ConfigParentComponent,
    FormChildComponent,
    CounterChildComponent,
    CartTotalComponent,
    VideoPlayerComponent,
    FormValidatorComponent,
    ImageGalleryComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea2';

  // Variables para manejar los datos
  submittedData = '';
  counterValue = 0;
  videoStatus = 'Paused';
  formValidationMessage = '';
  galleryImages = [
    'https://www.w3schools.com/html/img_chania.jpg',
    'https://www.w3schools.com/html/img_girl.jpg',
    'https://www.w3schools.com/html/img_forest.jpg'
  ];

  handleFormSubmission(data: string) {
    this.submittedData = data;
  }

  handleCountChange(newCount: number) {
    this.counterValue = newCount;
  }

  handleVideoStatusChange(status: string) {
    this.videoStatus = status;
  }

  handleFormValidation(message: string) {
    this.formValidationMessage = message;
  }
}
