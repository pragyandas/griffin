module griffin.axis{
	interface IAxisData{

	}
	export class CustomAxis{
		public axisData:IAxisData
		public axisOptions:IAxisOptions={
			//default options
		};
		constructor(axisOptions: IAxisOptions, axisProperties: IAxisProperties, public axisTheme?: IThemeDetails) {
		}
		public draw(svg:d3.Selection<any>,axisData:any){
			this.axisData=axisData;
		}
	}
}
