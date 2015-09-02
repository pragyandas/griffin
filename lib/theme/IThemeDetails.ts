module griffin{
	export interface ITooltipThemeDetails {
		roundedEdge?: boolean,
		shadow: boolean,
		tooltipFont?: string,
		tooltipFontSize?: number
		//add more options
	}
	export interface IChartThemeDetails{
		palette:string[]
		axisColor:string,
		backgroundColor:string,
		axisFont:string,
		axisFontSize:number,
		tooltipTheme:ITooltipThemeDetails
		//add more options
	}
}