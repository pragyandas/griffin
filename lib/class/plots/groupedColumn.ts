module griffin{
	export class GroupedColumn extends BaseChart{
		constructor(containerId:string,theme?:IThemeDetails){
			super(containerId,theme);
		}
		public render(chartData : IChartData){
			super.render(chartData);
			
			//axis 
			//legend
			
		}
		
		public setOptions(chartOptions : IChartOptions){
			super.setOptions(chartOptions);	
		}
	}
}