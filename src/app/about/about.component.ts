import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from './video-modal/video-modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}
  openModal() {
    const dialogRef = this.dialog.open(VideoModalComponent, {
      width: '70%',
      height: '83%',
    });
  }
}
