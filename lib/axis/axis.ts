module griffin.axis{
	export enum AxisType {
		linear,
		percentage,
		time,
		date,
		ordinal,
		custom
	}
	export enum Direction{
		vertical,
		horizontal
	}
	export interface IAxisOptions {
		axisType?: AxisType,
		direction?:Direction,
		orient?: string,
		ticks?: number,
		scale?: any,
		fontSize?: number,
		fontFamily?: string,
		title?: string,
		showGridlines?: boolean,
		innerPadding?:number,
		outerPadding?:number,
		tickFormat?: any,
		position?: { x: number, y: number },
		clamp?: boolean,
		axisColor?: string,
		labelRotate?:string,//if auto then
		pathVisible?: boolean,
		aec?: number,//axis-extrapolation-coefficient
		tickColor?: string,
		_max?: number,
		_min?: number
	}
	export class Axis{
		public static getAxis(axisType:AxisType){
			switch (axisType) {
			case AxisType.ordinal:
				return new ordinalAxis();		
				break;
			case AxisType.linear:
				return new linearAxis();
				break;
			case AxisType.percentage:
				return new percentageAxis();
				break;
			case AxisType.time:
				return new timeAxis();
				break;
			case AxisType.date:
				return new dateAxis();
				break;
			default:
				return new customAxis();
				break;
			}
		}
	}
}