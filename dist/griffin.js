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
var griffin;
(function (griffin) {
    var axisBase = (function () {
        function axisBase(axisOptions) {
        }
        return axisBase;
    })();
    griffin.axisBase = axisBase;
})(griffin || (griffin = {}));
var griffin;
(function (griffin) {
    var BaseChart = (function () {
        function BaseChart(containerId, theme) {
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
            this.chartOptions = chartOptions;
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
        function GroupedColumn(containerId, theme) {
            _super.call(this, containerId, theme);
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
    var axisType;
    (function (axisType) {
        axisType[axisType["linear"] = 0] = "linear";
        axisType[axisType["percentage"] = 1] = "percentage";
        axisType[axisType["time"] = 2] = "time";
        axisType[axisType["ordinal"] = 3] = "ordinal";
        axisType[axisType["custom"] = 4] = "custom";
    })(axisType || (axisType = {}));
    var direction;
    (function (direction) {
        direction[direction["left"] = 0] = "left";
        direction[direction["right"] = 1] = "right";
        direction[direction["bottom"] = 2] = "bottom";
        direction[direction["top"] = 3] = "top";
    })(direction || (direction = {}));
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
//# sourceMappingURL=griffin.js.map