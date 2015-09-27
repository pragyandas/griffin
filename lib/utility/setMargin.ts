import chart = griffin.chart;
module griffin{
	export class utility{
		public static setMargin(chartOptions:any,cType:chart.chartType):chart.IChartMargin{
			var margin: chart.IChartMargin;

			//write a switch case for chartTypes
			switch (cType){
				case (chart.chartType.column): {
					var columnOptions = <chart.IColumnOptions>chartOptions;
					
				}
			}

			//Read all the chartOptions and set the margin here
			return margin;
		}

		private setColumnChartMargin(margin: chart.IChartMargin) {

		}

		private setColumnChartMarginForAxis(margin: chart.IChartMargin) {
			//set axis margin
			//axis margin will vary for different charts
		}

		private setMarginForLegend(margin: chart.IChartMargin) {
			//Legend common accross chart
		}
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