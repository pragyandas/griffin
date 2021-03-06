module griffin.axis {
    interface IAxisData {
        value: string,
        name?: string,
        data: number[]
    }
    export class LinearAxis {
        public scale: any;
        private axisProperties: IAxisProperties = {
            perspective: Perspective.horizontal,
            direction: Direction.bottom,
            orient: Direction.bottom,
            position: { x: 0, y: 0 }
        };
        public axisId: string;
        public axisOptions: IAxisOptions = {
            ticks: 5,
            fontSize: 12,//theme
            fontFamily: 'sans-serif',//theme
            title: { visible: true, text: "" },
            showGridlines: false,//theme
            tickFormat: function(val: number) {
                return d3.format('.2s')(val).replace(/G/, 'B');
            },
            tickPrefix: '',
            tickPostfix: '',
            clamp: true,//true
            axisColor: '#000',//theme
            pathVisible: true,//theme
            aec: 0.1,
            tickColor: '#000',//theme
        };
        constructor(axisProperties: IAxisProperties, public axisTheme: IThemeDetails) {
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
            if (typeof axisOptions.tickPrefix !== 'undefined' && axisOptions.tickPrefix !== null)
                this.axisOptions.tickPrefix = axisOptions.tickPrefix;
            if (typeof axisOptions.tickPostfix !== 'undefined' && axisOptions.tickPostfix !== null)
                this.axisOptions.tickPostfix = axisOptions.tickPostfix;
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
        public draw(svg: d3.Selection<any>, axisData: IAxisData[], axisId?: string) {
            switch (this.axisProperties.perspective) {
                case (Perspective.vertical):
                    this.axisId = axisId || <string>svg.attr('id') + '_yAxis';
                    let height = parseFloat(svg.attr('height'));
                    let width = parseFloat(svg.attr('width'));
                    this.scale = d3.scale.linear().range([height, 0]);
                    let maxY = d3.max(axisData, (d) => {
                        return d3.max(d.data);
                    });
                    this.scale.domain([0, maxY + this.axisOptions.aec * maxY]);

                    let yAxis = d3.svg.axis()
                        .scale(this.scale)
                        .orient(Direction[this.axisProperties.orient])
                        .ticks(this.axisOptions.ticks)
                        .tickSize(this.axisOptions.showGridlines?width:6);

                    let axis = svg.append('g')
                        .attr('class', 'y axis')
                        .attr('id', this.axisId)
                        .call(yAxis)
                        .attr("transform",
                        "translate(" + this.axisProperties.position.x + "," + this.axisProperties.position.y + ")");

                    if(!this.axisOptions.pathVisible)
                      svg.select('#'+this.axisId+' path').style('display', 'none');

                    break;
                case (Perspective.horizontal):
                    break;
            }
        }
    }
}
