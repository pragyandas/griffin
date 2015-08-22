/// <reference path="../interface/IChartOptions.ts" />
/// <reference path="../interface/IChartData.ts" />
module griffin{
    	export class BaseChart{	
		constructor(public containerId : String){
		}
		public render(chartData : IChartData){
			
			console.log('rendering chart');
		}
		
		public setOptions(chartOptions : IChartOptions){
			console.log(chartOptions);	
		}
	}
}