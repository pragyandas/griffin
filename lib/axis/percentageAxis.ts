module griffin.axis {
	interface IAxisData {

	}
	export class PercentageAxis {
		public axisData: IAxisData
		public axisOptions: IAxisOptions = {
			//default options
		};
		constructor(axisProperties: IAxisProperties, public axisTheme?: IThemeDetails) {
		}
		public setOptions(axisOptions: IAxisOptions){
			//setOptions
		}
		public draw(svg: d3.Selection<any>, axisData: any) {
			this.axisData = axisData;
		}
	}
}
