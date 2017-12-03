/*
 * Configuration class used to initialise the table component.
 * Parameters:
 *   source: the table of data to display.
 *   header: the description of columns to display
*/
export class TableConfiguration {
  source: Array<Object>[];
  header: Array<ColumnDefinition> = [];
}

/*
 * Specify what text and attribute should be displayed.
 * Parameters:
 *   textDisplayed: Simple text that will be placed above the column.
 *   attributeName: Attribute name of the object that should be placed in the cell
*/
export class ColumnDefinition {
	textDisplayed 	: string;
	attributeName	: string;
}
