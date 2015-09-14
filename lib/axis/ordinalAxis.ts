module griffin.axis{
	interface IAxisData{
		name:string,
		value:string
	}
	export class ordinalAxis{
		//create IAxisData but do not export
		public axisData: IAxisData;
		public scale:any;
		public axisOptions:IAxisOptions={
			direction:Direction.horizontal,
			orient:'bottom',
			fontSize:12,//theme
			fontFamily:'sans-serif',//theme
			title:{ visible: true, text: "" },
			showGridlines: true,//theme
			innerPadding:0.1,
			outerPadding:0.2,
			position:{
				x:0,
				y:0
			},
			clamp:true,//theme
			axisColor:'#000',//theme
			labelRotate:'auto',
			pathVisible:true,//theme
			tickColor:'#000'//theme
		};
		constructor(axisOptions:IAxisOptions,public axisTheme: IThemeDetails) {
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
			if (typeof axisOptions.position !== 'undefined' && axisOptions.position !== null)
				this.axisOptions.position = axisOptions.position;
		}
		public draw(svg:d3.Selection<any>,axisData:[IAxisData],axisId?:string){
			
			
			switch(this.axisOptions.direction){
				case (Direction.horizontal):
					var axisId = axisId || <string>svg.attr('id') + '_xAxis';
					let width = parseFloat(svg.attr('width'));
					this.scale = d3.scale.ordinal()
                        .domain(axisData.map((d)=>{return d.value}))
                        .rangeRoundBands([0,width],this.axisOptions.innerPadding,this.axisOptions.outerPadding);

                   	var xAxis = d3.svg.axis()
                   			  .scale(this.scale)
                   			  .orient(this.axisOptions.orient);

					var axis = svg.append('g')
							  .attr('class', 'x axis')
							  .attr('id', axisId)
							  .call(xAxis)
							  .attr("transform","translate(" + this.axisOptions.position.x + "," + this.axisOptions.position.y + ")");


					axis.selectAll('text')
						.text((d) => {
							return d.name;
						});



					break;
				case (Direction.vertical):
					break;
			}
		}
	}
}