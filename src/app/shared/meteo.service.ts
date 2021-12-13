import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from '../models/interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  baseURL:string = "http://api.openweathermap.org/data/2.5/weather";

  constructor(private http: HttpClient) { }

getData(location: string): Observable<any>{

  const params = new HttpParams()
  .set('units', "metric")
  .set('appid', "820c75191fda2fbb9ac242550d5b8263")
  .set('q', location)
  .set('lang', "it")

return this.http.get(this.baseURL, {'params': params} )
.pipe(map((data: any) => {
    return data
  })
)
}

}
