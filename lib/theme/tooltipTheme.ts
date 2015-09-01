module griffin {
	export class tooltipTheme {
		public static BASIC: ITooltipDetails = {
			roundedEdge:false,
			shadow:false,
			tooltipFont: 'sans-serif',
			tooltipFontSize: 12
		};
		public static CANDY: ITooltipDetails = {
			roundedEdge: true,
			shadow:true,
			tooltipFont: 'sans-serif',
			tooltipFontSize: 12
		};
	}
}