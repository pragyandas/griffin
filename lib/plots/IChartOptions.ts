module griffin {
    //Add all the options to the themes with default values for each theme
    //Most of the options can be same
    export interface IChartTitle{
            text:string,
			font?:string,
			fontSize?:number
	}
    export interface ITooltip{
            visible: boolean,
            tooltipTheme?:ITooltipThemeDetails
    }
    export interface ILegend{
            visible: boolean,
            tooltipTheme?:ILegendOptions
    }
    export interface IChartMargin{
		top:number,
		bottom:number,
		left:number,
		right:number
	}
    export interface IChartOptions {
        title?:IChartTitle,
        legend?:ILegend,
        valueAxesOptions?:[IAxisOptions],
        categoryAxisOptions?:IAxisOptions,
        tooltip?:ITooltip,
        margin?:IChartMargin,
        theme?:IChartThemeDetails    
    }
}