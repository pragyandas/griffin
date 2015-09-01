module griffin{
	export class axisBase{
		constructor(){
		}
		public axisOptions:IAxisOptions;
		public setOptions(axisOptions:IAxisOptions){
			if (typeof axisOptions.axisColor !== 'undefined' && axisOptions.axisColor !== null)
				this.axisOptions.axisColor=axisOptions.axisColor;
		}
	}
}