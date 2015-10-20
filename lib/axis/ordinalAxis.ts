module griffin.axis {
    interface IAxisData {
        value: string,
        name?:string,
        label?:string
    }
    export class OrdinalAxis {
        //create IAxisData but do not export
        public axisData: IAxisData;
        public scale: any;
        private axisProperties: IAxisProperties = {
            perspective: Perspective.horizontal,
            direction: Direction.bottom,
            orient: Direction.bottom,
            position: { x: 0, y: 0 }
        };
        public axisId: string;
        public axisOptions: IAxisOptions = {
            fontSize: 12,//theme
            fontFamily: 'sans-serif',//theme
            title: { visible: true, text: "" },
            showGridlines: true,//theme
            innerPadding: 0.1,
            outerPadding: 0.2,
            clamp: true,//theme
            axisColor: '#000',//theme
            labelRotate: 'auto',
            textAnchor: 'middle',
            dx: "0em",
            dy: "0em",
            pathVisible: true,//theme
            tickColor: '#000'//theme
        };
        constructor(axisProperties: IAxisProperties, public axisTheme?: IThemeDetails) {
            if (typeof axisProperties.perspective !== 'undefined' && axisProperties.perspective !== null)
                this.axisProperties.perspective = axisProperties.perspective;
            if (typeof axisProperties.direction !== 'undefined' && axisProperties.direction !== null)
                this.axisProperties.direction = axisProperties.direction;
            if (typeof axisProperties.orient !== 'undefined' && axisProperties.orient !== null)
                this.axisProperties.orient = axisProperties.orient;
            if (typeof axisProperties.position !== 'undefined' && axisProperties.position !== null)
                this.axisProperties.position = axisProperties.position;
        }
        public setOptions(axisOptions: IAxisOptions) {
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
            if (typeof axisOptions.textAnchor !== 'undefined' && axisOptions.textAnchor !== null)
                this.axisOptions.textAnchor = axisOptions.textAnchor;
            if (typeof axisOptions.dx !== 'undefined' && axisOptions.dx !== null)
                this.axisOptions.dx = axisOptions.dx;
            if (typeof axisOptions.dy !== 'undefined' && axisOptions.dy !== null)
                this.axisOptions.dy = axisOptions.dy;
            if (typeof axisOptions.pathVisible !== 'undefined' && axisOptions.pathVisible !== null)
                this.axisOptions.pathVisible = axisOptions.pathVisible;
            if (typeof axisOptions.tickColor !== 'undefined' && axisOptions.tickColor !== null)
                this.axisOptions.tickColor = axisOptions.tickColor;
        }
        public draw(svg: d3.Selection<any>, axisData: IAxisData[], axisId?: string) {
            switch (this.axisProperties.perspective) {
                case (Perspective.horizontal):
                    this.axisId = axisId || <string>svg.attr('id') + '_xAxis';
                    let width = parseFloat(svg.attr('width'));
                    this.scale = d3.scale.ordinal()
                        .domain(axisData.map((d) => { return d.value }))
                        .rangeRoundBands([0, width], this.axisOptions.innerPadding, this.axisOptions.outerPadding);

                   	var xAxis = d3.svg.axis()
                   			  .scale(this.scale)
                   			  .orient(this.axisProperties.orient.toString());

                    var axis = svg.append('g')
                        .attr('class', 'x axis')
                        .attr('id', this.axisId)
                        .call(xAxis)
                        .attr("transform", "translate(" + this.axisProperties.position.x + "," + this.axisProperties.position.y + ")");

                    var ticks = axis
                        .selectAll('text')
                        .text(function(d, i) {
                            return axisData[i].label;
                        });

                    if (this.axisOptions.labelRotate !== 'auto') {
                        ticks
                            .style("text-anchor", this.axisOptions.textAnchor)
                            .attr("dx", this.axisOptions.dx)
                            .attr("dy", this.axisOptions.dy)
                            .attr("transform", "rotate(-" + this.axisOptions.labelRotate + ")");
                    }
                    break;
                case (Perspective.vertical):
                    break;
            }
        }
    }
}
