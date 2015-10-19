var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var AxisFactory = (function () {
            function AxisFactory() {
            }
            AxisFactory.getAxis = function (axisOptions, axisProperties, axisTheme) {
                if (axisTheme === void 0) { axisTheme = griffin.theme.DEFAULT; }
                switch (axisOptions.axisType) {
                    case griffin.AxisType.ordinal:
                        return new axis.OrdinalAxis(axisOptions, axisProperties, axisTheme);
                        break;
                    case griffin.AxisType.linear:
                        return new axis.LinearAxis(axisOptions, axisProperties, axisTheme);
                        break;
                    case griffin.AxisType.percentage:
                        return new axis.PercentageAxis(axisOptions, axisProperties, axisTheme);
                        break;
                    case griffin.AxisType.log:
                        return new axis.LogAxis(axisOptions, axisProperties, axisTheme);
                        break;
                    case griffin.AxisType.time:
                        return new axis.TimeAxis(axisOptions, axisProperties, axisTheme);
                        break;
                    case griffin.AxisType.date:
                        return new axis.DateAxis(axisOptions, axisProperties, axisTheme);
                        break;
                    default:
                        return new axis.CustomAxis(axisOptions, axisProperties, axisTheme);
                        break;
                }
            };
            return AxisFactory;
        })();
        axis.AxisFactory = AxisFactory;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var CustomAxis = (function () {
            function CustomAxis(axisOptions, axisProperties, axisTheme) {
                this.axisTheme = axisTheme;
                this.axisOptions = {};
            }
            CustomAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return CustomAxis;
        })();
        axis.CustomAxis = CustomAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var DateAxis = (function () {
            function DateAxis(axisOptions, axisProperties, axisTheme) {
                this.axisTheme = axisTheme;
                this.axisOptions = {};
            }
            DateAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return DateAxis;
        })();
        axis.DateAxis = DateAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var LinearAxis = (function () {
            function LinearAxis(axisOptions, axisProperties, axisTheme) {
                this.axisTheme = axisTheme;
                this.axisProperties = {
                    perspective: griffin.Perspective.horizontal,
                    direction: griffin.Direction.bottom,
                    orient: griffin.Direction.bottom,
                    position: { x: 0, y: 0 }
                };
                this.axisOptions = {
                    ticks: 5,
                    fontSize: 12,
                    fontFamily: 'sans-serif',
                    title: {
                        visible: true,
                        text: ""
                    },
                    showGridlines: true,
                    tickFormat: '',
                    clamp: true,
                    axisColor: '#000',
                    pathVisible: true,
                    aec: 0.1,
                    tickColor: '#000',
                };
                if (typeof axisProperties.perspective !== 'undefined' && axisProperties.perspective !== null)
                    this.axisProperties.perspective = axisProperties.perspective;
                if (typeof axisProperties.direction !== 'undefined' && axisProperties.direction !== null)
                    this.axisProperties.direction = axisProperties.direction;
                if (typeof axisProperties.orient !== 'undefined' && axisProperties.orient !== null)
                    this.axisProperties.orient = axisProperties.orient;
                if (typeof axisProperties.position !== 'undefined' && axisProperties.position !== null)
                    this.axisProperties.position = axisProperties.position;
                if (typeof axisOptions.ticks !== 'undefined' && axisOptions.ticks !== null)
                    this.axisOptions.ticks = axisOptions.ticks;
                if (typeof axisOptions.fontSize !== 'undefined' && axisOptions.fontSize !== null)
                    this.axisOptions.fontSize = axisOptions.fontSize;
                if (typeof axisOptions.fontFamily !== 'undefined' && axisOptions.fontFamily !== null)
                    this.axisOptions.fontFamily = axisOptions.fontFamily;
                if (typeof axisOptions.title !== 'undefined' && axisOptions.title !== null)
                    this.axisOptions.title = axisOptions.title;
                if (typeof axisOptions.showGridlines !== 'undefined' && axisOptions.showGridlines !== null)
                    this.axisOptions.showGridlines = axisOptions.showGridlines;
                if (typeof axisOptions.tickFormat !== 'undefined' && axisOptions.tickFormat !== null)
                    this.axisOptions.tickFormat = axisOptions.tickFormat;
                if (typeof axisOptions.clamp !== 'undefined' && axisOptions.clamp !== null)
                    this.axisOptions.clamp = axisOptions.clamp;
                if (typeof axisOptions.axisColor !== 'undefined' && axisOptions.axisColor !== null)
                    this.axisOptions.axisColor = axisOptions.axisColor;
                if (typeof axisOptions.pathVisible !== 'undefined' && axisOptions.pathVisible !== null)
                    this.axisOptions.pathVisible = axisOptions.pathVisible;
                if (typeof axisOptions.aec !== 'undefined' && axisOptions.aec !== null)
                    this.axisOptions.aec = axisOptions.aec;
                if (typeof axisOptions.tickColor !== 'undefined' && axisOptions.tickColor !== null)
                    this.axisOptions.tickColor = axisOptions.tickColor;
            }
            LinearAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return LinearAxis;
        })();
        axis.LinearAxis = LinearAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var LogAxis = (function () {
            function LogAxis(axisOptions, axisProperties, axisTheme) {
                this.axisTheme = axisTheme;
                this.axisOptions = {};
            }
            LogAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return LogAxis;
        })();
        axis.LogAxis = LogAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis_1) {
        var OrdinalAxis = (function () {
            function OrdinalAxis(axisOptions, axisProperties, axisTheme) {
                this.axisTheme = axisTheme;
                this.axisProperties = {
                    perspective: griffin.Perspective.horizontal,
                    direction: griffin.Direction.bottom,
                    orient: griffin.Direction.bottom,
                    position: { x: 0, y: 0 }
                };
                this.axisOptions = {
                    fontSize: 12,
                    fontFamily: 'sans-serif',
                    title: { visible: true, text: "" },
                    showGridlines: true,
                    innerPadding: 0.1,
                    outerPadding: 0.2,
                    clamp: true,
                    axisColor: '#000',
                    labelRotate: 'auto',
                    pathVisible: true,
                    tickColor: '#000'
                };
                if (typeof axisProperties.perspective !== 'undefined' && axisProperties.perspective !== null)
                    this.axisProperties.perspective = axisProperties.perspective;
                if (typeof axisProperties.direction !== 'undefined' && axisProperties.direction !== null)
                    this.axisProperties.direction = axisProperties.direction;
                if (typeof axisProperties.orient !== 'undefined' && axisProperties.orient !== null)
                    this.axisProperties.orient = axisProperties.orient;
                if (typeof axisProperties.position !== 'undefined' && axisProperties.position !== null)
                    this.axisProperties.position = axisProperties.position;
                if (typeof axisOptions.fontSize !== 'undefined' && axisOptions.fontSize !== null)
                    this.axisOptions.fontSize = axisOptions.fontSize;
                if (typeof axisOptions.fontFamily !== 'undefined' && axisOptions.fontFamily !== null)
                    this.axisOptions.fontFamily = axisOptions.fontFamily;
                if (typeof axisOptions.title !== 'undefined' && axisOptions.title !== null)
                    this.axisOptions.title = axisOptions.title;
                if (typeof axisOptions.showGridlines !== 'undefined' && axisOptions.showGridlines !== null)
                    this.axisOptions.showGridlines = axisOptions.showGridlines;
                if (typeof axisOptions.innerPadding !== 'undefined' && axisOptions.innerPadding !== null)
                    this.axisOptions.innerPadding = axisOptions.innerPadding;
                if (typeof axisOptions.outerPadding !== 'undefined' && axisOptions.outerPadding !== null)
                    this.axisOptions.outerPadding = axisOptions.outerPadding;
                if (typeof axisOptions.clamp !== 'undefined' && axisOptions.clamp !== null)
                    this.axisOptions.clamp = axisOptions.clamp;
                if (typeof axisOptions.axisColor !== 'undefined' && axisOptions.axisColor !== null)
                    this.axisOptions.axisColor = axisOptions.axisColor;
                if (typeof axisOptions.labelRotate !== 'undefined' && axisOptions.labelRotate !== null)
                    this.axisOptions.labelRotate = axisOptions.labelRotate;
                if (typeof axisOptions.pathVisible !== 'undefined' && axisOptions.pathVisible !== null)
                    this.axisOptions.pathVisible = axisOptions.pathVisible;
                if (typeof axisOptions.tickColor !== 'undefined' && axisOptions.tickColor !== null)
                    this.axisOptions.tickColor = axisOptions.tickColor;
            }
            OrdinalAxis.prototype.draw = function (svg, axisData, axisId) {
                switch (this.axisProperties.perspective) {
                    case (griffin.Perspective.horizontal):
                        var axisId = axisId || svg.attr('id') + '_xAxis';
                        var width = parseFloat(svg.attr('width'));
                        this.scale = d3.scale.ordinal()
                            .domain(axisData.map(function (d) { return d.value; }))
                            .rangeRoundBands([0, width], this.axisOptions.innerPadding, this.axisOptions.outerPadding);
                        var xAxis = d3.svg.axis()
                            .scale(this.scale)
                            .orient(this.axisProperties.orient.toString());
                        var axis = svg.append('g')
                            .attr('class', 'x axis')
                            .attr('id', axisId)
                            .call(xAxis)
                            .attr("transform", "translate(" + this.axisProperties.position.x + "," + this.axisProperties.position.y + ")");
                        axis.selectAll('text')
                            .text(function (d) {
                            return d.name;
                        });
                        break;
                    case (griffin.Perspective.vertical):
                        break;
                }
            };
            return OrdinalAxis;
        })();
        axis_1.OrdinalAxis = OrdinalAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var PercentageAxis = (function () {
            function PercentageAxis(axisOptions, axisProperties, axisTheme) {
                this.axisTheme = axisTheme;
                this.axisOptions = {};
            }
            PercentageAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return PercentageAxis;
        })();
        axis.PercentageAxis = PercentageAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        var TimeAxis = (function () {
            function TimeAxis(axisOptions, axisProperties, axisTheme) {
                this.axisTheme = axisTheme;
                this.axisOptions = {};
            }
            TimeAxis.prototype.draw = function (svg, axisData) {
                this.axisData = axisData;
            };
            return TimeAxis;
        })();
        axis.TimeAxis = TimeAxis;
    })(axis = griffin.axis || (griffin.axis = {}));
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
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0
                };
                this.theme = griffin.theme.DEFAULT;
                this.chartWidth = document.getElementById(containerId).offsetWidth;
                this.chartHeight = document.getElementById(containerId).offsetHeight;
            }
            BaseChart.prototype.setOptions = function (chartOptions) {
                this.theme = chartOptions.theme || this.theme;
                this.tooltip = typeof chartOptions.tooltip !== 'undefined' ? chartOptions.tooltip : true;
            };
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
            return BaseChart;
        })();
        chart.BaseChart = BaseChart;
    })(chart = griffin.chart || (griffin.chart = {}));
})(griffin || (griffin = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
                    isStacked: griffin.Stacked.false,
                    transition: {
                        value: 'linear',
                        duration: 500,
                        delay: 200
                    },
                    barOptions: {
                        color: this.theme.palette,
                        stroke: '',
                        strokeWitdh: 0,
                        barRadius: 0
                    }
                };
            }
            Column.prototype.setOptions = function (chartOptions) {
                _super.prototype.setOptions.call(this, chartOptions);
                this.columnOptions.isStacked = chartOptions.isStacked || this.columnOptions.isStacked;
                if (typeof chartOptions.transition === 'boolean') {
                    this.columnOptions.transition = chartOptions.transition === false ? chartOptions.transition : this.columnOptions.transition;
                }
                else if (typeof chartOptions.transition === 'object') {
                    this.columnOptions.transition.value = chartOptions.transition.value || this.columnOptions.transition.value;
                    this.columnOptions.transition.duration = chartOptions.transition.duration || this.columnOptions.transition.duration;
                    this.columnOptions.transition.delay = chartOptions.transition.delay || this.columnOptions.transition.delay;
                }
                switch (this.columnOptions.isStacked) {
                    case (griffin.Stacked.false):
                        this.setGroupedColumnOptions(chartOptions);
                        break;
                    case (griffin.Stacked.true):
                        this.setStackedColumnOptions(chartOptions);
                        break;
                    case (griffin.Stacked.relative):
                        this.setNormalizedStackedColumnOptions(chartOptions);
                        break;
                }
            };
            Column.prototype.render = function (data) {
                this.chartData = data;
                griffin.Utility.setMargin(this, griffin.chartType.column);
                _super.prototype.render.call(this, this.chartData);
                var preparedData = this.dataPreparation(this.chartData);
                switch (this.columnOptions.isStacked) {
                    case (griffin.Stacked.false):
                        this.renderAxis(this.chartData);
                        this.renderGroupedColumn(preparedData);
                        break;
                    case (griffin.Stacked.true):
                        if (this.chartData.series.filter(function (d) {
                            return (typeof d.trendline === 'undefined' || d.trendline === false) && d.axisId > 1;
                        }).length > 0) {
                            console.error("multiple axis can only be used with trendline when 'isStacked=true'");
                            return;
                        }
                        this.renderAxis(this.chartData);
                        this.renderStackedColumn(preparedData);
                        break;
                    case (griffin.Stacked.relative):
                        if (this.chartData.series.filter(function (d) {
                            return (typeof d.trendline === 'undefined' || d.trendline === false) && d.axisId > 1;
                        }).length > 0) {
                            console.error("multiple axis can only be used with trendline when 'isStacked=relative'");
                            return;
                        }
                        this.renderAxis(this.chartData);
                        this.renderNormalizedStackedColumn(preparedData);
                        break;
                }
            };
            Column.prototype.setGroupedColumnOptions = function (chartOptions) {
                var _this = this;
                chartOptions.categoryAxisOptions.axisType = chartOptions.categoryAxisOptions.axisType || griffin.AxisType.ordinal;
                this.columnOptions.categoryAxisOptions = chartOptions.categoryAxisOptions;
                this.axisProperties.categoryAxisProperties = {
                    perspective: griffin.Perspective.horizontal,
                    direction: griffin.Direction.bottom,
                    orient: griffin.Direction.bottom,
                    position: { x: 0, y: this.height }
                };
                chartOptions.valueAxesOptions.forEach(function (valueAxisOption, index) {
                    var valueAxisProperty;
                    valueAxisOption.axisType = valueAxisOption.axisType || griffin.AxisType.linear;
                    valueAxisProperty.perspective = griffin.Perspective.vertical;
                    if (index === 0) {
                        valueAxisProperty.direction = griffin.Direction.left;
                        valueAxisProperty.orient = griffin.Direction.left;
                        valueAxisProperty.position = { x: 0, y: 0 };
                    }
                    else {
                        if (index % 2 === 0) {
                            valueAxisProperty.direction = griffin.Direction.left;
                            valueAxisProperty.orient = griffin.Direction.left;
                            valueAxisProperty.position = { x: (0 - _this.margin.left + index * 30), y: 0 };
                        }
                        else {
                            valueAxisProperty.direction = griffin.Direction.right;
                            valueAxisProperty.orient = griffin.Direction.right;
                            valueAxisProperty.position = { x: (_this.width + ((index - 1) * 20)), y: 0 };
                        }
                    }
                    _this.columnOptions.valueAxesOptions[index] = valueAxisOption;
                    _this.axisProperties.valueAxesProperties[index] = valueAxisProperty;
                });
            };
            Column.prototype.setStackedColumnOptions = function (chartOptions) {
            };
            Column.prototype.setNormalizedStackedColumnOptions = function (chartOptions) {
            };
            Column.prototype.renderAxis = function (data) {
                var valueAxisCount = d3.max(data.series.map(function (d) { return d.axisId || 0; })) + 1;
                if (valueAxisCount > this.columnOptions.valueAxesOptions.length) {
                    console.error('AxisOptions not provided for all the axes. Please provide axis options for each value axis used.');
                    return;
                }
                this.categoryAxis = griffin.axis.AxisFactory.getAxis(this.columnOptions.categoryAxisOptions, this.axisProperties.categoryAxisProperties, this.theme);
                this.categoryAxis.draw(this.svg, data.categories);
                for (var index = 0; index < valueAxisCount; index++) {
                    var axisData = index === 0 ? data.series.filter(function (d) {
                        return typeof d.axisId === 'undefined' || d.axisId === index;
                    }) : data.series.filter(function (d) {
                        return d.axisId === index;
                    });
                    var seriesAxis = griffin.axis.AxisFactory.getAxis(this.columnOptions.valueAxesOptions[index], this.axisProperties.valueAxesProperties[index], this.theme);
                    this.seriesAxes.push(seriesAxis);
                    seriesAxis.draw(this.svg, axisData);
                }
            };
            Column.prototype.checkLabelOverlap = function () {
                return false;
            };
            Column.prototype.renderGroupedColumn = function (data) {
            };
            Column.prototype.renderStackedColumn = function (data) {
            };
            Column.prototype.renderNormalizedStackedColumn = function (data) {
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
            return Column;
        })(chart.BaseChart);
        chart.Column = Column;
    })(chart = griffin.chart || (griffin.chart = {}));
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    (function (chartType) {
        chartType[chartType["column"] = 0] = "column";
        chartType[chartType["bar"] = 1] = "bar";
        chartType[chartType["area"] = 2] = "area";
        chartType[chartType["line"] = 3] = "line";
        chartType[chartType["pie"] = 4] = "pie";
        chartType[chartType["donut"] = 5] = "donut";
        chartType[chartType["barTable"] = 6] = "barTable";
    })(griffin.chartType || (griffin.chartType = {}));
    var chartType = griffin.chartType;
    (function (AxisType) {
        AxisType[AxisType["linear"] = 0] = "linear";
        AxisType[AxisType["percentage"] = 1] = "percentage";
        AxisType[AxisType["log"] = 2] = "log";
        AxisType[AxisType["time"] = 3] = "time";
        AxisType[AxisType["date"] = 4] = "date";
        AxisType[AxisType["ordinal"] = 5] = "ordinal";
        AxisType[AxisType["custom"] = 6] = "custom";
    })(griffin.AxisType || (griffin.AxisType = {}));
    var AxisType = griffin.AxisType;
    (function (Perspective) {
        Perspective[Perspective["vertical"] = 0] = "vertical";
        Perspective[Perspective["horizontal"] = 1] = "horizontal";
    })(griffin.Perspective || (griffin.Perspective = {}));
    var Perspective = griffin.Perspective;
    (function (Direction) {
        Direction[Direction["top"] = 0] = "top";
        Direction[Direction["bottom"] = 1] = "bottom";
        Direction[Direction["left"] = 2] = "left";
        Direction[Direction["right"] = 3] = "right";
    })(griffin.Direction || (griffin.Direction = {}));
    var Direction = griffin.Direction;
    (function (Stacked) {
        Stacked[Stacked["true"] = 0] = "true";
        Stacked[Stacked["false"] = 1] = "false";
        Stacked[Stacked["relative"] = 2] = "relative";
    })(griffin.Stacked || (griffin.Stacked = {}));
    var Stacked = griffin.Stacked;
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
    var Utility = (function () {
        function Utility() {
        }
        Utility.setMargin = function (c, cType) {
            switch (cType) {
                case (griffin.chartType.column): {
                    this.setColumnChartMargin(c);
                }
            }
        };
        Utility.setColumnChartMargin = function (c) {
            var margin = c.margin;
            c.axisProperties.valueAxesProperties.forEach(function (valueAxisProperty) {
                switch (valueAxisProperty.direction) {
                    case (griffin.Direction.left):
                        margin.left += 30;
                        break;
                    case (griffin.Direction.right):
                        margin.right += 30;
                        break;
                }
            });
            margin.bottom += 30;
        };
        Utility.chartCofiguration = {};
        return Utility;
    })();
    griffin.Utility = Utility;
})(griffin || (griffin = {}));
//# sourceMappingURL=griffin.js.map