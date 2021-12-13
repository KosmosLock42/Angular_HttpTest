import { Component, OnInit } from '@angular/core';
import {  IWeather } from '../models/interface';
import { MeteoService } from '../shared/meteo.service';

@Component({
  selector: 'app-mono',
  templateUrl: './mono.component.html',
  styleUrls: ['./mono.component.scss']
})
export class MonoComponent implements OnInit {

  location!:string;
  data!: IWeather;

  constructor(private meteoserv: MeteoService) { }

  ngOnInit(): void {
  }

public getData(){
  this.meteoserv.getData(this.location)
  .subscribe(
    (response) => {
      console.log(response)
      this.data = response
    }
  )
}

}
