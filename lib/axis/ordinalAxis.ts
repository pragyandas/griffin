module griffin.axis{
	interface IAxisData{
		
	}
	export class ordinalAxis{
		//create IAxisData but do not export
		public axisData: IAxisData;
		public axisOptions:IAxisOptions={
			direction:Direction.horizontal,
			orient:'left',
			fontSize:12,//theme
			fontFamily:'sans-serif',//theme
			title:{ visible: true, text: "" },
			showGridlines: true,
			innerPadding:0.1,
			outerPadding:0.2,
			clamp:true,//theme
			axisColor:'#000',//theme
			labelRotate:'auto',
			pathVisible:true,//theme
			tickColor:'#000'//theme
		};
		constructor(public axisTheme: IThemeDetails = theme.DEFAULT) {
		}
		public setAxisOptions(axisOptions:IAxisOptions){
			if (typeof axisOptions.direction !== 'undefined' && axisOptions.direction !== null)
				this.axisOptions.direction = axisOptions.direction;
			if (typeof axisOptions.orient !== 'undefined' && axisOptions.orient !== null)
				this.axisOptions.orient = axisOptions.orient;
			if (typeof axisOptions.fontSize !== 'undefined' && axisOptions.fontSize !== null)
				this.axisOptions.fontSize = axisOptions.fontSize;
			if (typeof axisOptions.fontFamily !== 'undefined' && axisOptions.fontFamily !== null)
				this.axisOptions.fontFamily = axisOptions.fontFamily;
			if (typeof axisOptions.title !== 'undefined' && axisOptions.title !== null)
				this.axisOptions.title = axisOptions.title;
			if (typeof axisOptions.showGridlines !== 'undefined' && axisOptions.showGridlines !== null)
				this.axisOptions.showGridlines = axisOptions.showGridlines;
			if (typeof axisOptions.innerPadding !== 'undefined' && axisOptions.innerPadding !== null)
				this.axisOptions.innerPadding = axisOptions.innerPadding;
			if (typeof axisOptions.outerPadding !== 'undefined' && axisOptions.outerPadding !== null)
				this.axisOptions.outerPadding = axisOptions.outerPadding;
			if (typeof axisOptions.clamp !== 'undefined' && axisOptions.clamp !== null)
				this.axisOptions.clamp = axisOptions.clamp;
			if (typeof axisOptions.axisColor !== 'undefined' && axisOptions.axisColor !== null)
				this.axisOptions.axisColor = axisOptions.axisColor;
			if (typeof axisOptions.labelRotate !== 'undefined' && axisOptions.labelRotate !== null)
				this.axisOptions.labelRotate = axisOptions.labelRotate;
			if (typeof axisOptions.pathVisible !== 'undefined' && axisOptions.pathVisible !== null)
				this.axisOptions.pathVisible = axisOptions.pathVisible;
			if (typeof axisOptions.tickColor !== 'undefined' && axisOptions.tickColor !== null)
				this.axisOptions.tickColor = axisOptions.tickColor;
		}
		public draw(svg:d3.Selection<any>,axisData:any){
			//draw here
			//start with direction property
		}
	}
}