module griffin {
    //Add all the options to the themes with default values for each theme
    //Most of the options can be same
    export enum chartType {
        column,
        bar,
        area,
        line,
        pie,
        donut,
        barTable
    }
    export interface ILegend {
        visible: boolean,
        legendTheme?: ILegendOptions
    }

    export enum AxisType {
        linear,
        percentage,
        log,
        time,
        date,
        ordinal,
        custom
    }
    export enum Perspective {
        vertical,
        horizontal
    }

    export enum Direction {
        top,
        bottom,
        left,
        right
    }

    export interface IPosition {
        x: number,
        y: number
    }

    export interface IAxisProperties {
        perspective: Perspective,
        direction: Direction,
        orient: Direction,
        position: IPosition
    }

    export interface IAxisOptions {
        axisType?: AxisType,
        ticks?: number,
        scale?: any,
        fontSize?: number,
        fontFamily?: string,
        title?: {
            visible: boolean,
            text?: string
        },
        showGridlines?: boolean,
        innerPadding?: number,
        outerPadding?: number,
        tickFormat?: any,
        clamp?: boolean,
        axisColor?: string,
        labelRotate?: string,//if auto then
        pathVisible?: boolean,
        aec?: number,//axis-extrapolation-coefficient
        tickColor?: string,
        _max?: number,
        _min?: number
    }

    export interface IChartMargin {
        top: number,
        bottom: number,
        left: number,
        right: number
    }
    export enum Stacked {
        true,
        false,
        relative
    }
    export interface ITransition {
        value?: string,
        duration?: number,
        delay?: number
    }
    export interface IChartOptions {
        theme?: IThemeDetails,
        valueAxesOptions?: IAxisOptions[],
        categoryAxisOptions?: IAxisOptions,
        tooltip?: boolean,
        legend?: ILegend,
        isStacked?: Stacked,
        transition: ITransition | boolean
    }
    export interface ISeries {
        name: string,
        value: string,
        data: number[],
        labels?: string[],
        axisId: number,
        trendline: boolean
    }
    export interface ICategory {
        name: string,
        value: string,
        label?: string
    }
    export interface IMetadata {
        dimensions?: [{
            name?: string,
            value?: string
        }],
        measures?: [{
            name?: string,
            value?: string
        }]
    }
    export interface IChartData {
        //data for value axis
        series: ISeries[],
        //data for category axis
        categories: ICategory[],
        metadata?: IMetadata
    }
}