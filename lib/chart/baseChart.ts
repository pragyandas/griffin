import axis=griffin.axis;
module griffin.chart {
	export class BaseChart {
		constructor(public containerId: string) {
			this.chartWidth = document.getElementById(containerId).offsetWidth;
			this.chartHeight = document.getElementById(containerId).offsetHeight;
		}
		public chartWidth: number;
		public chartHeight: number;
		protected margin={
			top:<number>15,
			bottom:<number>20,
			right:<number>10,
			left:<number>30
		}
		public chartOptions:IChartOptions;
        public tooltip:boolean=true;
		public color: string[];
		public height: number;
		public width: number;
		public svg: d3.Selection<any>;
		public theme: IChartThemeDetails = theme.DEFAULT;

		public render(chartData: IChartData) {

			this.color = this.theme.palette;

			this.width = this.chartWidth - this.margin.left - this.margin.right;
			this.height = this.chartHeight - this.margin.top - this.margin.bottom;

			this.svg = d3.select("#" + this.containerId).append("svg")
				.attr("width", this.width + this.margin.left + this.margin.right)
				.attr("height", this.height + this.margin.top + this.margin.bottom)
				.style('background-color', this.theme.backgroundColor)
				.append("g")
				.attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
				.attr("id", this.containerId + "_svg");
		}
		public setOptions(chartOptions: IChartOptions) {
			if (typeof chartOptions.theme !== 'undefined' && chartOptions.theme !== null)
				this.theme = chartOptions.theme;
			if (typeof chartOptions.tooltip !== 'undefined' && chartOptions.tooltip !== null)
				this.tooltip = chartOptions.tooltip;
		}
	}
}