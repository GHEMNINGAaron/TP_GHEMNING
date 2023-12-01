import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  constructor() { }

  private notifSubject = new BehaviorSubject<number>(0);
  notif$ = this.notifSubject.asObservable();


  private scoreSubject = new BehaviorSubject<number>(0);
  score$ = this.scoreSubject.asObservable();

  updateScore(score: number) {
    this.scoreSubject.next(score);
  }

  updateNotif(notif : number) {
    this.notifSubject.next(notif)
  }

}
