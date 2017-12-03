import { Component, Input } from '@angular/core';

import {TableConfiguration) from './tableConfiguration';

@Component({
  selector: 'datatable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() configuration: TableConfiguration
  
  ngOnChanges(){
	  // useful for the filter
	  this.headerAttributes = this.configuration.header.map(h => h.attributeName);
  }
}
