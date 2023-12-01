import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { BehaviourService } from 'src/app/services/behaviourService/behaviour.service';
import { PaysService } from 'src/app/services/paysService/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent {

  @Input () nomSousRegion! : string;
  @Output() resultSrarch = new EventEmitter<boolean>();
  @Output() loadPays =  new EventEmitter<boolean>();
  listOfPays : any[] = []
  listPays : any[]  = []
  tempListOfPays : any[]  =[]
  currentPage : number = 1
  paysParPage : number = 10
  paysCharge : boolean = false

  constructor(private paysService : PaysService, private behaviourService : BehaviourService){}


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nomSousRegion']) {
      this.getPays()
    }
  }

  onPageChange(page : number){
    this.currentPage = page;
    this.slicePays()
  }

  getPays(){
    this.paysService.getListPaysBySubRegion(this.nomSousRegion).subscribe(data =>{
      this.listOfPays = []
      this.tempListOfPays = []
      this.listOfPays = data
      this.tempListOfPays = data
      if(this.listOfPays.length > 0){
        this.loadPays.emit(true)
        this.paysCharge = true
      }
      else
        this.loadPays.emit(false)
      this.slicePays()
      console.log(this.listOfPays)
    })
  }

  slicePays() {
    const start = (this.currentPage - 1) * this.paysParPage
    const end = start + this.paysParPage
    this.listPays = this.listOfPays.slice(start, end)
  }


  searchPays(ev : any) {
    let val = ev.target.value

    this.listOfPays = this.tempListOfPays.filter((item : any) => {
      let paysNom = item.translations.fra.common +
        '' + item.translations.fra.official +
        '' + item.name.common +
        '' + item.name.official
      return paysNom.toLowerCase().indexOf(val.toLowerCase()) > -1;
    })

    this.slicePays()

    if(this.listPays.length == 0)
      this.resultSrarch.emit(false)
    else{
      this.behaviourService.updateNotif(this.listPays.length)
      this.resultSrarch.emit(true)
    }
  }

}
