module griffin{
	export class Utility{
		public static chartCofiguration = {};
		public static setMargin(c:any,cType:chartType){
			//write a switch case for chartTypes
			switch (cType){
				case (chartType.column): {
					this.setColumnChartMargin(<chart.Column>c);
				}
			}
		}

		private static setColumnChartMargin(c:chart.Column) {
			var margin=c.margin;

			//For value axis
			c.axisProperties.valueAxesProperties.forEach((valueAxisProperty)=>{
				switch(valueAxisProperty.direction){
					case(Direction.left):
						margin.left+=30;
						break;
					case(Direction.right):
						margin.right+=30;
						break;
				}
			})

			//For category axis
			margin.bottom+=30;

			//Set margin for legend depeneding on legend direction
		}


		// private static ordinalAxisLabelRotation(categories:chart.ICategory[]){
		// 	categories.forEach((category)=>{
		// 		var label=category.label || category.name || category.value;

		// 		//draw text nodes and calculate the width
		// 	})
		// 	//get cumulative text node width and compare to width
		// }
	}
}
