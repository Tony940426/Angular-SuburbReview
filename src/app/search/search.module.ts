import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHomeComponent } from './search-home/search-home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchHomeComponent
  ]
})
export class SearchModule { }
