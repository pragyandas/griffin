module griffin.axis {
	
	export class AxisFactory {
		public static getAxis(axisOptions: IAxisOptions, axisTheme: IThemeDetails = theme.DEFAULT) {
			switch (axisOptions.axisType) {
				case AxisType.ordinal:
					return new OrdinalAxis(axisOptions, axisTheme);
					break;
				case AxisType.linear:
					return new LinearAxis(axisOptions, axisTheme);
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