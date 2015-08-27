module griffin{
	export interface IChartData{
		 //value axis
		 series: [{
                    name: string,
					value:string,
                    data: number[],
					labels?:string[]
		}],
		//category axis
		categories:[{
			name:string,
			value:string,
			label?:string
		}],
		//measure can be used in case of multi-dimensional chart
		//with one measure and dimension
		measure?:{
			name:string,
			value:string
		}
	}
}