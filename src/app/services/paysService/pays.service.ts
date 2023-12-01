import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pays } from 'src/app/models/pays';
import { SousRegion } from 'src/app/models/sous-region';


@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http : HttpClient) { }

  urlAPI : string = "https://restcountries.com/v3.1/all"

  getAllPays() : Observable<any> {
    return this.http.get(this.urlAPI)
  }

  getListPaysBySubRegion(subregion : string){
    const data = this.getAllPays();
    return data.pipe( map ((pays) => pays.filter((country : any) => country.subregion == subregion)))
  }

  getListPaysByRegion(region : string) : Observable<any>{
    return this.getAllPays().pipe( map (pays => pays.filter(((country : any) => country.region == region ))))
  }

}
