import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Component, OnInit, OnDestroy, ElementRef, ViewChild} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit, OnDestroy {
  title = 'Metronome';
  private _id: number;
  private _playTimeout: any;
  private _count: number = 0;
  private _togglePlayStop: boolean = true;
  private _routeSubscription: Subscription;
  private _ojectTemplate;
  @ViewChild('temp') private _temp: ElementRef;

constructor(private appService: AppService, private activateRoute: ActivatedRoute) {
  this._routeSubscription = activateRoute.params.subscribe(params => this._ojectTemplate = appService.getData[params['id']]);
  console.log(this._ojectTemplate)
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
    const pattern = this._ojectTemplate.pattern;
    const tempValue: number = +this._temp.nativeElement.value;
    const temp: number = 60000 / (tempValue ? tempValue : 100);
    this._playTimeout = setTimeout(() => {
      for (let l = 0; l < pattern.length; l++) {
        if (pattern[l][this._count]) {
          this.playSound(this._ojectTemplate.drumset[l]);
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
    // this.onStop();
  }

}
