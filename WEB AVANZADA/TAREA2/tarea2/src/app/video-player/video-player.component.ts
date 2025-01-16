import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  @Output() videoStatusChanged = new EventEmitter<string>();

  videoElement!: HTMLVideoElement;

  ngOnInit() {
    this.videoElement = document.getElementById('video') as HTMLVideoElement;
  }

  toggleVideo() {
    if (this.videoElement.paused) {
      this.videoElement.play();
      this.videoStatusChanged.emit('Playing');
    } else {
      this.videoElement.pause();
      this.videoStatusChanged.emit('Paused');
    }
  }
}
