import { Injectable, Pipe } from '@angular/core';
import { PaysService } from '../paysService/pays.service';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StatisticDataService {

  constructor(private paysService: PaysService) { }


  // async filterAsia() {
  //   let statsAsia: any[] =[]
  //   await this.paysService.getAllPays().pipe(map(pays =>
  //     pays.filter((country: any) => country.region === "Asia")
  //   ))
  //     .subscribe(async data => {
  //       let tempAsia = data.sort((pays1: any, pays2: any) => pays1.population - pays2.population)
  //       tempAsia = tempAsia.slice(0, 10)
  //       for(let item of tempAsia){
  //         statsAsia.push({name : item.translations.fra.common, population : item.population})
  //       }
  //     })
  //   return statsAsia
  // }


  // filterAfrica() {
  //   let statsAfrica: any[] =[]
  //   this.paysService.getAllPays().pipe(map(pays =>
  //     pays.filter((country: any) => country.region === "Africa")
  //   ))
  //     .subscribe(data => {
  //       let tempAsia = data.sort((pays1: any, pays2: any) => pays1.population - pays2.population)
  //       tempAsia = tempAsia.slice(0, 10)
  //       for(let item of tempAsia){
  //         statsAfrica.push({name : item.translations.fra.common, population : item.population})
  //       }
  //     })
  //   return statsAfrica
  // }


  // filterAmericas() {
  //   let statsAmericas: any[] =[]
  //   this.paysService.getAllPays().pipe(map(pays =>
  //     pays.filter((country: any) => country.region === "Americas")
  //   ))
  //     .subscribe(data => {
  //       let tempAsia = data.sort((pays1: any, pays2: any) => pays1.population - pays2.population)
  //       tempAsia = tempAsia.slice(0, 10)
  //       for(let item of tempAsia){
  //         statsAmericas.push({name : item.translations.fra.common, population : item.population})
  //       }
  //     })
  //   return statsAmericas
  // }


  async filterEurope() {
    let statsEurope: any[] = [];

    const data = await this.paysService.getAllPays().pipe(map(pays =>
      pays.filter((country: any) => country.region === "Europe")
    )).toPromise();

    let tempAsia = data.sort((pays1: any, pays2: any) => pays2.population - pays1.population);
    tempAsia = tempAsia.slice(0, 10);
    statsEurope = tempAsia.map((item: any) => ({name : item.translations.fra.common, value : item.population}));

    return statsEurope;
  }

  async filterAfrica() {
    let statsAfrica: any[] = [];

    const data = await this.paysService.getAllPays().pipe(map(pays =>
      pays.filter((country: any) => country.region === "Africa")
    )).toPromise();

    let tempAsia = data.sort((pays1: any, pays2: any) => pays2.population - pays1.population);
    tempAsia = tempAsia.slice(0, 10);
    statsAfrica = tempAsia.map((item: any) => ({name : item.translations.fra.common, value : item.population}));

    return statsAfrica;
  }

  async filterAsia() {
    let statsAsia: any[] = [];

    const data = await this.paysService.getAllPays().pipe(map(pays =>
      pays.filter((country: any) => country.region === "Asia")
    )).toPromise();

    let tempAsia = data.sort((pays1: any, pays2: any) => pays2.population - pays1.population);
    tempAsia = tempAsia.slice(0, 5);
    statsAsia = tempAsia.map((item: any) => ({name : item.translations.fra.common, value : item.population}));

    return statsAsia;
  }

  async filterAmericas() {
    let statsAmericas: any[] = [];

    const data = await this.paysService.getAllPays().pipe(map(pays =>
      pays.filter((country: any) => country.region === "Americas")
    )).toPromise();

    let tempAsia = data.sort((pays1: any, pays2: any) => pays2.population - pays1.population);
    tempAsia = tempAsia.slice(0, 7);
    statsAmericas = tempAsia.map((item: any) => ({name : item.translations.fra.common, value : item.population}));

    return statsAmericas;
  }
}
