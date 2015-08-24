var griffin;
(function (griffin) {
    var baseChart = (function () {
        function baseChart(containerId, theme) {
            if (theme === void 0) { theme = griffin.theme.DEFAULT; }
            this.containerId = containerId;
            this.theme = theme;
            this.margin = {
                top: 10,
                bottom: 20,
                left: 20,
                right: 20
            };
            this.chartWidth = document.getElementById(containerId).offsetWidth;
            this.chartHeight = document.getElementById(containerId).offsetHeight;
        }
        baseChart.prototype.render = function (chartData) {
            this.color = this.theme.palette;
            var width = this.chartWidth - this.margin.left - this.margin.right, height = this.chartHeight - this.margin.top - this.margin.bottom;
            var svg = d3.select("#" + this.containerId).append("svg")
                .attr("width", width + this.margin.left + this.margin.right)
                .attr("height", height + this.margin.top + this.margin.bottom)
                .style('background-color', this.theme.backgroundColor)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
                .attr("id", this.containerId + "_svg");
        };
        baseChart.prototype.setOptions = function (chartOptions) {
            this.chartOptions = chartOptions;
        };
        return baseChart;
    })();
    griffin.baseChart = baseChart;
})(griffin || (griffin = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var griffin;
(function (griffin) {
    var groupedColumn = (function (_super) {
        __extends(groupedColumn, _super);
        function groupedColumn(containerId, theme) {
            _super.call(this, containerId, theme);
        }
        groupedColumn.prototype.render = function (chartData) {
            console.log(chartData);
            _super.prototype.render.call(this, chartData);
        };
        groupedColumn.prototype.setOptions = function (chartOptions) {
            _super.prototype.setOptions.call(this, chartOptions);
        };
        return groupedColumn;
    })(griffin.baseChart);
    griffin.groupedColumn = groupedColumn;
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var rotation;
    (function (rotation) {
        rotation[rotation["auto"] = 0] = "auto";
        rotation[rotation["vertical"] = 90] = "vertical";
        rotation[rotation["horizontal"] = 0] = "horizontal";
        rotation[rotation["inclined"] = 45] = "inclined";
    })(rotation || (rotation = {}));
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
            axisFontSize: 12
        };
        theme.DEFAULT = {
            palette: ['#03A9F4', '#E91E63', '#ff9800', '#4CAF50', '#D4E157', '#FFA726', '#9C27B0', '#DD4477', '#66AA00', '#B82E2E'],
            axisColor: '#000',
            backgroundColor: '#fff',
            axisFont: 'sans-serif',
            axisFontSize: 12
        };
        return theme;
    })();
    griffin.theme = theme;
})(griffin || (griffin = {}));
//# sourceMappingURL=griffin.js.map