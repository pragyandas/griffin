var griffin;
(function (griffin) {
    var BaseChart = (function () {
        function BaseChart(containerId) {
            this.containerId = containerId;
            this.width = 700;
            this.height = 500;
            this.margin = {
                top: 10,
                bottom: 20,
                left: 20,
                right: 20
            };
            this.width = document.getElementById(containerId).offsetWidth;
            this.height = document.getElementById(containerId).offsetHeight;
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
            palatte: ['A', 'B', 'C']
        };
        theme.MATERIAL = {
            palatte: ['X', 'Y', 'Z']
        };
        return theme;
    })();
    griffin.theme = theme;
})(griffin || (griffin = {}));
//# sourceMappingURL=griffin.js.map