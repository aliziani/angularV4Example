import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TableComponent } from './table.component';
import {TableSearchPipe) from './tableSearch.pipe';

@NgModule({
  declarations: [
	TableComponent,
	TableSearchPipe
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
