import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { PaysService } from 'src/app/services/paysService/pays.service';

@Component({
  selector: 'app-sous-region',
  templateUrl: './sous-region.component.html',
  styleUrls: ['./sous-region.component.scss']
})
export class SousRegionComponent {

  @Input () nomRegion! : string;
  @Output() nomSousRegion = new EventEmitter<string>();
  listOfSubRegions : string[] = []
  sousRegionCharge : boolean = false

  constructor(private paysService : PaysService){}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nomRegion']) {
      this.getSubRegion()
    }
  }

  getSubRegion() {
    this.paysService.getListPaysByRegion(this.nomRegion).subscribe(data =>{
      this.listOfSubRegions = []
      for(let item of data){
        if(!(this.listOfSubRegions.find(e => e === item.subregion)))
          this.listOfSubRegions.push(item.subregion)
      }
      if(this.listOfSubRegions.length > 0)
        this.sousRegionCharge = true
    console.log(this.listOfSubRegions)
    })
  }

  goToPays(subregion : string){
    this.nomSousRegion.emit(subregion)
  }

}
