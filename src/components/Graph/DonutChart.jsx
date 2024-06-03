import React from 'react';
// import DonutChart from 'react-donut-chart';
import CanvasJSReact from '@canvasjs/react-charts';

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DonutChart = () => {

    const options = {
        animationEnabled: true,
        title: {
            text: ""
        },
        subtitles: [{
            text: "40%",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###''",
            dataPoints: [
                { name: "Top 5 products", y: 10, },
                { name: "Top selling product", y: 31, },
                { name: "Highest commissioned Product", y: 31, },
                // { name: "Very Satisfied", y: 40 },
                // { name: "Satisfied", y: 17 },
                // { name: "Neutral", y: 7 }
            ]
        }]
    }
    return (
        <div className='dashboard_donutChart' id="chart" >
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
        </div>
    );
}

export default DonutChart;
