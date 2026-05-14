import * as echarts from "echarts";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const chartDom = document.getElementById("main");
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "ECharts Demo",
      },
      tooltip: {},
      xAxis: {
        data: ["vue", "React", "Angular"],
      },
      yAxis: {},
      series: [
        {
          name: "Percentage",
          type: "bar",
          data: [35, 45, 20],
        },
      ],
    };
    myChart.setOption(option);
  }, []);

  return (
    <div>
      <div id="main" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
};

export default Home;
