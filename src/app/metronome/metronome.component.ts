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
  constructor(private appService: AppService) {
  }
  onPlay() {
    for (let j = 0; j < this.appService.data.length; j++ ) {

      let i = 0;
      this.play = setInterval((): void => {
        if (this.appService.data[j][i] === 1) {
          const audio = new Audio();
          audio.src = '../../assets/sound/bass.mp3';
          audio.autoplay = true;
        }
        i++;
        console.log(this.play.runCount);
        if (i === this.appService.data[j].length) {
          i = 0;
        }
      }, 300);



    }

    }
  onStop() {
  }
  ngOnInit() {
  }

}
