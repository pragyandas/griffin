module griffin {
	export class baseChart {
		constructor(public containerId: string, public theme: IThemeDetails=griffin.theme.DEFAULT) {
			this.chartWidth = document.getElementById(containerId).offsetWidth;
			this.chartHeight = document.getElementById(containerId).offsetHeight;
		}
		public chartWidth: number;
		public chartHeight: number;
		public margin: IChartMargin = {
			top: <number>10,
			bottom: <number>20,
			left: <number>20,
			right: <number>20
		};
		public chartOptions: IChartOptions;
		public color: string[];
		public height: number;
		public width: number;

		public render(chartData: IChartData) {

			this.color = this.theme.palette;

			var width = this.chartWidth - this.margin.left - this.margin.right,
				height = this.chartHeight - this.margin.top - this.margin.bottom;

			var svg = d3.select("#" + this.containerId).append("svg")
				.attr("width", width + this.margin.left + this.margin.right)
				.attr("height", height + this.margin.top + this.margin.bottom)
				.style('fill',this.theme.backgroundColor)
				.append("g")
				.attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
				.attr("id", this.containerId + "_svg");
		}

		public setOptions(chartOptions: IChartOptions) {
			this.chartOptions = chartOptions;
		}
	}
}