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
/// <reference path="../interface/IChartOptions.ts" />
/// <reference path="../interface/IChartData.ts" />
var griffin;
(function (griffin) {
    var BaseChart = (function () {
        function BaseChart(containerId) {
            this.containerId = containerId;
        }
        BaseChart.prototype.render = function (chartData) {
            console.log('rendering chart');
        };
        BaseChart.prototype.setOptions = function (chartOptions) {
            console.log(chartOptions);
        };
        return BaseChart;
    })();
    griffin.BaseChart = BaseChart;
})(griffin || (griffin = {}));
//# sourceMappingURL=griffin.js.map