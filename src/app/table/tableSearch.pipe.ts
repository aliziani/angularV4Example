import { Pipe, PipeTransform } from '@angular/core';
/*
 * Filter data from a table of object depending to the header defining the target attributes.
 * Usage:
 *   source | search:header,searchText
 * Example:
 *   {{ [{id:1,name:"test1"}, {id:2, name:"test2"}] | search:["name"], "1" }}
 *   formats to: [{id:1,name:"test1"}]
*/
@Pipe({name: 'search'})
export class TableSearchPipe implements PipeTransform {
	transform(source: Array<Object>, header: Array<string>, searchText: string): Array<Object>{
		if(!searchText)
			return source;
		return source.filter(function(item){
			let target = '';
			header.forEach(function(attributeName){
				target = target.concat(item[attributeName]);
			});
			return target.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
		});
	}
}