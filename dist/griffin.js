var griffin;
(function (griffin) {
    var axis;
    (function (axis) {
        (function (AxisType) {
            AxisType[AxisType["linear"] = 0] = "linear";
            AxisType[AxisType["percentage"] = 1] = "percentage";
            AxisType[AxisType["log"] = 2] = "log";
            AxisType[AxisType["time"] = 3] = "time";
            AxisType[AxisType["date"] = 4] = "date";
            AxisType[AxisType["ordinal"] = 5] = "ordinal";
            AxisType[AxisType["custom"] = 6] = "custom";
        })(axis.AxisType || (axis.AxisType = {}));
        var AxisType = axis.AxisType;
        (function (Direction) {
            Direction[Direction["vertical"] = 0] = "vertical";
            Direction[Direction["horizontal"] = 1] = "horizontal";
        })(axis.Direction || (axis.Direction = {}));
        var Direction = axis.Direction;
        var AxisFactory = (function () {
            function AxisFactory() {
            }
            AxisFactory.getAxis = function (axisOptions, axisTheme) {
                if (axisTheme === void 0) { axisTheme = griffin.theme.DEFAULT; }
                switch (axisOptions.axisType) {
                    case AxisType.ordinal:
                        return new axis.ordinalAxis(axisOptions, axisTheme);
                        break;
                    case AxisType.linear:
                        return new axis.linearAxis(axisOptions, axisTheme);
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
            function linearAxis(axisOptions, axisTheme) {
                this.axisTheme = axisTheme;
                this.axisOptions = {
                    direction: axis.Direction.vertical,
                    orient: 'left',
                    ticks: 5,
                    fontSize: 12,
                    fontFamily: 'sans-serif',
                    title: {
                        visible: true,
                        text: ""
                    },
                    showGridlines: true,
                    tickFormat: '',
                    position: {
                        x: 0,
                        y: 0
                    },
                    clamp: true,
                    axisColor: '#000',
                    pathVisible: true,
                    aec: 0.1,
                    tickColor: '#000',
                };
                if (typeof axisOptions.direction !== 'undefined' && axisOptions.direction !== null)
                    this.axisOptions.direction = axisOptions.direction;
                if (typeof axisOptions.orient !== 'undefined' && axisOptions.orient !== null)
                    this.axisOptions.orient = axisOptions.orient;
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
                if (typeof axisOptions.position !== 'undefined' && axisOptions.position !== null)
                    this.axisOptions.position = axisOptions.position;
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
    (function (axis_1) {
        var ordinalAxis = (function () {
            function ordinalAxis(axisOptions, axisTheme) {
                this.axisTheme = axisTheme;
                this.axisOptions = {
                    direction: axis_1.Direction.horizontal,
                    orient: 'bottom',
                    fontSize: 12,
                    fontFamily: 'sans-serif',
                    title: { visible: true, text: "" },
                    showGridlines: true,
                    innerPadding: 0.1,
                    outerPadding: 0.2,
                    position: {
                        x: 0,
                        y: 0
                    },
                    clamp: true,
                    axisColor: '#000',
                    labelRotate: 'auto',
                    pathVisible: true,
                    tickColor: '#000'
                };
                if (typeof axisOptions.direction !== 'undefined' && axisOptions.direction !== null)
                    this.axisOptions.direction = axisOptions.direction;
                if (typeof axisOptions.orient !== 'undefined' && axisOptions.orient !== null)
                    this.axisOptions.orient = axisOptions.orient;
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
                if (typeof axisOptions.position !== 'undefined' && axisOptions.position !== null)
                    this.axisOptions.position = axisOptions.position;
            }
            ordinalAxis.prototype.draw = function (svg, axisData, axisId) {
                switch (this.axisOptions.direction) {
                    case (axis_1.Direction.horizontal):
                        var axisId = axisId || svg.attr('id') + '_xAxis';
                        var width = parseFloat(svg.attr('width'));
                        this.scale = d3.scale.ordinal()
                            .domain(axisData.map(function (d) { return d.value; }))
                            .rangeRoundBands([0, width], this.axisOptions.innerPadding, this.axisOptions.outerPadding);
                        var xAxis = d3.svg.axis()
                            .scale(this.scale)
                            .orient(this.axisOptions.orient);
                        var axis = svg.append('g')
                            .attr('class', 'x axis')
                            .attr('id', axisId)
                            .call(xAxis)
                            .attr("transform", "translate(" + this.axisOptions.position.x + "," + this.axisOptions.position.y + ")");
                        axis.selectAll('text')
                            .text(function (d) {
                            return d.name;
                        });
                        break;
                    case (axis_1.Direction.vertical):
                        break;
                }
            };
            return ordinalAxis;
        })();
        axis_1.ordinalAxis = ordinalAxis;
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
            }
            Column.prototype.render = function (data) {
                var margin = this.margin;
                this.setMarginForAxis(data, margin);
                this.legend = this.setMarginForLegend(data, margin);
                _super.prototype.render.call(this, data);
                this.preparedData = this.dataPreparation(data);
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
                categoryOptions.axisType = categoryOptions.axisType || griffin.axis.AxisType.ordinal;
                categoryOptions.position = categoryOptions.position && categoryOptions.position !== null ? categoryOptions.position : { x: 0, y: this.height };
                categoryOptions.direction = categoryOptions.direction && categoryOptions.direction !== null ? categoryOptions.direction : griffin.axis.Direction.horizontal;
                this.categoryAxis = griffin.axis.AxisFactory.getAxis(categoryOptions, this.theme);
                this.categoryAxis.draw(this.svg, data.categories);
                for (var i = 0; i < valueAxisCount; i++) {
                    if (i === 0) {
                        var axisData = data.series.filter(function (d) {
                            return typeof d.axisId === 'undefined' || d.axisId === i;
                        }), seriesAxisOption = this.chartOptions.valueAxesOptions[i];
                        seriesAxisOption.axisType = seriesAxisOption.axisType || griffin.axis.AxisType.linear;
                        seriesAxisOption.position = seriesAxisOption.position && seriesAxisOption.position !== null ? seriesAxisOption.position : { x: 0, y: 0 };
                        seriesAxisOption.direction = seriesAxisOption.direction && seriesAxisOption.direction !== null ? seriesAxisOption.direction : griffin.axis.Direction.vertical;
                        seriesAxisOption.orient = seriesAxisOption.orient && seriesAxisOption.orient !== null ? seriesAxisOption.orient : 'left';
                        var seriesAxis = griffin.axis.AxisFactory.getAxis(seriesAxisOption, this.theme);
                        seriesAxis.draw(this.svg, axisData);
                        this.seriesAxes.push(seriesAxis);
                    }
                    else {
                        var axisData = data.series.filter(function (d) {
                            return d.axisId === i;
                        }), seriesAxisOption = this.chartOptions.valueAxesOptions[i];
                        seriesAxisOption.axisType = seriesAxisOption.axisType || griffin.axis.AxisType.linear;
                        seriesAxisOption.position = seriesAxisOption.position && seriesAxisOption.position !== null ? seriesAxisOption.position : (i % 2 === 0 ? { x: (0 - margin.left + i * 30), y: 0 } : { x: (this.width + ((i - 1) * 20)), y: 0 });
                        seriesAxisOption.orient = seriesAxisOption.orient && seriesAxisOption.orient !== null ? seriesAxisOption.orient : (i % 2 === 0 ? 'left' : 'right');
                        seriesAxisOption.direction = seriesAxisOption.direction && seriesAxisOption.direction !== null ? seriesAxisOption.direction : griffin.axis.Direction.vertical;
                        var seriesAxis = griffin.axis.AxisFactory.getAxis(seriesAxisOption, this.theme);
                        seriesAxis.draw(this.svg, axisData);
                        this.seriesAxes.push(seriesAxis);
                    }
                }
            };
            Column.prototype.renderStackedColumn = function (data) {
                if (data.series.filter(function (d) {
                    return (typeof d.trendline === 'undefined' || d.trendline === false) && d.axisId > 1;
                }).length > 0) {
                    console.error("multiple axis can only be used with trendline when 'isStacked=true'");
                    return;
                }
            };
            Column.prototype.renderNormalizedStackedColumn = function (data) {
                if (data.series.filter(function (d) {
                    return (typeof d.trendline === 'undefined' || d.trendline === false) && d.axisId > 1;
                }).length > 0) {
                    console.error("multiple axis can only be used with trendline when 'isStacked=relative'");
                    return;
                }
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