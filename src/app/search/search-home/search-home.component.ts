import { Component, Optional } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class SearchHomeComponent {
  searchForm = new FormGroup({
    state: new FormControl(''),
    suburb: new FormControl(''),
    postcode: new FormControl(''),
    bedrooms: new FormControl(''),
    type: new FormControl('')
  })

  result: any;
  medianSalePrice: any;
  displaySuburb = '';
  displayPostcode = '';
  displayType = '';
  displayBedrooms = '';


  constructor(private search: SearchService){
  }

  storeFormsValue(){
    const {state, suburb, postcode, type, bedrooms} = this.searchForm.value;
    const apiKey = 'key_16e9a90ece4b1760855b15b81a51a707';
    const headers = new HttpHeaders().set('X-API-KEY', apiKey);
    
    return this.search.searchApi({state, suburb, postcode, type, bedrooms}, headers).subscribe(
      response => {
        this.result = response.series.seriesInfo[0].values;
        this.displayPostcode = this.searchForm.get('postcode')?.value as string
        this.displaySuburb = this.searchForm.get('suburb')?.value as string
        this.displayType = this.searchForm.get('type')?.value as string
        this.displayBedrooms = this.searchForm.get('bedrooms')?.value as string
        console.log(this.result);
      }
    )
  }
}