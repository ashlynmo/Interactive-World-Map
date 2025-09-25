import { Component, Input } from '@angular/core';

@Component
({
  selector: 'app-country-info',
  templateUrl: './countryinfo.component.html',
  styleUrl: './countryinfo.component.css'
})

export class CountryInfoComponent 
{
  @Input() countryCode!: string;
  @Input() countryName!: string;
  @Input() countryCapital!: string;
  @Input() countryRegion!: string;
  @Input() countryIncomeLevel!: string;
  @Input() countryLongitude!: string;
  @Input() countryLatitude!: string;
}