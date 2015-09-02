module griffin{
	export class theme{
		public static BLACK:IChartThemeDetails={
		  palette:['#03A9F4', '#E91E63', '#ff9800', '#4CAF50', '#D4E157', '#FFA726', '#9C27B0', '#DD4477', '#66AA00', '#B82E2E'],
		  axisColor:'#fff',
		  backgroundColor:'#000',
		  axisFont:'sans-serif',
		  axisFontSize:12,
		  tooltipTheme:tooltipTheme.CANDY
		};
		public static DEFAULT:IChartThemeDetails={
		  palette:['#03A9F4', '#E91E63', '#ff9800', '#4CAF50', '#D4E157', '#FFA726', '#9C27B0', '#DD4477', '#66AA00', '#B82E2E'],
		  axisColor:'#000',
		  backgroundColor:'#fff',
		  axisFont:'sans-serif',
		  axisFontSize:12,
		  tooltipTheme:tooltipTheme.BASIC
		};
	}
	export class tooltipTheme {
		public static BASIC: ITooltipThemeDetails = {
			roundedEdge:false,
			shadow:false,
			tooltipFont: 'sans-serif',
			tooltipFontSize: 12
		};
		public static CANDY: ITooltipThemeDetails = {
			roundedEdge: true,
			shadow:true,
			tooltipFont: 'sans-serif',
			tooltipFontSize: 12
		};
	}
}