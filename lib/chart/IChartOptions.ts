module griffin.chart {
    //Add all the options to the themes with default values for each theme
    //Most of the options can be same
    export enum chartType{
    	column,
    	bar,
    	area,
    	line,
    	pie,
    	donut,
    	barTable
    }
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
	export interface ITransition{
		value?:string,
		duration?:number,
		delay?:number
	}
    export interface IChartOptions {
        theme?:IThemeDetails,    
        valueAxesOptions?:axis.IAxisOptions[],
        categoryAxisOptions?:axis.IAxisOptions,
        tooltip?:boolean,
        legend?:ILegend,
		isStacked?:Stacked,
		transition: ITransition | boolean    
    }
    export interface ISeries{
		name: string,
		value: string,
		data: number[],
		labels?: string[],
		axisId: number,
		trendline: boolean
    }
    export interface ICategory{
		name: string,
		value: string,
		label?: string
    }
    export interface IMetadata{
    	dimensions?:[{
    		name?:string,
    		value?:string
    	}],
    	measures?:[{
    		name?:string,
    		value?:string
    	}]
    }
    export interface IChartData {
		//data for value axis
		series: ISeries[],
		//data for category axis
		categories: ICategory[],
		metadata?: IMetadata
	}
}