module griffin.chart {
    export interface IColumnOptions {
        isStacked: Stacked,
        transition: ITransition | boolean,
        //add more options like stroke, stroke width, etc
        //set these in options or take it from theme
        barOptions: IBarOptions,
        categoryAxisOptions?: IAxisOptions,
        valueAxesOptions?: IAxisOptions[]
    }

    interface IColumnAxisProperties {
        categoryAxisProperties?: IAxisProperties,
        valueAxesProperties?: IAxisProperties[]
    }

    interface IBarOptions {
        stroke: string,
        strokeWitdh: number,
        color: string[],
        barRadius: number
        //Add more options here
    }

    interface IPreparedData {
        barData: ISeries[],
        trendlineData: ISeries[]
    }
    export class Column extends BaseChart {
        constructor(containerId: string) {
            super(containerId);
        }
        public columnOptions: IColumnOptions = {
            isStacked: Stacked.false,
            transition: <ITransition>{
                value: 'linear',
                duration: 500,
                delay: 200
            },
            barOptions: { //Get all the options from theme
                color: this.theme.palette,
                stroke: '',
                strokeWitdh: 0,
                barRadius: 0
            }
        };
        public chartData: IChartData;
        public axisProperties: IColumnAxisProperties;
        private preparedData: IPreparedData;
        private categoryAxis: any;
        private seriesAxes: [any];
        private legend: any;

        public setOptions(chartOptions: IChartOptions) {
            super.setOptions(chartOptions);
            this.columnOptions.isStacked = chartOptions.isStacked || this.columnOptions.isStacked;
            //Check for Union Type
            if (typeof chartOptions.transition === 'boolean') {
                this.columnOptions.transition = chartOptions.transition === false ? <boolean>chartOptions.transition : <ITransition>this.columnOptions.transition;
            } else if (typeof chartOptions.transition === 'object') {
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
        }

        public render(data: IChartData) {
            this.chartData = data;
            Utility.setMargin(this, chartType.column);
            super.render(this.chartData);
            var preparedData = this.dataPreparation(this.chartData);
            switch (this.columnOptions.isStacked) {
                case (Stacked.false):
                    this.renderAxis(this.chartData);
                    this.renderGroupedColumn(preparedData);
                    break;
                case (Stacked.true):
                    //multiple axis can only be used for trendline
                    if (this.chartData.series.filter((d) => {
                        return (typeof d.trendline === 'undefined' || d.trendline === false) && d.axisId > 1;
                    }).length > 0) {
                        console.error("multiple axis can only be used with trendline when 'isStacked=true'");
                        return;
                    }

                    this.renderAxis(this.chartData);
                    this.renderStackedColumn(preparedData);
                    break;
                case (Stacked.relative):
                    //multiple axis can only be used for trendline
                    if (this.chartData.series.filter((d) => {
                        return (typeof d.trendline === 'undefined' || d.trendline === false) && d.axisId > 1;
                    }).length > 0) {
                        console.error("multiple axis can only be used with trendline when 'isStacked=relative'");
                        return;
                    }

                    this.renderAxis(this.chartData);
                    this.renderNormalizedStackedColumn(preparedData);
                    break;
            }
        }

        private setGroupedColumnOptions(chartOptions: IChartOptions) {
            //categoryAxisOptions
            chartOptions.categoryAxisOptions.axisType = chartOptions.categoryAxisOptions.axisType || AxisType.ordinal;
            this.columnOptions.categoryAxisOptions = chartOptions.categoryAxisOptions;
            this.axisProperties.categoryAxisProperties = {
                perspective: Perspective.horizontal,
                direction: Direction.bottom,
                orient: Direction.bottom,
                position: { x: 0, y: this.height }
            };
            //ValueAxisOptions
            chartOptions.valueAxesOptions.forEach((valueAxisOption, index) => {
                let valueAxisProperty: IAxisProperties;
                valueAxisOption.axisType = valueAxisOption.axisType || AxisType.linear;
                valueAxisProperty.perspective = Perspective.vertical;
                if (index === 0) {
                    valueAxisProperty.direction = Direction.left;
                    valueAxisProperty.orient = Direction.left;
                    valueAxisProperty.position = { x: 0, y: 0 };
                }
                else {
                    if (index % 2 === 0) {
                        valueAxisProperty.direction = Direction.left;
                        valueAxisProperty.orient = Direction.left;
                        valueAxisProperty.position = { x: (0 - this.margin.left + index * 30), y: 0 };
                    } else {
                        valueAxisProperty.direction = Direction.right;
                        valueAxisProperty.orient = Direction.right;
                        valueAxisProperty.position = { x: (this.width + ((index - 1) * 20)), y: 0 };
                    }
                }

                this.columnOptions.valueAxesOptions[index] = valueAxisOption;
                this.axisProperties.valueAxesProperties[index] = valueAxisProperty;
            })
        }

        private setStackedColumnOptions(chartOptions: IChartOptions) {
        }

        private setNormalizedStackedColumnOptions(chartOptions: IChartOptions) {
        }

        private renderAxis(data: IChartData) {
            var valueAxisCount = d3.max(data.series.map((d) => { return d.axisId || 0 })) + 1;
            if (valueAxisCount > this.columnOptions.valueAxesOptions.length) {
                console.error('AxisOptions not provided for all the axes. Please provide axis options for each value axis used.');
                return;
            }

            this.categoryAxis = axis.AxisFactory.getAxis(this.columnOptions.categoryAxisOptions.axisType, this.axisProperties.categoryAxisProperties, this.theme);
            this.categoryAxis.setOptions(this.columnOptions.categoryAxisOptions)
            this.categoryAxis.draw(this.svg, data.categories);
            if (this.columnOptions.categoryAxisOptions.labelRotate === 'auto') {
                this.applyCategoryAxisLabelRotation();
            }

            for (var index = 0; index < valueAxisCount; index++) {
                let axisData = index === 0 ? data.series.filter((d) => {
                    return typeof d.axisId === 'undefined' || d.axisId === index
                }) : data.series.filter((d) => {
                    return d.axisId === index
                });

                let seriesAxis = axis.AxisFactory.getAxis(this.columnOptions.valueAxesOptions[index].axisType, this.axisProperties.valueAxesProperties[index], this.theme);
                seriesAxis.setOptions(this.columnOptions.valueAxesOptions[index]);
                this.seriesAxes.push(seriesAxis);
                seriesAxis.draw(this.svg, axisData.map((aData)=>{return {name:aData.name,value:aData.value,data:aData.data}}));
            }
        }
        private applyCategoryAxisLabelRotation() {
						(function rotateLabelSetMargin(degree:number){
							if(degree===45){
								this.categoryAxis.setOptions({dx:"-.8em",dy:".15em",textAnchor:'end',labelRotate:'45'});

								this.categoryAxis.draw(this.svg,this.chartData.categories);
								if(checkCategoryAxisOverlap())
									rotateLabelSetMargin(90);
							}
							else if(degree===90){
								this.categoryAxis.setOptions({dx:"-.8em",dy:".15em",textAnchor:'end',labelRotate:'90'});
								this.categoryAxis.draw(this.svg,this.chartData.categories);
							}
							else{
								if(checkCategoryAxisOverlap()){
									this.prepareCategoryLabel(10);
									this.margin.bottom+=10;
									this.height = this.chartHeight - this.margin.top - this.margin.bottom;
									rotateLabelSetMargin(45);
								}
							}
						}).bind(this)(0);

						function checkCategoryAxisOverlap():boolean{
							var axis:d3.Selection<any> = d3.select('#' + this.categoryAxis.axisId),prevBoundingRectRight:number=0,overlap:boolean=false;
							axis.selectAll('text').each(function(d){
  							if(this.getBoundingClientRect().left<prevBoundingRectRight){
									overlap=true;
									return;
  							}
  							prevBoundingRectRight=this.getBoundingClientRect().right;
							});
							return overlap;
						}
        }
        private renderGroupedColumn(data: IPreparedData) {

        }

        private renderStackedColumn(data: IPreparedData) {
        }

        private renderNormalizedStackedColumn(data: IPreparedData) {
        }

        private drawTrendlines(data: IPreparedData) {
        }

        private dataPreparation(data: IChartData): IPreparedData {
						this.prepareCategoryLabel();
            return {
                barData: data.series.filter((d) => {
                    return d.trendline !== true
                }), trendlineData: data.series.filter((d) => {
                    return d.trendline === true
                })
            }
        }
				private prepareCategoryLabel(labelLength?:number){
					if(!labelLength)
						this.chartData.categories.forEach((category)=>{
							category.label=category.label || category.name || category.value;
						})
					else
					this.chartData.categories.forEach((category)=>{
						category.label=category.label.slice(0,labelLength);
					})
				}
    }
}
