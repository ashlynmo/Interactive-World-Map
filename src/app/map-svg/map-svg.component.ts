import { CommonModule} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component
({
  selector: 'app-map-svg',
  imports: [CommonModule],
  templateUrl: './map-svg.component.html',
  styleUrl: './map-svg.component.css'
})

export class MapSvgComponent 
{
  @Output() countryHovered = new EventEmitter<string | null>();

  onSvgPointerOver(event: PointerEvent) 
  {
    const target = event.target as Element;

    if (target?.tagName?.toLowerCase() === 'path') 
    {
      this.setCountryData(event);
    }
  }

  onSvgPointerOut(event: PointerEvent) 
  {
    const target = event.target as Element;

    if (target?.tagName?.toLowerCase() === 'path') 
    {
      this.clearCountryInfo();
    }
  }

  setCountryData(event: MouseEvent) 
  {
    const target = event.target as SVGPathElement;
    const countryId = target?.id;
    
    if (countryId) this.countryHovered.emit(countryId);
  }

  clearCountryInfo() 
  {
    this.countryHovered.emit(null);
  }
}