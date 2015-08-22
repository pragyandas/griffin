module griffin{
	export interface IChartData{
		 series: [{
                    name: string,
                    data: number[],
					labels?:string[]
		}],
		categories:string[]
	}
}