module griffin.chart {
    //Add all the options to the themes with default values for each theme
    //Most of the options can be same
    export interface ILegend{
            visible: boolean,
            legendTheme?:ILegendOptions
    }
    export interface IChartMargin{
		top:number,
		bottom:number,
		left:number,
		right:number
	}
	export enum Stacked{
		true,
		false,
		relative
	}
    export interface IChartOptions {
        theme?:IChartThemeDetails,    
        valueAxesOptions?:[axis.IAxisOptions],
        categoryAxisOptions?:axis.IAxisOptions,
        tooltip?:boolean,
        legend?:ILegend,
		isStacked?:Stacked       
    }
    export interface IChartData {
		//value axis
		series: [{
			name: string,
			value: string,
			data: number[],
			labels?: string[],
			axisId:number,
			trendline:boolean 
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