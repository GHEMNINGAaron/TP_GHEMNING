import { Component, EventEmitter, Output } from '@angular/core';
import { PaysService } from 'src/app/services/paysService/pays.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {

  @Output() nomRegion = new EventEmitter<string>();
  @Output() regionCharge = new EventEmitter<boolean>();
  regChar : boolean = false

  constructor(private paysService: PaysService) { }
  listOfRegions: string[] = []
  list: any

  ngOnInit() {
    this.getRegion()
  }

  getRegion() {
    this.paysService.getAllPays().subscribe(data => {
      for (let item of data) {
        if (!(this.listOfRegions.find(e => e === item.region)))
          this.listOfRegions.push(item.region)
      }
      this.regionCharge.emit(true)
      console.log(this.listOfRegions)
      this.regChar = true
    })
  }

  goToSubRegions(region: string) {
    this.nomRegion.emit(region)
  }
}
