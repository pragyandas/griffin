var griffin;
(function (griffin) {
    var BaseChart = (function () {
        function BaseChart(containerId) {
            this.containerId = containerId;
        }
        BaseChart.prototype.render = function () {
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