/// <reference path="../interface/IChartOptions.ts" />
/// <reference path="../interface/IChartData.ts" />
/// <reference path="../interface/IChartMargin.ts" />
module griffin{
    	export class BaseChart{	
		constructor(public containerId : string){
			this.width=document.getElementById(containerId).offsetWidth;
			this.height=document.getElementById(containerId).offsetHeight;
		}
		public width:number=700;
		public height:number=500;
		public margin:IChartMargin={
			top:10,
			bottom:20,
			left:20,
			right:20
		};
		
		public render(chartData : IChartData){
			console.log('rendering chart');
		}
		
		public setOptions(chartOptions : IChartOptions){
			console.log(chartOptions);	
		}
	}
}