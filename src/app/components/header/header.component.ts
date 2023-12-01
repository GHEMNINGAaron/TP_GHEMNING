import { Component } from '@angular/core';
import { BehaviourService } from 'src/app/services/behaviourService/behaviour.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  score!: number;
  notif!: number;
  constructor(private behaviourService: BehaviourService) {
    this.behaviourService.score$.subscribe(score => {
      this.score = score;
    })
    this.behaviourService.notif$.subscribe(notif => {
      this.notif = notif
    })
  }

}
