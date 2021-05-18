import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  private json: Object;
  private audio;
  private closeAlarm = false;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.printJson();
    }, 2000);
  }

  private printJson() {
    this.apiService.getApi().subscribe(data => {
      if (this.audio) {
        this.audio.pause();
      }
      if (((data as any).availabilities as any).length > 0 && !this.closeAlarm ) {
        this.audio = this.apiService.playAudio();
        console.log(data);
      } else {
        this.closeAlarm = false;
      }
      this.json = data;
    });
  }

  equals(json1, json2) {
    return (JSON.stringify(json1) === JSON.stringify(json2));
  }

  close() {
    this.closeAlarm = true;
  }
}
