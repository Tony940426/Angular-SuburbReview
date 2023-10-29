import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchApi(result: any, headers: HttpHeaders ){
    const url = `https://api.domain.com.au/v2/suburbPerformanceStatistics/${result.state}/${result.suburb}/${result.postcode}?propertyCategory=${result.type}&bedrooms=${result.bedrooms}&periodSize=years&startingPeriodRelativeToCurrent=1&totalPeriods=1`
    return this.http.get<any>(url, { headers });
  }
}
