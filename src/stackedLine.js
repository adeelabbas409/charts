import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    showvalues: "0",
    caption: "Artwork Revenue and Profit",
    subcaption: "(2013-2016)",
    numberprefix: "$",
    numbersuffix: "K",
    plottooltext: "Sales of $seriesName in $label was <b>$dataValue</b>",
    showhovereffect: "1",
    yaxisname: "Value in USD ($K)",
    showsum: "1",
    theme: "fusion",
    lineThickness:"0",
    palettecolors: "668BD3,5ED59A,EE7C7C,315497,FF8B00",
    anchorBorderThickness:"2"
  },
  categories: [
    {
      category: [
        {
          label: "2010"
        },
        {
          label: "2011"
        },
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        },
        {
          label: "2017"
        },
        {
          label: "2018"
        },
        {
          label: "2019"
        },
        
      ]
    }
  ],
  dataset: [
    {
      seriesname: "All in cost",
      data: [
        {
          value: "21"
        },
        {
          value: "24"
        },
        {
          value: "27"
        },
        {
          value: "30"
        },
        {
          value: "24"
        },
        {
          value: "29"
        },
        {
          value: "35"
        },
        {
          value: "33"
        },
        {
          value: "34"
        },
        {
          value: "25"
        }
      ]
    },
    {
      seriesname: "Profit",
      data: [
        {
          value: "5"
        },
        {
          value: "7"
        },
        {
          value: "3"
        },
        {
          value: "12"
        },
        {
          value: "11"
        },
        {
          value: "16"
        },
        {
          value: "9"
        },
        {
          value: "7"
        },
        {
          value: "3"
        },
        {
          value: "5"
        }
      ]
    },
    {
      seriesname: "Expense",
      data: [
        {
          value: "0"
        },
        {
          value: "0"
        },
        {
          value: "0"
        },
        {
          value: "0"
        },
        {
          value: "5"
        },
        {
          value: "0"
        },
        {
          value: "2"
        },
        {
          value: "0"
        },
        {
          value: "0"
        },
        {
          value: "5"
        }
      ]
    },
    {
      seriesname: "Insurance",
      plottooltext: "Total Insurance in $label was <b>$dataValue</b>",
      renderas: "Line",
      data: [
        {
          value: "1"
        },
        {
          value: "2"
        },
        {
          value: "10"
        },
        {
          value: "20"
        },
        {
          value: "5"
        },
        {
          value: "40"
        },
        {
          value: "2"
        },
        {
          value: "10"
        },
        {
          value: "17"
        },
        {
          value: "15"
        }
      ]
    },
    {
      seriesname: "Valuation",
      plottooltext: "Total Valuation in $label was <b>$dataValue</b>",
      renderas: "Line",
      data: [
        {
          value: "10"
        },
        {
          value: "20"
        },
        {
          value: "30"
        },
        {
          value: "10"
        },
        {
          value: "15"
        },
        {
          value: "21"
        },
        {
          value: "22"
        },
        {
          value: "13"
        },
        {
          value: "08"
        },
        {
          value: "35"
        }
      ]
    }
  ]
};

const StackedLineFusion = () => {
    return (
      <div style={{width:700, height:500}}>
      <ReactFusioncharts
        type="stackedcolumn2dline"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
      </div>
    );
}

export default StackedLineFusion;
