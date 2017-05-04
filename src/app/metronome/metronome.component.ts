import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit {
  title = 'Metronome';
  play: any;
  count = 0;
  toggle = true;
  constructor(private appService: AppService) {
  }
  PlayStop(e) {
    if (this.toggle) {
      this.onPlay();
      e.target.innerText = 'Stop';
    } else {
      this.onStop();
      e.target.innerText = 'Play';
    }
    this.toggle = !this.toggle;
  }
  playSound(sound: string = 'ride') {
    const audio = new Audio();
    audio.src = '../../assets/sound/' + sound + '.mp3';
    audio.autoplay = true;
    }
  onStop() {
    clearTimeout(this.play);
  }
  onPlay() {
      this.play = setTimeout(() => {
          for (let l = 0; l < this.appService.data.length; l++) {
            if (this.appService.data[l][this.count]) {
            this.playSound();
          }
        }
        this.count++;
        if (this.count >= this.appService.data[0].length) {
          this.count = 0;
        }
        this.onPlay();
      }, 500);
  }
  ngOnInit() {
    this.playSound('ride');
    this.playSound('snare');
    this.playSound('bass');
    this.playSound('hi-hat3');
  }

}




