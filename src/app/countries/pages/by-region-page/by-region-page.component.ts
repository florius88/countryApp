import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';


type Region = 'Americas' | 'Africa' | 'Oceania' | 'Asia' | 'Antarctic' | 'Europe'

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['Americas', 'Africa', 'Oceania', 'Asia', 'Antarctic', 'Europe']
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) { }

  searchByRegion(term: Region) {
    this.selectedRegion = term;
    this.countriesService.searchRegion(term)
      .subscribe(countries => this.countries = countries);
  }

}
