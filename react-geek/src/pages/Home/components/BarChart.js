import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const BarChart = ({ title }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: title,
      },
      tooltip: {},
      xAxis: {
        data: ["React", "Vue", "Angular", "Svelte", "SolidJS", "Next.js"],
      },
      yAxis: {},
      series: [
        {
          name: "Percentage",
          type: "bar",
          data: [91, 87, 68, 82, 79, 89],
        },
      ],
    };
    myChart.setOption(option);
  }, [title]);

  return <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>;
};

export default BarChart;
