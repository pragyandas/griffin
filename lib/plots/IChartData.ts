module griffin {
	export enum seriesChartType{
		line,
		area
	}
	export interface IChartData {
		//value axis
		series: [{
			name: string,
			value: string,
			data: number[],
			labels?: string[],
			//To specify the axis for the series
			//if not specified defaults to 0
			axisId?: number,
			seriesChartType?:seriesChartType 
		}],
		//category axis
		categories: [{
			name: string,
			value: string,
			label?: string
		}],
		//measure can be used in case of multi-dimensional chart
		//with one measure and two dimensions
		measure?: {
			name: string,
			value: string
		}
	}
}