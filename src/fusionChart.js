// STEP 1 - Include Dependencies

// Include react
import React from 'react';
import ReactDOM from 'react-dom';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2- Define the categories representing the labels on the X-axis
const categories = [{
    "category": [{
        "label": "Jan"
      },
      {
        "label": "Feb"
      },
      {
        "label": "Mar"
      },
      {
        "label": "Apr"
      },
      {
        "label": "May"
      },
      {
        "label": "Jun"
      },
      {
        "label": "Jul"
      },
      {
        "label": "Aug"
      },
      {
        "label": "Sep"
      },
      {
        "label": "Oct"
      },
      {
        "label": "Nov"
      },
      {
        "label": "Dec"
      }
    ]
  }
]
// STEP 3- Construct the dataset comprising combination series
 const dataset = [{
    "seriesName": "Actual Revenue",
    "showValues": "1",
    "data": [{
        "value": "16000"
      },
      {
        "value": "20000"
      },
      {
        "value": "18000"
      },
      {
        "value": "19000"
      },
      {
        "value": "15000"
      },
      {
        "value": "21000"
      },
      {
        "value": "16000"
      },
      {
        "value": "20000"
      },
      {
        "value": "17000"
      },
      {
        "value": "25000"
      },
      {
        "value": "19000"
      },
      {
        "value": "23000"
      }
    ]
  },
  {
    "seriesName": "Projected Revenue",
    "renderAs": "line",
    "thickness": "12",
    "data": [{
        "value": "15000"
      },
      {
        "value": "16000"
      },
      {
        "value": "17000"
      },
      {
        "value": "18000"
      },
      {
        "value": "19000"
      },
      {
        "value": "19000"
      },
      {
        "value": "19000"
      },
      {
        "value": "19000"
      },
      {
        "value": "20000"
      },
      {
        "value": "21000"
      },
      {
        "value": "22000"
      },
      {
        "value": "23000"
      }
    ]
  },
 
]

// STEP 4 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'mscombi2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        "chart": {
          "caption": "Harry's SuperMart",
          "subCaption": "Sales analysis of last year",
          "xAxisname": "Month",
          "yAxisName": "Amount (In USD)",
          "numberPrefix": "$",
          "divlineColor": "#999999",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "divLineGapLen": "1",
          "toolTipColor": "#ffffff",
          "toolTipBorderThickness": "0",
          "toolTipBgColor": "#000000",
          "toolTipBgAlpha": "80",
          "toolTipBorderRadius": "2",
          "toolTipPadding": "5",
          "theme": "fusion",
          "drawCrossLine":"0",
          "trendlineThickness":"122",
          "animation":"0",
          "showSum": "1",
        },
    
        "categories": categories,
        "dataset": dataset
      }
    }

// STEP 5 - Creating the DOM element to pass the react-fusioncharts component
class FusionChartApp extends React.Component {
  render() {
     return (
     <ReactFC
        {...chartConfigs}/>
     );
  }
}

export default FusionChartApp;

