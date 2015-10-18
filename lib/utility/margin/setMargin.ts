import chart = griffin.chart;
import axis = griffin.axis;
module griffin{
	export class utility{
		public static chartCofiguration = {};
		public static setMargin(c:any,cType:chart.chartType){
			//write a switch case for chartTypes
			switch (cType){
				case (chart.chartType.column): {
					this.setColumnChartMargin(<chart.Column>c);
				}
			}
		}
		
		private static setColumnChartMargin(c:chart.Column) {
			var margin=c.margin;
			c.columnOptions.valueAxesOptions.forEach((valueAxisOption)=>{
				if(valueAxisOption.direction)
					margin.
			})

		}
		
		
		// private static ordinalAxisLabelRotation(categories:chart.ICategory[]){
		// 	categories.forEach((category)=>{
		// 		var label=category.label || category.name || category.value;

		// 		//draw text nodes and calculate the width
		// 	})
		// 	//get cumulative text node width and compare to width
		// } 
	}
}



// private setMarginForAxis(data:IChartData, margin:IChartMargin){
// 	//Set margin after axis position
// 	let valueAxisCount = 1;
// 	data.series.forEach((d, i) => {
// 		if (d.axisId && d.axisId > valueAxisCount) {
// 			valueAxisCount++;
// 			valueAxisCount % 2 === 0 ? this.margin.right += 40 : this.margin.left += 40;
// 		}
// 	})
// }