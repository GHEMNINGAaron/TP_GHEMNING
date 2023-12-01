import { Component } from '@angular/core';
import { BehaviourService } from 'src/app/services/behaviourService/behaviour.service';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss']
})
export class AProposComponent {

  constructor(private behaviourService : BehaviourService) { }


  rate! : number
  handleRate(ev :number){
    this.behaviourService.updateScore(ev)
    console.log(this.rate)
  }
}
