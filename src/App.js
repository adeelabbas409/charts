import logo from "./logo.svg";
import "./App.css";

import React from "react";
import {
  G2,
  Chart,
  Tooltip,
  Interval,
  StackedColumnChart,
  Axis,
  Point
} from "bizcharts";

const data = [
  {
    year: "1991",
    value: 3,
    type: "Lon",
  },
  {
    year: "1992",
    value: 4,
    type: "Lon",
  },
  {
    year: "1993",
    value: 7,
    type: "Lon",
  },
  {
    year: "1994",
    value: 0.5,
    type: "Lon",
  },
  {
    year: "1995",
    value: 4.9,
    type: "Lon",
  },
  {
    year: "1996",
    value: 6,
    type: "Lon",
  },
  {
    year: "1997",
    value: 7,
    type: "Lon",
  },
  {
    year: "1998",
    value: 9,
    type: "Lon",
  },
  {
    year: "1999",
    value: 0.5,
    type: "Lon",
  },
 
  {
    year: "1991",
    value: 1,
    type: "Wiz",
  },
  {
    year: "1992",
    value: 2,
    type: "Wiz",
  },
  {
    year: "1993",
    value: 5,
    type: "Wiz",
  },
  {
    year: "1994",
    value: 4,
    type: "Wiz",
  },
  {
    year: "1995",
    value: 6,
    type: "Wiz",
  },
  {
    year: "1996",
    value: 2,
    type: "Wiz",
  },
  {
    year: "1997",
    value: 10,
    type: "Wiz",
  },
  {
    year: "1998",
    value: 12,
    type: "Wiz",
  },
  {
    year: "1999",
    value: 3,
    type: "Wiz",
  },
  {
    year: "1999",
    value2: 3,
    Point: "Insurance",
  },
];

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
      return item !== "1993" ? item : "XXXXX";
    },
  },
  stackField: "type",
  // color: ['#ae331b', '#dadada', '#609db7', '#1a6179'],
  label: {
    visible: true,
    position: "middle",
  },
};

function App() {
  return (
    <div className="App">
     
        <StackedColumnChart data={data} {...opt}>
          
        <Point
					position="year*Point"
			
				/>
        </StackedColumnChart>{" "}
      
    </div>
  );
}

export default App;
