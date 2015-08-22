module griffin{
	enum rotation{
		auto,vertical=90,horizontal=0,inclined=45
	}
    export interface IChartOptions{
			 	title?: {
                    text:string
                },
                legend?: {
                    visible:boolean
                },
                valueAxis?: {
                    line?: {
                        visible: boolean
                    },
                    minorGridLines?: {
                        visible: boolean
                    },
                    labels?: {
                        rotation:rotation
                    },
					ticks?:number,
					axisTitle?:string,
					tooltip?:boolean
                },
                categoryAxis?: {
                    majorGridLines?: {
                        visible: boolean
                    },
					tooltip?:boolean
                },
                tooltip?: {
                    visible: boolean
				}
	}
}