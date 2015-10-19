module griffin.axis {

	export class AxisFactory {
		public static getAxis(axisType:AxisType,axisProperties: IAxisProperties, axisTheme: IThemeDetails = theme.DEFAULT):any {
			switch (axisType) {
				case AxisType.ordinal:
					return new OrdinalAxis(axisProperties, axisTheme);
					break;
				case AxisType.linear:
					return new LinearAxis(axisProperties, axisTheme);
					break;
				case AxisType.percentage:
					return new PercentageAxis(axisProperties, axisTheme);
					break;
				case AxisType.log:
					return new LogAxis(axisProperties,axisTheme);
					break;
				case AxisType.time:
					return new TimeAxis(axisProperties,axisTheme);
					break;
				case AxisType.date:
					return new DateAxis(axisProperties,axisTheme);
					break;
				default:
					return new CustomAxis(axisProperties,axisTheme);
					break;
			}
		}
	}
}
