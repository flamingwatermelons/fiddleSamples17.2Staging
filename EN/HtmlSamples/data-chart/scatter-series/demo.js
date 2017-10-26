$(function () {
            function createScatterChart(selector, seriesType, dataSource) {
                $(selector).igDataChart({
                    width: "320px",
                    height: "320px",
                    dataSource: dataSource,
                    title: "U.S. Agricultural Production Per Year",
                    subtitle: "Data from 1961-2007",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 10,
                        title: "Year",
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "Billions of USD",
                        maximumValue: 200000,
                        formatLabel: function (val) {
                            var bVal = (val / 1000),
                            rounded = Math.round(bVal * 100) / 100;
                            return "$"+ rounded;
                        }
                    }],
                    series: [{
                        name: "scatter",
                        type: seriesType,
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Year",
                        yMemberPath: "Value",
                        markerType: "circle"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function createBubbleChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "320px",
                    height: "320px",
                    dataSource: dataSource,
                    title: "U.S. Agricultural Production Per Year",
                    subtitle: "Data from 1961-2007",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 10,
                        title: "Year",
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        title: "Billions of USD",
                        maximumValue: 200000,
                        formatLabel: function (val) {
                            var bVal = (val / 1000),
                            rounded = Math.round(bVal * 100) / 100;
                            return "$" + rounded;
                        }
                    }],
                    series: [{
                        name: "bubble",
                        type: "bubble",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "Year",
                        yMemberPath: "Value",
                        radiusMemberPath: "Population",
                        fillMemberPath: "Population",
                        labelMemberPath: "Population",
                        markerType: "circle",
                        radiusScale: {
                            minimumValue: 2,
                            maximumValue: 12,
                            isLogarithmic: true
                        },
                        fillScale: {
                            type: "value",
                            brushes: ["red", "orange", "yellow"],
                            minimumValue: 150,
                            maximumValue: 400
                        }
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            function createScatterAreaChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "320px",
                    height: "320px",
                    dataSource: dataSource,
                    title: "$$(Chart_title_scatter)",
                    subtitle: "$$(Chart_subtitle_scatter)",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 40,
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        interval: 40,
                    }],
                    series: [{
                        name: "area",
                        type: "scatterArea",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "X",
                        yMemberPath: "Y",
                        colorMemberPath: "Z",
                        colorScale: {
                            palette: ["red", "orange", "yellow"],
                            interpolationMode: "interpolateRGB",
                        }
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }
            function createScatterContourChart(selector, dataSource) {
                $(selector).igDataChart({
                    width: "320px",
                    height: "320px",
                    dataSource: dataSource,
                    title: "$$(Chart_title_scatter)",
                    subtitle: "$$(Chart_subtitle_scatter)",
                    axes: [{
                        name: "xAxis",
                        type: "numericX",
                        interval: 40,
                    }, {
                        name: "yAxis",
                        type: "numericY",
                        interval: 40,
                    }],
                    series: [{
                        name: "contour",
                        type: "scatterContour",
                        xAxis: "xAxis",
                        yAxis: "yAxis",
                        xMemberPath: "X",
                        yMemberPath: "Y",
                        valueMemberPath: "Z",
                        fillScale: {
                            type: "value",
                            brushes: ["red", "orange", "yellow"],
                        }
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            var dataSource = agriculturalData;
            createScatterChart("#chartScatter", "scatter", dataSource);
            createScatterChart("#chartScatterLine", "scatterLine", dataSource);
            createBubbleChart("#chartBubble", dataSource);
            createScatterChart("#chartScatterSpline", "scatterSpline", dataSource);
            createScatterAreaChart("#chartScatterArea", scatterData);
            createScatterContourChart("#chartScatterContour", scatterData);
        });