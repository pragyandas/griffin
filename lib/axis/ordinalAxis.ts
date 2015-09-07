module griffin.axis{
	interface IAxisData{
		
	}
	export class ordinalAxis{
		//create IAxisData but do not export
		public axisData:IAxisData
		public axisOptions:IAxisOptions={
			//default options
		};
		constructor(){
		}
		public setAxisOptions(axisOptions:IAxisOptions){
			//Override the default values
		}
		public draw(svg:d3.Selection<any>,axisData:any){
			this.axisData=axisData;
		}
	}
}