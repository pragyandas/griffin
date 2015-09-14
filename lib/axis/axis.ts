module griffin.axis {
	export enum AxisType {
		linear,
		percentage,
		log,
		time,
		date,
		ordinal,
		custom
	}
	export enum Direction {
		vertical,
		horizontal
	}
	export interface IAxisOptions {
		axisType?: AxisType,
		direction?: Direction,
		orient?: string,
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
		position?: { x: number, y: number },
		clamp?: boolean,
		axisColor?: string,
		labelRotate?: string,//if auto then
		pathVisible?: boolean,
		aec?: number,//axis-extrapolation-coefficient
		tickColor?: string,
		_max?: number,
		_min?: number
	}
	export class AxisFactory {
		public static getAxis(axisOptions: IAxisOptions, axisTheme: IThemeDetails = theme.DEFAULT) {
			switch (axisOptions.axisType) {
				case AxisType.ordinal:
					return new ordinalAxis(axisOptions, axisTheme);
					break;
				case AxisType.linear:
					return new linearAxis(axisOptions, axisTheme);
					break;
				// case AxisType.percentage:
				// 	return new percentageAxis(axisOptions,axisTheme);
				// 	break;
				// case AxisType.log:
				// 	return new logAxis(axisOptions,axisTheme);
				// 	break;
				// case AxisType.time:
				// 	return new timeAxis(axisOptions,axisTheme);
				// 	break;
				// case AxisType.date:
				// 	return new dateAxis(axisOptions,axisTheme);
				// 	break;
				// default:
				// 	return new customAxis(axisOptions,axisTheme);
				// 	break;	
			}
		}
	}
}