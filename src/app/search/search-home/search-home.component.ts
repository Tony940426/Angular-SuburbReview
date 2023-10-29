import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient){
  }

  storeFormsValue(){
    const {state, suburb, postcode, type, bedrooms} = this.searchForm.value;
    const apiKey = 'key_16e9a90ece4b1760855b15b81a51a707';
    const headers = new HttpHeaders().set('X-API-KEY', apiKey);

    return this.http.get<any>(`https://api.domain.com.au/v2/suburbPerformanceStatistics/${state}/${suburb}/${postcode}?propertyCategory=${type}&bedrooms=${bedrooms}&periodSize=years&startingPeriodRelativeToCurrent=1&totalPeriods=1`, {headers}).subscribe(
      response => {
        this.result = response.series.seriesInfo[0].values;
        console.log(this.result);
      }
    )
  }
}