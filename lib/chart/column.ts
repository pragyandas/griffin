module griffin.chart {
	interface IColumnOptions{
		isStacked?:Stacked,
		transition?: ITransition | boolean,
		//add more options like stroke, stroke width, etc
		//set these in options or take it from theme
		categoryAxisOptions?:axis.IAxisOptions,
		valueAxesOptions?:axis.IAxisOptions[]
	}

	interface IPreparedData{
		barData: ISeries[],
		trendlineData: ISeries[]
	}
	export class Column extends BaseChart {
		constructor(containerId: string) {
			super(containerId);
		}
		private columnOptions: IColumnOptions = {
			isStacked: Stacked.false,
			transition: <ITransition>{
				value: 'linear',
				duration: 500,
				delay: 200
			}
		};
		private preparedData: IPreparedData;
		private categoryAxis: any;
		private seriesAxes: [any];
		private legend: any;
		public setOptions(chartOptions: IChartOptions) {
			super.setOptions(chartOptions);
			this.columnOptions.isStacked = chartOptions.isStacked || this.columnOptions.isStacked;
			//Check for Union Type
			if(typeof chartOptions.transition==='boolean'){
				this.columnOptions.transition = chartOptions.transition === false ? <boolean>chartOptions.transition : <ITransition>this.columnOptions.transition;
			}else if(typeof chartOptions.transition==='object'){
				(<ITransition>this.columnOptions.transition).value = (<ITransition>chartOptions.transition).value || (<ITransition>this.columnOptions.transition).value;
				(<ITransition>this.columnOptions.transition).duration = (<ITransition>chartOptions.transition).duration || (<ITransition>this.columnOptions.transition).duration;
				(<ITransition>this.columnOptions.transition).delay = (<ITransition>chartOptions.transition).delay || (<ITransition>this.columnOptions.transition).delay;
			}

			switch (this.columnOptions.isStacked) {
				case (Stacked.false):
					this.setGroupedColumnOptions(chartOptions);
					break;
				case (Stacked.true):
					this.setStackedColumnOptions(chartOptions);
					break;
				case (Stacked.relative):
					this.setNormalizedStackedColumnOptions(chartOptions);
					break;
			}

			//After setting options as margin depends on options
			this.margin = utility.setMargin(this.chartOptions);
		}
		public render(data:IChartData) {	
			super.render(data);
			this.preparedData=this.dataPreparation(data);
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


		private setGroupedColumnOptions(chartOptions:IChartOptions) {
			//categoryAxisOptions

			chartOptions.categoryAxisOptions.axisType = chartOptions.categoryAxisOptions.axisType || axis.AxisType.ordinal;
			chartOptions.categoryAxisOptions.position = chartOptions.categoryAxisOptions.position || { x: 0, y: this.height };
			chartOptions.categoryAxisOptions.direction = chartOptions.categoryAxisOptions.direction || axis.Direction.horizontal;
			chartOptions.categoryAxisOptions.orient = chartOptions.categoryAxisOptions.orient || 'bottom';
			this.columnOptions.categoryAxisOptions = chartOptions.categoryAxisOptions;

			//ValueAxisOptions
		
			chartOptions.valueAxesOptions.forEach((valueAxisOption, index) => {
				
				valueAxisOption.axisType = valueAxisOption.axisType || axis.AxisType.linear;
				valueAxisOption.direction = valueAxisOption.direction || axis.Direction.vertical;
				if(index===0){
					valueAxisOption.position = valueAxisOption.position || { x: 0, y: 0 };
					valueAxisOption.orient = valueAxisOption.orient || 'left';
				}
				else{
					if(index%2===0){
						valueAxisOption.position = valueAxisOption.position || { x: (0 - this.margin.left + index * 30), y: 0 };
						valueAxisOption.orient = valueAxisOption.orient || 'left';
					}else{
						valueAxisOption.position = valueAxisOption.position || { x: (this.width + ((index - 1) * 20)), y: 0 };
						valueAxisOption.orient = valueAxisOption.orient || 'right';
					}
				}

				this.columnOptions.valueAxesOptions[index]=valueAxisOption;
			})



		}


		private setStackedColumnOptions(chartOptions:IChartOptions) {

		}


		private setNormalizedStackedColumnOptions(chartOptions:IChartOptions) {

		}


		private renderAxis(data:IChartData){
			var valueAxisCount = d3.max(data.series.map((d) => { return d.axisId || 0 })) + 1;
			if (valueAxisCount > this.columnOptions.valueAxesOptions.length) {
				console.error('AxisOptions not provided for all the axes. Please provide axis options for each value axis used.');
				return;
			}

			this.categoryAxis = axis.AxisFactory.getAxis(this.columnOptions.categoryAxisOptions, this.theme);
			this.categoryAxis.draw(this.svg, data.categories);


			for (var index = 0; index < valueAxisCount; index++) {
				let axisData = index === 0 ? data.series.filter((d) => {
					return typeof d.axisId === 'undefined' || d.axisId === index
				}) : data.series.filter((d) => {
					return d.axisId === index
				});

				let seriesAxis = axis.AxisFactory.getAxis(this.columnOptions.valueAxesOptions[index], this.theme);
				seriesAxis.draw(this.svg, axisData);
				this.seriesAxes.push(seriesAxis);
			}
		}
		
		private renderGroupedColumn(data:IChartData){
			this.renderAxis(data);
		}
		
		private renderStackedColumn(data:IChartData){
			//multiple axis can only be used for trendline
			if(data.series.filter((d)=>{
				return (typeof d.trendline==='undefined' || d.trendline===false) && d.axisId>1;
			}).length>0)
			{
				console.error("multiple axis can only be used with trendline when 'isStacked=true'");
				return;
			}

			this.renderAxis(data);
		}
		
		private renderNormalizedStackedColumn(data:IChartData){
			//multiple axis can only be used for trendline
			if(data.series.filter((d)=>{
				return (typeof d.trendline==='undefined' || d.trendline===false) && d.axisId>1;
			}).length>0)
			{
				console.error("multiple axis can only be used with trendline when 'isStacked=relative'");
				return;
			}

			this.renderAxis(data);
		}
		
		
		
		private drawTrendlines(data:IChartData){
			
		}
		
		private dataPreparation(data:IChartData):IPreparedData{
			return {barData:data.series.filter((d)=>{
				return d.trendline!==true
			}),trendlineData:data.series.filter((d)=>{
				return d.trendline===true
			})}
		}
	}
}