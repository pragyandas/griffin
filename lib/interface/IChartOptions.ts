module griffin {
    export interface IChartOptions {
        title?: {
            text: string
        },
        legend?: {
            visible: boolean,
            legendOptions?:ILegendOptions
        },
        seriesAxisOptions?: IAxisOptions,
        categoryAxisOptions?: IAxisOptions,
        tooltip?: {
            visible: boolean
        },
               
    }
}