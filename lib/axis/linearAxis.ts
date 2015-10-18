module griffin.axis{
	interface IAxisData{
		
	}
	export class LinearAxis{
		//create IAxisData but do not export
		public axisData: IAxisData;
		private axisProperties: IAxisProperties = {
			perspective: Perspective.horizontal,
			direction: Direction.bottom,
			orient: Direction.bottom,
			position: { x: 0, y: 0 }
		};
		public axisOptions:IAxisOptions={
			ticks:5,
			fontSize:12,//theme
			fontFamily:'sans-serif',//theme
			title:{
				visible:true,
				text:""
			},
			showGridlines:true,//theme
			tickFormat:'',//write format function here and add the data type
			clamp:true,//true
			axisColor:'#000',//theme
			pathVisible:true,//theme
			aec:0.1,
			tickColor:'#000',//theme
		};
		constructor(axisOptions:IAxisOptions,axisProperties:IAxisProperties,public axisTheme: IThemeDetails){
			if (typeof axisProperties.perspective !== 'undefined' && axisProperties.perspective !== null)
				this.axisProperties.perspective = axisProperties.perspective;
			if (typeof axisProperties.direction !== 'undefined' && axisProperties.direction !== null)
				this.axisProperties.direction = axisProperties.direction;
			if (typeof axisProperties.orient !== 'undefined' && axisProperties.orient !== null)
				this.axisProperties.orient = axisProperties.orient;
			if (typeof axisProperties.position !== 'undefined' && axisProperties.position !== null)
				this.axisProperties.position = axisProperties.position;
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