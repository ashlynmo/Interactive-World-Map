import { Component } from '@angular/core';
import { MapSvgComponent } from '../map-svg/map-svg.component';
import { CountryInfoComponent } from '../country-info/countryinfo.component';
import { ApiService } from './api.service';

@Component
({
  selector: 'app-main',
  imports: [CountryInfoComponent, MapSvgComponent],
  templateUrl: './main-map.component.html',
  styleUrl: './main-map.component.css'
})

export class MainComponent 
{
  hoveredCountryCode!: string;
  countryCode!: string;
  countryName!: string;
  countryCapital!: string;
  countryRegion!: string;
  countryIncomeLevel!: string;
  countryLongitude!: string;
  countryLatitude!: string;

  constructor(private apiService: ApiService) {}

  onCountryHovered(countryCode: string | null) 
  {
    this.hoveredCountryCode = countryCode ?? '';

    if (!countryCode) 
    {
      // Clear data
      this.countryCode = '';
      this.countryName = '';
      this.countryCapital = '';
      this.countryRegion = '';
      this.countryIncomeLevel = '';
      this.countryLongitude = '';
      this.countryLatitude = '';

      return;
    }

    // Fetch data
    this.apiService.setCountryInfo(countryCode).subscribe((data) => 
    {
      this.countryCode = countryCode;
      this.countryName = data.country;
      this.countryCapital = data.city;
      this.countryRegion = data.region;
      this.countryIncomeLevel = data.income;
      this.countryLatitude = data.latitude;
      this.countryLongitude = data.longitude;
    });
  }
}