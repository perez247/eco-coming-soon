import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent implements OnInit {

  @ViewChild('video') video: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.muteVideo();
  }

  muteVideo() {
    // const vid = document.getElementById('myVideo');
    // vid.mute = true;
    // console.log(vid);
  }

}
