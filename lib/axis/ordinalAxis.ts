module griffin.axis{
	interface IAxisData{
		
	}
	export class ordinalAxis{
		//create IAxisData but do not export
		public axisData:IAxisData
		public axisOptions:IAxisOptions;
		constructor(){
		}
		public setAxisOptions(axisOptions:IAxisOptions){
			this.axisOptions.direction = axisOptions.direction && axisOptions.direction !== null ? axisOptions.direction:this.axisOptions.direction;
			this.axisOptions.orient = axisOptions.orient && axisOptions.orient !== null ? axisOptions.orient : 'left';
			this.axisOptions.fontSize = axisOptions.fontSize && axisOptions.fontSize !== null ? axisOptions.fontSize:12;//theme
			this.axisOptions.fontFamily = axisOptions.fontFamily && axisOptions.fontFamily !== null ? axisOptions.fontFamily:'sans-serif';//theme
			this.axisOptions.showGridlines = axisOptions.showGridlines && axisOptions.showGridlines !== null ? axisOptions.showGridlines:true;
			this.axisOptions.innerPadding = axisOptions.innerPadding && axisOptions.innerPadding !== null ? axisOptions.innerPadding:0.1;
			this.axisOptions.outerPadding = axisOptions.outerPadding && axisOptions.outerPadding !== null ? axisOptions.outerPadding:0.2;
			this.axisOptions.clamp = axisOptions.clamp && axisOptions.clamp !== null ? axisOptions.clamp:true;//theme
			this.axisOptions.axisColor = axisOptions.axisColor && axisOptions.axisColor !== null ? axisOptions.axisColor:'#000';//theme
			this.axisOptions.labelRotate = axisOptions.labelRotate && axisOptions.labelRotate !== null ? axisOptions.labelRotate:'auto';
			this.axisOptions.pathVisible = axisOptions.pathVisible && axisOptions.pathVisible !== null ? axisOptions.pathVisible:true;//theme
			this.axisOptions.tickColor = axisOptions.tickColor && axisOptions.tickColor !== null ? axisOptions.tickColor:'#000';//theme

		}
		public draw(svg:d3.Selection<any>,axisData:any){
			//draw here
		}
	}
}