module griffin.axis{
	interface IAxisData{
		
	}
	export class linearAxis{
		//create IAxisData but do not export
		public axisData: IAxisData;
		public axisOptions:IAxisOptions={
			direction:Direction.vertical,
			orient:'left',
			ticks:5,
			fontSize:12,//theme
			fontFamily:'sans-serif',//theme
			title:{
				visible:true,
				text:""
			},
			showGridlines:true,//theme
			tickFormat:'',//write format function here and add the data type
			position:{
				x:0,
				y:0
			},
			clamp:true,//true
			axisColor:'#000',//theme
			pathVisible:true,//theme
			aec:0.1,
			tickColor:'#000',//theme
		};
		constructor(axisOptions:IAxisOptions,public axisTheme: IThemeDetails){
			if (typeof axisOptions.direction !== 'undefined' && axisOptions.direction !== null)
				this.axisOptions.direction = axisOptions.direction;
			if (typeof axisOptions.orient !== 'undefined' && axisOptions.orient !== null)
				this.axisOptions.orient = axisOptions.orient;
			if (typeof axisOptions.ticks !== 'undefined' && axisOptions.ticks !== null)
				this.axisOptions.ticks = axisOptions.ticks;
			if (typeof axisOptions.fontSize !== 'undefined' && axisOptions.fontSize !== null)
				this.axisOptions.fontSize = axisOptions.fontSize;
			if (typeof axisOptions.fontFamily !== 'undefined' && axisOptions.fontFamily !== null)
				this.axisOptions.fontFamily = axisOptions.fontFamily;
			if (typeof axisOptions.title !== 'undefined' && axisOptions.title !== null)
				this.axisOptions.title = axisOptions.title;
			if (typeof axisOptions.showGridlines !== 'undefined' && axisOptions.showGridlines !== null)
				this.axisOptions.showGridlines = axisOptions.showGridlines;
			if (typeof axisOptions.tickFormat !== 'undefined' && axisOptions.tickFormat !== null)
				this.axisOptions.tickFormat = axisOptions.tickFormat;
			if (typeof axisOptions.position !== 'undefined' && axisOptions.position !== null)
				this.axisOptions.position = axisOptions.position;
			if (typeof axisOptions.clamp !== 'undefined' && axisOptions.clamp !== null)
				this.axisOptions.clamp = axisOptions.clamp;
			if (typeof axisOptions.axisColor !== 'undefined' && axisOptions.axisColor !== null)
				this.axisOptions.axisColor = axisOptions.axisColor;
			if (typeof axisOptions.pathVisible !== 'undefined' && axisOptions.pathVisible !== null)
				this.axisOptions.pathVisible = axisOptions.pathVisible;
			if (typeof axisOptions.aec !== 'undefined' && axisOptions.aec !== null)
				this.axisOptions.aec = axisOptions.aec;
			if (typeof axisOptions.tickColor !== 'undefined' && axisOptions.tickColor !== null)
				this.axisOptions.tickColor = axisOptions.tickColor;
		}
		public draw(svg:d3.Selection<any>,axisData:any){
			this.axisData=axisData;
		}
	}
}