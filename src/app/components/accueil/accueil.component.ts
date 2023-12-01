import { Component, Input, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StatisticDataService } from 'src/app/services/statistic-data/statistic-data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  nameRegion : string = ""
  nameSubRegion : string = ""
  resultSearch! : boolean
  regionCharge : boolean = false
  dataIsLoading : boolean = true

  graphe_afrique :any
  graphe_europe : any
  graphe_asia : any
  graphe_america :any

  constructor(private toastr : ToastrService, private statService : StatisticDataService) { }

  async ngOnInit() {
    this.graphe_europe = await this.statService.filterEurope()
    this.graphe_afrique  = await this.statService.filterAfrica()
    this.graphe_asia = await this.statService.filterAsia()
    this.graphe_america = await this.statService.filterAmericas()

    console.log(this.graphe_america)
    console.log(this.graphe_asia)
    console.log(this.graphe_europe)
    console.log(this.graphe_afrique)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called')
    if (changes['resultSearch']) {
      console.log(this.resultSearch)
      this.afficherToast()
    }
  }

  getRegion(name :string){
    this.nameRegion = name
    console.log(this.nameRegion)
  }

  getSousRegion(name : string) {
    this.nameSubRegion = name
    console.log(this.nameSubRegion)
  }

  getResultSearch(result : boolean){
    this.resultSearch = result
    console.log(this.resultSearch)
    this.afficherToast()
  }

  afficherToast(){
    if(this.resultSearch){
      this.toastr.success('La recherche a été effectuée avec succès', 'Bravo!', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right',
        closeButton: true,
        titleClass: 'font-weight-bold toast-success',
        messageClass: 'text-white toast-success'
      });
    }
    else
      this.toastr.error('Aucun pays trouvé, effectuez une autre recherche', 'Oups!', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right',
        closeButton: true,
        titleClass: 'font-weight-bold toast-error',
        messageClass: 'text-white toast-error'
      });
  }

  getLoadPays(loadP : boolean) {
    console.log(loadP)
    if(loadP)
      this.toastr.success('Pays chargé avec effectuée avec succès', 'Bravo!', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right',
        closeButton: true,
        titleClass: 'font-weight-bold toast-success',
        messageClass: 'text-white toast-success'
      });
    else
      this.toastr.error('Aucun pays trouvé', 'Oups!', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right',
        closeButton: true,
        titleClass: 'font-weight-bold toast-error',
        messageClass: 'text-white toast-error'
      });
  }

  getLoadRegions(ev :boolean){
    this.regionCharge = ev
    this.dataIsLoading = false
  }
}
