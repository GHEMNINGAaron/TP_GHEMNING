import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {

  @Input() data_country : any
  @Input() dataIsLoading! : boolean
  @Input() dataIsLoaded!: boolean

}
