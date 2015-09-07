var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        (function (AxisType) {
            AxisType[AxisType["linear"] = 0] = "linear";
            AxisType[AxisType["percentage"] = 1] = "percentage";
            AxisType[AxisType["time"] = 2] = "time";
            AxisType[AxisType["date"] = 3] = "date";
            AxisType[AxisType["ordinal"] = 4] = "ordinal";
            AxisType[AxisType["custom"] = 5] = "custom";
        })(axis.AxisType || (axis.AxisType = {}));
        var AxisType = axis.AxisType;
        (function (Direction) {
            Direction[Direction["vertical"] = 0] = "vertical";
            Direction[Direction["horizontal"] = 1] = "horizontal";
        })(axis.Direction || (axis.Direction = {}));
        var Direction = axis.Direction;
        var Axis = (function () {
            function Axis() {
            }
            Axis.getAxis = function (axisType) {
                switch (axisType) {
                    case AxisType.ordinal:
                        return new axis.ordinalAxis();
                        break;
                    case AxisType.linear:
                        return new axis.linearAxis();
                        break;
                    case AxisType.percentage:
                        return new axis.percentageAxis();
                        break;
                    case AxisType.time:
                        return new axis.timeAxis();
                        break;
                    case AxisType.date:
                        return new axis.dateAxis();
                        break;
                    default:
                        return new axis.customAxis();
                        break;
                }
            };
            return Axis;
        })();
        axis.Axis = Axis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var customAxis = (function () {
            function customAxis() {
                this.axisOptions = {};
            }
            customAxis.prototype.setAxisOptions = function (axisOptions) {
            };
            customAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return customAxis;
        })();
        axis.customAxis = customAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var dateAxis = (function () {
            function dateAxis() {
                this.axisOptions = {};
            }
            dateAxis.prototype.setAxisOptions = function (axisOptions) {
            };
            dateAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return dateAxis;
        })();
        axis.dateAxis = dateAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var linearAxis = (function () {
            function linearAxis() {
                this.axisOptions = {};
            }
            linearAxis.prototype.setAxisOptions = function (axisOptions) {
            };
            linearAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return linearAxis;
        })();
        axis.linearAxis = linearAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var logAxis = (function () {
            function logAxis() {
                this.axisOptions = {};
            }
            logAxis.prototype.setAxisOptions = function (axisOptions) {
            };
            logAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return logAxis;
        })();
        axis.logAxis = logAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var ordinalAxis = (function () {
            function ordinalAxis() {
                this.axisOptions = {};
            }
            ordinalAxis.prototype.setAxisOptions = function (axisOptions) {
            };
            ordinalAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return ordinalAxis;
        })();
        axis.ordinalAxis = ordinalAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var percentageAxis = (function () {
            function percentageAxis() {
                this.axisOptions = {};
            }
            percentageAxis.prototype.setAxisOptions = function (axisOptions) {
            };
            percentageAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return percentageAxis;
        })();
        axis.percentageAxis = percentageAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var timeAxis = (function () {
            function timeAxis() {
                this.axisOptions = {};
            }
            timeAxis.prototype.setAxisOptions = function (axisOptions) {
            };
            timeAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return timeAxis;
        })();
        axis.timeAxis = timeAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var chart;
    (function (chart) {
        (function (Stacked) {
            Stacked[Stacked["true"] = 0] = "true";
            Stacked[Stacked["false"] = 1] = "false";
            Stacked[Stacked["relative"] = 2] = "relative";
        })(chart.Stacked || (chart.Stacked = {}));
        var Stacked = chart.Stacked;
    })(chart = griffin.chart || (griffin.chart = {}));
})(griffin || (griffin = {}));
var axis = griffin.axis;
var griffin;
(function (griffin) {
    var chart;
    (function (chart) {
        var BaseChart = (function () {
            function BaseChart(containerId) {
                this.containerId = containerId;
                this.margin = {
                    top: 15,
                    bottom: 20,
                    right: 10,
                    left: 30
                };
                this.tooltip = true;
                this.theme = griffin.theme.DEFAULT;
                this.chartWidth = document.getElementById(containerId).offsetWidth;
                this.chartHeight = document.getElementById(containerId).offsetHeight;
            }
            BaseChart.prototype.render = function (chartData) {
                this.color = this.theme.palette;
                this.width = this.chartWidth - this.margin.left - this.margin.right;
                this.height = this.chartHeight - this.margin.top - this.margin.bottom;
                this.svg = d3.select("#" + this.containerId).append("svg")
                    .attr("width", this.width + this.margin.left + this.margin.right)
                    .attr("height", this.height + this.margin.top + this.margin.bottom)
                    .style('background-color', this.theme.backgroundColor)
                    .append("g")
                    .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
                    .attr("id", this.containerId + "_svg");
            };
            BaseChart.prototype.setOptions = function (chartOptions) {
                if (typeof chartOptions.theme !== 'undefined' && chartOptions.theme !== null)
                    this.theme = chartOptions.theme;
                if (typeof chartOptions.tooltip !== 'undefined' && chartOptions.tooltip !== null)
                    this.tooltip = chartOptions.tooltip;
            };
            return BaseChart;
        })();
        chart.BaseChart = BaseChart;
    })(chart = griffin.chart || (griffin.chart = {}));
})(griffin || (griffin = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var griffin;
(function (griffin) {
    var chart;
    (function (chart) {
        var Column = (function (_super) {
            __extends(Column, _super);
            function Column(containerId) {
                _super.call(this, containerId);
                this.columnOptions = {
                    isStacked: chart.Stacked.false
                };
                this.categoryAxisOptions = {};
                this.valueAxisOptions = {};
            }
            Column.prototype.render = function (data) {
                var margin = this.margin;
                this.setMarginForAxis(data, margin);
                this.legend = this.setMarginForLegend(data, margin);
                _super.prototype.render.call(this, data);
                var prepData = this.dataPreparation(data);
                switch (this.columnOptions.isStacked) {
                    case (chart.Stacked.false):
                        this.renderGroupedColumn(data);
                        break;
                    case (chart.Stacked.true):
                        this.renderStackedColumn(data);
                        break;
                    case (chart.Stacked.relative):
                        this.renderNormalizedStackedColumn(data);
                        break;
                }
            };
            Column.prototype.renderGroupedColumn = function (data) {
                var margin = this.margin;
                var valueAxisCount = d3.max(data.series.map(function (d) { return d.axisId || 0; })) + 1;
                var categoryOptions = this.chartOptions.categoryAxisOptions;
                this.categoryAxis = griffin.axis.Axis.getAxis(categoryOptions.axisType || griffin.axis.AxisType.ordinal);
                categoryOptions.position = categoryOptions.position && categoryOptions.position !== null ? categoryOptions.position : { x: 0, y: this.height };
                categoryOptions.direction = categoryOptions.direction && categoryOptions.direction !== null ? categoryOptions.direction : griffin.axis.Direction.horizontal;
                this.categoryAxis.setAxisOptions(this.chartOptions.categoryAxisOptions);
                this.categoryAxis.draw(this.svg, data.categories);
                for (var i = 0; i < valueAxisCount; i++) {
                    if (i === 0) {
                        var axisData = data.series.filter(function (d) {
                            return typeof d.axisId === 'undefined' || d.axisId === i;
                        }), seriesAxisOption = this.chartOptions.valueAxesOptions[i];
                        seriesAxisOption.position = seriesAxisOption.position && seriesAxisOption.position !== null ? seriesAxisOption.position : { x: 0, y: 0 };
                        seriesAxisOption.direction = seriesAxisOption.direction && seriesAxisOption.direction !== null ? seriesAxisOption.direction : griffin.axis.Direction.vertical;
                        seriesAxisOption.orient = seriesAxisOption.orient && seriesAxisOption.orient !== null ? seriesAxisOption.orient : 'left';
                        var seriesAxis = griffin.axis.Axis.getAxis(seriesAxisOption.axisType || griffin.axis.AxisType.linear);
                        seriesAxis.setAxisOptions(seriesAxisOption);
                        seriesAxis.draw(this.svg, axisData);
                        this.seriesAxes.push(seriesAxis);
                    }
                    else {
                        var axisData = data.series.filter(function (d) {
                            return d.axisId === i;
                        }), seriesAxisOption = this.chartOptions.valueAxesOptions[i];
                        seriesAxisOption.position = seriesAxisOption.position && seriesAxisOption.position !== null ? seriesAxisOption.position : (i % 2 === 0 ? { x: (0 - margin.left + i * 30), y: 0 } : { x: (this.width + ((i - 1) * 20)), y: 0 });
                        seriesAxisOption.orient = seriesAxisOption.orient && seriesAxisOption.orient !== null ? seriesAxisOption.orient : (i % 2 === 0 ? 'left' : 'right');
                        seriesAxisOption.direction = seriesAxisOption.direction && seriesAxisOption.direction !== null ? seriesAxisOption.direction : griffin.axis.Direction.vertical;
                        var seriesAxis = griffin.axis.Axis.getAxis(seriesAxisOption.axisType || griffin.axis.AxisType.linear);
                        seriesAxis.setAxisOptions(seriesAxisOption);
                        seriesAxis.draw(this.svg, axisData);
                        this.seriesAxes.push(seriesAxis);
                    }
                }
            };
            Column.prototype.renderStackedColumn = function (data) {
            };
            Column.prototype.renderNormalizedStackedColumn = function (data) {
            };
            Column.prototype.setMarginForAxis = function (data, margin) {
                var _this = this;
                var valueAxisCount = 1;
                data.series.forEach(function (d, i) {
                    if (d.axisId && d.axisId > valueAxisCount) {
                        valueAxisCount++;
                        valueAxisCount % 2 === 0 ? _this.margin.right += 40 : _this.margin.left += 40;
                    }
                });
            };
            Column.prototype.setMarginForLegend = function (data, margin) {
            };
            Column.prototype.drawTrendlines = function (data) {
            };
            Column.prototype.dataPreparation = function (data) {
                return { barData: data.series.filter(function (d) {
                        return d.trendline !== true;
                    }), trendlineData: data.series.filter(function (d) {
                        return d.trendline === true;
                    }) };
            };
            Column.prototype.setOptions = function (chartOptions) {
                _super.prototype.setOptions.call(this, chartOptions);
                if (typeof chartOptions.isStacked !== 'undefined' && chartOptions.isStacked !== null)
                    this.columnOptions.isStacked = chartOptions.isStacked;
            };
            return Column;
        })(chart.BaseChart);
        chart.Column = Column;
    })(chart = griffin.chart || (griffin.chart = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var theme = (function () {
        function theme() {
        }
        theme.BLACK = {
            palette: ['#03A9F4', '#E91E63', '#ff9800', '#4CAF50', '#D4E157', '#FFA726', '#9C27B0', '#DD4477', '#66AA00', '#B82E2E'],
            axisColor: '#fff',
            backgroundColor: '#000',
            axisFont: 'sans-serif',
            axisFontSize: 12,
            tooltipTheme: tooltipTheme.CANDY
        };
        theme.DEFAULT = {
            palette: ['#03A9F4', '#E91E63', '#ff9800', '#4CAF50', '#D4E157', '#FFA726', '#9C27B0', '#DD4477', '#66AA00', '#B82E2E'],
            axisColor: '#000',
            backgroundColor: '#fff',
            axisFont: 'sans-serif',
            axisFontSize: 12,
            tooltipTheme: tooltipTheme.BASIC
        };
        return theme;
    })();
    griffin.theme = theme;
    var tooltipTheme = (function () {
        function tooltipTheme() {
        }
        tooltipTheme.BASIC = {
            roundedEdge: false,
            shadow: false,
            tooltipFont: 'sans-serif',
            tooltipFontSize: 12
        };
        tooltipTheme.CANDY = {
            roundedEdge: true,
            shadow: true,
            tooltipFont: 'sans-serif',
            tooltipFontSize: 12
        };
        return tooltipTheme;
    })();
    griffin.tooltipTheme = tooltipTheme;
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var utility = (function () {
        function utility() {
        }
        return utility;
    })();
})(griffin || (griffin = {}));
//# sourceMappingURL=griffin.js.map