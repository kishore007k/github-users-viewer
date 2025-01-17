// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
	const chartConfigs = {
		type: "pie3d", // The chart type
		width: "100%", // Width of the chart
		height: "400", // Height of the chart
		dataFormat: "json", // Data type
		dataSource: {
			chart: {
				caption: "Languages",
				theme: "candy",
				decimals: 0,
				pieRadius: "50%",
				palletColors: "#f0db4f,#FF0000, #0372AB, #FF5904",
			},
			// Chart Data
			data: data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
