import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  template: `
    <div class="gallery">
      <button (click)="previousImage()">Anterior</button>
      <img [src]="images[currentIndex]" alt="Imagen de la galería" />
      <button (click)="nextImage()">Siguiente</button>
    </div>
  `,
  styles: [`
    .gallery {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    img {
      max-width: 300px;
      max-height: 200px;
      border: 1px solid #ccc;
    }
    button {
      padding: 0.5rem 1rem;
    }
  `]
})
export class ImageGalleryComponent {
  @Input() images: string[] = [];
  currentIndex: number = 0;

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
