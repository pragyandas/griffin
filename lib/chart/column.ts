//import legend module
//import utility module
module griffin.chart {
	interface IColumnOptions{
		isStacked:Stacked
		//add more options like stroke, stroke width, etc
		//set these in options or take it from theme
	}
	export class Column extends BaseChart {
		constructor(containerId: string) {
			super(containerId);
		}
		public columnOptions:IColumnOptions={
			isStacked:Stacked.false
		}
		public categoryAxis: any;
		public seriesAxes: [any];
		public legend:any;
		public categoryAxisOptions: axis.IAxisOptions = {
			//fill required options
		};
		public valueAxisOptions: axis.IAxisOptions = {
			//fill required options
		}
		public render(data: IChartData) {
			let margin = this.margin;
			this.setMarginForAxis(data,margin);
			this.legend=this.setMarginForLegend(data,margin);
			super.render(data);
			let prepData=this.dataPreparation(data);
			switch(this.columnOptions.isStacked){
				case(Stacked.false):
					this.renderGroupedColumn(data);
					break;
				case(Stacked.true):
					this.renderStackedColumn(data);
					break;
				case(Stacked.relative):
					this.renderNormalizedStackedColumn(data);
					break;
			}
		}
		
		private renderGroupedColumn(data:IChartData){
			let margin = this.margin;
			let valueAxisCount=d3.max(data.series.map((d)=>{return d.axisId||0}))+1;
			
			let categoryOptions=this.chartOptions.categoryAxisOptions;
			this.categoryAxis=axis.Axis.getAxis(categoryOptions.axisType|| axis.AxisType.ordinal);
			categoryOptions.position=categoryOptions.position && categoryOptions.position!==null?categoryOptions.position:{x:0,y:this.height};
			categoryOptions.direction=categoryOptions.direction && categoryOptions.direction!==null?categoryOptions.direction:axis.Direction.horizontal;
			this.categoryAxis.setAxisOptions(this.chartOptions.categoryAxisOptions);
			this.categoryAxis.draw(this.svg,data.categories);
			
			for(var i=0;i<valueAxisCount;i++){
				if(i===0){
					let axisData=data.series.filter((d)=>{
						return typeof d.axisId==='undefined' || d.axisId===i
					}),
					seriesAxisOption=this.chartOptions.valueAxesOptions[i];
					seriesAxisOption.position=seriesAxisOption.position && seriesAxisOption.position!==null?seriesAxisOption.position:{x:0,y:0};
					seriesAxisOption.direction=seriesAxisOption.direction && seriesAxisOption.direction!==null?seriesAxisOption.direction:axis.Direction.vertical;
					seriesAxisOption.orient=seriesAxisOption.orient && seriesAxisOption.orient!==null?seriesAxisOption.orient:'left';
					let seriesAxis=axis.Axis.getAxis(seriesAxisOption.axisType || axis.AxisType.linear);
					seriesAxis.setAxisOptions(seriesAxisOption);
					seriesAxis.draw(this.svg,axisData);
					this.seriesAxes.push(seriesAxis);
				}
				else{
					let axisData=data.series.filter((d)=>{
						return d.axisId===i
					}),
					seriesAxisOption=this.chartOptions.valueAxesOptions[i];
					seriesAxisOption.position=seriesAxisOption.position && seriesAxisOption.position!==null?seriesAxisOption.position:(i%2===0?{x:(0 - margin.left + i * 30),y:0}:{x:(this.width + ((i - 1) * 20)),y:0});
					seriesAxisOption.orient=seriesAxisOption.orient && seriesAxisOption.orient!==null?seriesAxisOption.orient:(i%2===0?'left':'right');
					seriesAxisOption.direction=seriesAxisOption.direction && seriesAxisOption.direction!==null?seriesAxisOption.direction:axis.Direction.vertical;
					let seriesAxis=axis.Axis.getAxis(seriesAxisOption.axisType || axis.AxisType.linear);
					seriesAxis.setAxisOptions(seriesAxisOption);
					seriesAxis.draw(this.svg,axisData);
					this.seriesAxes.push(seriesAxis);
				}
			}
		}
		
		private renderStackedColumn(data:IChartData){
			//multiple axis can only be used for trendline
		}
		
		private renderNormalizedStackedColumn(data:IChartData){
			//multiple axis can only be used for trendline
		}
		
		private setMarginForAxis(data:IChartData,margin:IChartMargin){
			let valueAxisCount = 1;
			data.series.forEach((d, i) => {
				if (d.axisId && d.axisId > valueAxisCount) {
					valueAxisCount++;
					valueAxisCount % 2 === 0 ? this.margin.right += 40 : this.margin.left += 40;
				}
			})
		}
		
		private setMarginForLegend(data:IChartData,margin:IChartMargin):any{
			//return legendObject 
		}
		
		private drawTrendlines(data:IChartData){
			
		}
		
		private dataPreparation(data:IChartData){
			return {barData:data.series.filter((d)=>{
				return d.trendline!==true
			}),trendlineData:data.series.filter((d)=>{
				return d.trendline===true
			})}
		}
		
		public setOptions(chartOptions: IChartOptions) {
			super.setOptions(chartOptions);
			//option for grouped,stacked,	
			if (typeof chartOptions.isStacked !== 'undefined' && chartOptions.isStacked !== null)
				this.columnOptions.isStacked = chartOptions.isStacked;	
		}
	}
}