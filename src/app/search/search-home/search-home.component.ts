import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent {
  searchForm = new FormGroup({
    state: new FormControl(''),
    suburb: new FormControl(''),
    postcode: new FormControl('')
  })

  result: any;

  constructor(){
    console.log(this.searchForm)
  }

  storeFormsValue(){
    this.result = this.searchForm.value
    console.log(this.result);
  }
}
