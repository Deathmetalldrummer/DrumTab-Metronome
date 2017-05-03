import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit {
  title = 'Metronome';
  constructor(private appService: AppService) {
  }
  play: any;
  onPlay() {
    this.play = setTimeout(() => {
      const audio = new Audio();
      audio.src = '../../assets/sound/snare.mp3';
      audio.autoplay = true;
    }, 0);

    }
  onStop() {
    clearInterval(this.play);
  }
  ngOnInit() {
  }

}
