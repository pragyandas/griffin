import IChartOptions=griffin.chart.IChartOptions;
import IMargin = griffin.chart.IChartMargin;
module griffin{
	export class utility{
		public static setMargin(chartOptions:IChartOptions):IMargin{
			var margin: IMargin;

			//write a switch case for chartTypes

			//Read all the chartOptions and set the margin here
			return margin;
		}

		private setColumnChartMargin(margin:IMargin){

		}

		private setColumnChartMarginForAxis(margin:IMargin){
			//set axis margin
			//axis margin will vary for different charts
		}

		private setMarginForLegend(margin:IMargin){
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