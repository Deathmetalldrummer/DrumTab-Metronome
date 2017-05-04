import {Component, OnInit, OnDestroy } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit, OnDestroy {
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

  playSound(sound: string = 'snare') {
    const audio = new Audio();
    audio.src = '../../assets/sound/' + sound + '.mp3';
    audio.autoplay = true;
  }

  onStop() {
    clearTimeout(this.play);
  }

  onPlay() {
    this.play = setTimeout(() => {
      for (let l = 0; l < this.appService.pattern.length; l++) {
        if (this.appService.pattern[l][this.count]) {
          this.playSound(this.appService.drumset[l]);
        }
      }
      this.count++;
      if (this.count >= this.appService.pattern[0].length) {
        this.count = 0;
      }
      this.onPlay();
    }, 60000 / 150);
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.onStop();
  }

}




