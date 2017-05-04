import {Component, OnInit, OnDestroy, ElementRef, ViewChild} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit, OnDestroy {
  title = 'Metronome';
  private _playTimeout: any;
  private _count = 0;
  private _togglePlayStop = true;
  @ViewChild('temp') private _temp: ElementRef;

  constructor(private appService: AppService) {
  }

  PlayStop(e) {
    if (this._togglePlayStop) {
      this.onPlay();
      e.target.innerText = 'Stop';
    } else {
      this.onStop();
      e.target.innerText = 'Play';
    }
    this._togglePlayStop = !this._togglePlayStop;
  }

  playSound(sound: string = 'snare') {
    const audio = new Audio();
    audio.src = '../../assets/sound/' + sound + '.mp3';
    audio.autoplay = true;
  }

  onStop() {
    clearTimeout(this._playTimeout);
  }

  onPlay() {
    const pattern = this.appService.pattern;
    const tempValue: number = +this._temp.nativeElement.value;
    const temp: number = 60000 / (tempValue ? tempValue : 100);
    this._playTimeout = setTimeout(() => {
      for (let l = 0; l < pattern.length; l++) {
        if (pattern[l][this._count]) {
          this.playSound(this.appService.drumset[l]);
        }
      }
      this._count++;
      if (this._count >= pattern[0].length) {
        this._count = 0;
      }
      this.onPlay();
    }, temp);
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.onStop();
  }

}




