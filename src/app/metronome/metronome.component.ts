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
  private id: number;
  private playTimeout: any;
  private count = 0;
  private togglePlayStop = true;
  private routeSubscription: Subscription;
  private objectTemplate;
  private bpmSelect = Array.apply(null, {length: 20}).map((value, index) => (index + 6) * 10);
  @ViewChild('bpm') private bpm: ElementRef;

constructor(private appService: AppService, private activateRoute: ActivatedRoute) {}

  addObjectTemplate(id) {
    this.objectTemplate = this.appService.dataPattern[id];
}
  PlayStop(e) {
    if (this.togglePlayStop) {
      this.onPlay();
      e.target.innerText = 'Stop';
    } else {
      this.onStop();
      e.target.innerText = 'Play';
    }
    this.togglePlayStop = !this.togglePlayStop;
  }

  playSound(sound: string = 'snare') {
    const audio = new Audio();
    audio.src = '../../assets/sound/' + sound + '.mp3';
    audio.autoplay = true;
  }

  onStop() {
    clearTimeout(this.playTimeout);
  }

  onPlay() {
    const pattern = this.objectTemplate.pattern;
    const tempValue: number = +this.bpm.nativeElement.value;
    const temp: number = 60000 / (tempValue ? tempValue : 100);
    this.playTimeout = setTimeout(() => {
      for (let l = 0; l < pattern.length; l++) {
        if (pattern[l][this.count]) {
          this.playSound(this.objectTemplate.drumset[l]);
        }
      }
      this.count++;
      if (this.count >= pattern[0].length) {
        this.count = 0;
      }
      this.onPlay();
    }, temp);
  }

  ngOnInit() {
    this.routeSubscription = this.activateRoute.params.subscribe(params => this.id = params['id']);
    this.addObjectTemplate(this.id);
  }
  ngOnDestroy() {
    this.onStop();
  }

}
