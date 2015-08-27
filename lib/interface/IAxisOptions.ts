module griffin {
	export enum axisType {
		linear,
		percentage,
		time,
		ordinal,
		custom
	}
	export enum direction {
		left,
		right,
		bottom,
		top
	}
	export enum rotation {
		auto, vertical = 90, horizontal = 0, inclined = 45
	}
	export interface IAxisOptions {
		axisType?: axisType,
		direction?: direction,
		orient?: direction,
		ticks?: number,
		tickSize?: number,
		scale?: any,
		fontSize?: number,
		fontFamily?: string,
		title?: string,
		showGridlines?: boolean,
		tickFormat?: any,
		position?: { x: number, y: number },
		clamp: boolean,
		axisColor: string,
		labelRotate: rotation,
		pathVisible: boolean,
		aec: number,//axis-extrapolation-coefficient
		tickColor: string,
		_max: number,
		_min: number
	}
}