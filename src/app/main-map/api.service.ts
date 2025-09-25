import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable
({
  providedIn: 'root'
})

export class ApiService 
{
  constructor(private http: HttpClient) {}

  getCountryInfo(code: string): Observable<any> 
  {
    let url = `http://api.worldbank.org/v2/country/${code.toLowerCase()}?format=json`;
    
    return this.http.get(url);
  }

  setCountryInfo(code: string) 
  {
    return this.getCountryInfo(code).pipe
    (
      map((response: any) => 
      {
        let data = response[1][0];
        let countryData = 
        {
          country: data.name,
          city: data.capitalCity,
          region: data.region.value,
          income: data.incomeLevel.value,
          latitude: data.latitude,
          longitude: data.longitude
        };

        return countryData;
      })
    )
  }
}