module griffin.axis {

	export class AxisFactory {
		public static getAxis(axisOptions: IAxisOptions, axisProperties: IAxisProperties, axisTheme: IThemeDetails = theme.DEFAULT):any {
			switch (axisOptions.axisType) {
				case AxisType.ordinal:
					return new OrdinalAxis(axisOptions, axisProperties, axisTheme);
					break;
				case AxisType.linear:
					return new LinearAxis(axisOptions, axisProperties, axisTheme);
					break;
				case AxisType.percentage:
					return new PercentageAxis(axisOptions, axisProperties, axisTheme);
					break;
				case AxisType.log:
					return new LogAxis(axisOptions, axisProperties,axisTheme);
					break;
				case AxisType.time:
					return new TimeAxis(axisOptions, axisProperties,axisTheme);
					break;
				case AxisType.date:
					return new DateAxis(axisOptions, axisProperties,axisTheme);
					break;
				default:
					return new CustomAxis(axisOptions,axisProperties,axisTheme);
					break;	
			}
		}
	}
}