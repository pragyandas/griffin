import axis=griffin.axis;
module griffin.chart {
	export class BaseChart {
		constructor(public containerId: string) {
			this.chartWidth = document.getElementById(containerId).offsetWidth;
			this.chartHeight = document.getElementById(containerId).offsetHeight;
		}
		public chartWidth: number;
		public chartHeight: number;
		public margin={
			top:<number>0,
			bottom:<number>0,
			right:<number>0,
			left:<number>0
		}
		public chartOptions:IChartOptions;
        public tooltip:boolean;
		public color: string[];
		public height: number;
		public width: number;
		public svg: d3.Selection<any>;
		public theme: IThemeDetails = theme.DEFAULT;
		protected setOptions(chartOptions: IChartOptions) {
			this.theme = chartOptions.theme || this.theme;
			this.tooltip = typeof chartOptions.tooltip !== 'undefined'?chartOptions.tooltip:true;
		}
		protected render(chartData: IChartData) {

			this.color = this.theme.palette;

			this.width = this.chartWidth - this.margin.left - this.margin.right;
			this.height = this.chartHeight - this.margin.top - this.margin.bottom;

			this.svg = d3.select("#" + this.containerId).append("svg")
				.attr("width", this.chartWidth)
				.attr("height", this.chartHeight)
				.style('background-color', this.theme.backgroundColor)
				.append("g")
				.attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
				.attr("id", this.containerId + "_svg");
		}
	}
}
