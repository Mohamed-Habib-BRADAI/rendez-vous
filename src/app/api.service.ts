import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // tslint:disable-next-line:max-line-length
  api = 'https://www.doctolib.fr/availabilities.json?start_date=2021-05-17&visit_motive_ids=2541899&agenda_ids=412322-461910-413596-448052-464760-418379-418380-452671-408730-408729&insurance_sector=public&practice_ids=163755&destroy_temporary=true&limit=4';

  constructor(private http: HttpClient) {
  }

  getApi() {
    return this.http.get(this.api);
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../assets/audio/alarm.mp3';
    audio.load();
    audio.play();
    return audio;
  }

  pause(audio) {
    audio.pause();
  }
}
