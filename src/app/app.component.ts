import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  progress = 0;
  titleInput = "1 of 2"
  constructor() { }
  progressBar = document.querySelector('.progress-bar');
  intervalId;

  ngOnInit() {
    const getDownloadProgress = () => {
      console.log('getDownload', this);
      if (this.progress <= 99) {
        console.log('inside if', this.progress);
        this.progress = this.progress + 1;
      }
      else {
        clearInterval(this.intervalId);
      }
    }
    this.intervalId = setInterval(getDownloadProgress, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
