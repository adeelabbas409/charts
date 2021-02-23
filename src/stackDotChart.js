import React from "react";
import ReactDOM from "react-dom";
import {
  Chart,
  Interval,
  Interaction,
  registerInteraction,
  Tooltip,
  Point,
  Axis,
  Effects,
  
} from "bizcharts";

registerInteraction("element-link", {
  start: [
    { trigger: "interval:mouseenter", action: "element-link-by-color:link" },
  ],
  end: [
    { trigger: "interval:mouseleave", action: "element-link-by-color:unlink" },
  ],
});

// 数据源
const data = [
  { year: "2014", type: "Sales", USD: 1000 },
  { year: "2015", type: "Sales", USD: 1170 },
  { year: "2016", type: "Sales", USD: 660 },
  { year: "2017", type: "Sales", USD: 1030 },
  { year: "2014", type2: "valuation", USD: 302 },
  { year: "2015", type2: "valuation", USD: 111 },
  { year: "2016", type2: "valuation", USD: 223 },
  { year: "2017", type2: "valuation", USD: 351 },
  { year: "2014", type2: "insurance", USD: 344 },
  { year: "2015", type2: "insurance", USD: 211 },
  { year: "2016", type2: "insurance", USD: 178 },
  { year: "2017", type2: "insurance", USD: 98 },
];

const data2 = [
  { year: "2014", valuation: 1000, allInCost:12000, insurance:100 },
  { year: "2015", valuation: 900, allInCost:10000, insurance:800 },
  { year: "2016", valuation: 1100, allInCost:16000, insurance:200},
  { year: "2017", valuation: 500, allInCost:9000, insurance:1500 },
];


const scale = {
  sales: {
    tickInterval: 500,
    nice: true,
  },
};


const opt = {
  autoFit: true,
  title: {
    visible: true,
    text: "Artwork",
  },
  description: {
    visible: true,
    text:
      "Tesitn chart for artwork",
  },
  data,
  xField: "year",
  yField: "value",
  yAxis: {
    min: 0,
  },
  xAxis: {
    formatter: (item, index, record) => {
      console.log("item", item, index, record);
      return item !== "1993" ? item : "特殊";
    },
  },
  stackField: "type",
  // color: ['#ae331b', '#dadada', '#609db7', '#1a6179'],
  label: {
    visible: true,
    position: "middle",
  },
};

function StackDotChart() {
  return (
    <div style={{ padding: "20px" }}>
      <Chart
        //   padding={[10, 20, 50, 40]}
        autoFit
        height={500}
        data={data}
        scale={scale}
        {...opt}
      >
        <Tooltip showMarkers={false} />

         <Interval position="year*USD" color="type"/>
         

        {/* <Interaction type="element-highlight" />
      <Interaction type="element-link" /> */}
        <Point
          position="year*USD"
          color="type2"
          // label="type2"
          shape={[
            "type2",
            (type2) => {
              if (type2) {
                return "circle";
              }
              return;
            },
          ]}
     
          //或者
          style={[
            "year*USD*type2",
            (year, USD,type2) => {
              const res = { lineWidth: 1, opacity:0};
              console.log("CCCCC", type2)
              if (type2 && type2 === "valuation") res.fill = "#ff0000";
              else if (type2 && type2 === "insurance") res.fill = "#ff00ff";
              else res.stroke = "transparent";
              return res;
            },
          ]}
        />
        
      </Chart>
    </div>
  );
}

export default StackDotChart;
