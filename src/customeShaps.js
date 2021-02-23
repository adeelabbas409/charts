import React from "react";
import {
  Chart,
  Tooltip,
  Interval,
  Annotation,
  Axis,
  registerShape
} from "bizcharts";


registerShape('interval', 'border-radius', {
  draw(cfg, container) {
    const { points } = cfg;
    let path = [];
    path.push(['M', points[0].x, points[0].y]);
    path.push(['L', points[1].x, points[1].y]);
    path.push(['L', points[2].x, points[2].y]);
    path.push(['L', points[3].x, points[3].y]);
    path.push('Z');
    path = this.parsePath(path); // 将 0 - 1 转化为画布坐标

    const group = container.addGroup();
    group.addShape('rect', {
      attrs: {
        x: path[1][1], // 矩形起始点为左上角
        y: path[1][2],
        width: path[2][1] - path[1][1],
        height: path[0][2] - path[1][2],
        fill: cfg.color,
        radius: (path[2][1] - path[1][1]) / 2,
      },
    });

    return group;
  },
});


const data = [
  { year: "2014", type: "Sales", valuation: 1000, allInCost:12000, insurance:100 },
  { year: "2015", type: "Sales", valuation: 900, allInCost:10000, insurance:800 },
  { year: "2016", type: "Sales", valuation: 1100, allInCost:16000, insurance:200},
  { year: "2017", type: "Sales",valuation: 500, allInCost:9000, insurance:1500 },
];


const activeData = [
  { date: '2017年3月2日', actual: 175, expected: 900 },
  { date: '2017年3月3日', actual: 137, expected: 900 },
  { date: '2017年3月4日', actual: 240, expected: 900 },
  { date: '2017年3月5日', actual: 726, expected: 900 },
  { date: '2017年3月6日', actual: 968, expected: 900 },
  { date: '2017年3月7日', actual: 702, expected: 900 },
  { date: '2017年3月8日', actual: 655, expected: 900 },
  { date: '2017年3月9日', actual: 463, expected: 900 },
  { date: '2017年3月10日', actual: 464, expected: 900 },
  { date: '2017年3月12日', actual: 0, expected: 900 },
  { date: '2017年3月13日', actual: 638, expected: 900 },
  { date: '2017年3月14日', actual: 0, expected: 900 },
  { date: '2017年3月15日', actual: 0, expected: 900 },
  { date: '2017年3月16日', actual: 509, expected: 900 },
  { date: '2017年3月17日', actual: 269, expected: 900 },
  { date: '2017年3月18日', actual: 321, expected: 900 },
  { date: '2017年3月19日', actual: 0, expected: 900 },
  { date: '2017年3月20日', actual: 399, expected: 900 },
  { date: '2017年3月21日', actual: 662, expected: 900 },
  { date: '2017年3月22日', actual: 689, expected: 900 },
  { date: '2017年3月23日', actual: 347, expected: 900 },
  { date: '2017年3月24日', actual: 0, expected: 900 },
  { date: '2017年3月26日', actual: 428, expected: 900 },
  { date: '2017年3月27日', actual: 749, expected: 900 },
  { date: '2017年3月28日', actual: 0, expected: 900 },
  { date: '2017年3月29日', actual: 0, expected: 900 },
  { date: '2017年3月30日', actual: 69.1, expected: 900 },
];

function CustomShapes() {
  const scale = {
    expected: {
      min: 0,
      max: 1000,
      sync: 'value',
    },
    actual: {
      sync: 'value',
    },
  };
  return (
    <Chart height={400} scale={scale} padding="auto" data={data} autoFit>
      
      {/* <Interval
        color="#cbcbcb"
        // shape="border-radius"
        position="year*valuation"
        adjust="stack"
      /> */}
      <Interval
        position="year*allInCost"
        color="#5B8FF9"
        // shape={['year*allInCost', (year, val) => {
        //   if (val === 0) {
        //     return;
        //   }
        //   // eslint-disable-next-line consistent-return
        //   return 'border-radius';stack
        // }]}
        adjust="stack"
      />
    
      
      {/* <Axis name="valuation" visible={false} /> */}
      {/* <Axis name="year" visible={false} /> */}
      <Axis
        name="USD"
        position="right"
        line={false}
        tickLine={false}
        label={{
          formatter: (val) => {
            if (val === '500') {
              return '';
            }
            return val;
          },
        }}
      />
      <Annotation.Text
        position={['max', 'max']}
        content="USD"
        style={{
          fill: '#cbcbcb',
          fontSize: 20,
          textAlign: 'end',
          textBaseline: 'top',
        }}
      />
      <Annotation.Text
        position={['min', 'max']}
        offsetY={10}
        content="Test"
        style={{
          fill: '#5B8FF9',
          fontSize: 20,
          fontWeight: 'bold',
          textBaseline: 'top',
        }}
      />
      <Tooltip shared />
    </Chart>
  );
}

export default CustomShapes;
