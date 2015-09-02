var griffin;
(function (griffin) {
    (function (axisType) {
        axisType[axisType["linear"] = 0] = "linear";
        axisType[axisType["percentage"] = 1] = "percentage";
        axisType[axisType["time"] = 2] = "time";
        axisType[axisType["ordinal"] = 3] = "ordinal";
        axisType[axisType["custom"] = 4] = "custom";
    })(griffin.axisType || (griffin.axisType = {}));
    var axisType = griffin.axisType;
    (function (direction) {
        direction[direction["left"] = 0] = "left";
        direction[direction["right"] = 1] = "right";
        direction[direction["bottom"] = 2] = "bottom";
        direction[direction["top"] = 3] = "top";
    })(griffin.direction || (griffin.direction = {}));
    var direction = griffin.direction;
    (function (rotation) {
        rotation[rotation["auto"] = 0] = "auto";
        rotation[rotation["vertical"] = 90] = "vertical";
        rotation[rotation["horizontal"] = 0] = "horizontal";
        rotation[rotation["inclined"] = 45] = "inclined";
    })(griffin.rotation || (griffin.rotation = {}));
    var rotation = griffin.rotation;
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var axisBase = (function () {
        function axisBase() {
        }
        axisBase.prototype.setOptions = function (axisOptions) {
            if (typeof axisOptions.axisColor !== 'undefined' && axisOptions.axisColor !== null)
                this.axisOptions.axisColor = axisOptions.axisColor;
        };
        return axisBase;
    })();
    griffin.axisBase = axisBase;
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    (function (seriesChartType) {
        seriesChartType[seriesChartType["line"] = 0] = "line";
        seriesChartType[seriesChartType["area"] = 1] = "area";
    })(griffin.seriesChartType || (griffin.seriesChartType = {}));
    var seriesChartType = griffin.seriesChartType;
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var BaseChart = (function () {
        function BaseChart(containerId) {
            this.containerId = containerId;
            this.margin = {
                top: 20,
                bottom: 10,
                left: 30,
                right: 10
            };
            this.title = {
                text: "",
                font: "sans-serif",
                fontSize: 16
            };
            this.tooltip = {
                visible: true,
                tooltipTheme: griffin.tooltipTheme.BASIC
            };
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
            if (typeof chartOptions.title.text !== 'undefined' && chartOptions.title.text !== null)
                this.title.text = chartOptions.title.text;
            if (typeof chartOptions.title.font !== 'undefined' && chartOptions.title.font !== null)
                this.title.font = chartOptions.title.font;
            if (typeof chartOptions.title.fontSize !== 'undefined' && chartOptions.title.fontSize !== null)
                this.title.fontSize = chartOptions.title.fontSize;
            if (typeof chartOptions.tooltip !== 'undefined' && chartOptions.tooltip !== null)
                this.tooltip = chartOptions.tooltip;
            if (typeof chartOptions.margin !== 'undefined' && chartOptions.margin !== null)
                this.margin = chartOptions.margin;
        };
        return BaseChart;
    })();
    griffin.BaseChart = BaseChart;
})(griffin || (griffin = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var griffin;
(function (griffin) {
    var GroupedColumn = (function (_super) {
        __extends(GroupedColumn, _super);
        function GroupedColumn(containerId) {
            _super.call(this, containerId);
        }
        GroupedColumn.prototype.render = function (chartData) {
            _super.prototype.render.call(this, chartData);
        };
        GroupedColumn.prototype.setOptions = function (chartOptions) {
            _super.prototype.setOptions.call(this, chartOptions);
        };
        return GroupedColumn;
    })(griffin.BaseChart);
    griffin.GroupedColumn = GroupedColumn;
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