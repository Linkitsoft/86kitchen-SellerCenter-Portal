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
            text: "Sales Analysis",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>${y}</strong>",
            indexLabel: "${y}",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: 300, label: "Top selling product Storm Fiber" },
                { y: 400, label: "Highest commissioned Product Samsung" },
            ]
            // type: "doughnut",
            // showInLegend: true,
            // indexLabel: "{name}: {y}",
            // yValueFormatString: "#,###''",
            // dataPoints: [
            //     { name: `Top selling product (${"Storm Fiber"}) Price: $${345} Sales`, y: 45 },
            //     { name: `Highest commissioned Product (${"Samsung"})  Price: $${45} Sales`, y: 66 },
            // ]
        }]
    };
    return (
        <div className='dashboard_donutChart' id="chart" >
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
        </div>
    );
}

export default DonutChart;
