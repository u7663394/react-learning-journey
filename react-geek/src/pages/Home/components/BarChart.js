import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const defaultPalette = {
  start: "#1677ff",
  end: "#38bdf8",
  soft: "rgba(22, 119, 255, 0.1)",
};

const BarChart = ({
  title,
  eyebrow,
  description,
  type = "bar",
  categories = [],
  data = [],
  unit = "%",
  seriesName = "Value",
  palette = defaultPalette,
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    if (!chartDom) return undefined;

    const myChart = echarts.init(chartDom, null, { renderer: "canvas" });
    const values = data.map((item) =>
      typeof item === "number" ? item : item.value,
    );
    const labels = categories.length
      ? categories
      : data.map((item) => item.label || item.name);

    const brandGradient = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: palette.start },
      { offset: 1, color: palette.end },
    ]);

    const option = {
      color: [palette.start],
      grid: {
        top: 28,
        right: 18,
        bottom: 24,
        left: 34,
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(15, 23, 42, 0.92)",
        borderWidth: 0,
        padding: [10, 12],
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
        axisPointer: {
          type: type === "bar" ? "shadow" : "line",
          lineStyle: {
            color: "rgba(22, 119, 255, 0.45)",
            width: 2,
          },
          shadowStyle: {
            color: "rgba(22, 119, 255, 0.08)",
          },
        },
        valueFormatter: (value) => `${value}${unit}`,
      },
      xAxis: {
        type: "category",
        data: labels,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#d8e0eb",
          },
        },
        axisLabel: {
          color: "#64748b",
          fontSize: 12,
          margin: 14,
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#94a3b8",
          formatter: `{value}${unit}`,
        },
        splitLine: {
          lineStyle: {
            color: "#e8edf5",
            type: "dashed",
          },
        },
      },
      series: [
        {
          name: seriesName,
          type,
          data: values,
          smooth: true,
          symbol: type === "line" ? "circle" : "none",
          symbolSize: 8,
          barWidth: type === "bar" ? 28 : undefined,
          showBackground: type === "bar",
          backgroundStyle: {
            color: "#f1f5f9",
            borderRadius: [8, 8, 0, 0],
          },
          itemStyle: {
            color: type === "bar" ? brandGradient : palette.start,
            borderRadius: type === "bar" ? [8, 8, 0, 0] : 0,
          },
          lineStyle: {
            width: 3,
            color: palette.start,
          },
          areaStyle:
            type === "line"
              ? {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: palette.soft },
                    { offset: 1, color: "rgba(255, 255, 255, 0)" },
                  ]),
                }
              : undefined,
          emphasis: {
            focus: "series",
            itemStyle: {
              shadowBlur: 16,
              shadowColor: palette.soft,
            },
          },
        },
      ],
      animationDuration: 900,
      animationEasing: "cubicOut",
    };

    myChart.setOption(option);

    const resizeObserver = new ResizeObserver(() => {
      myChart.resize();
    });
    resizeObserver.observe(chartDom);

    return () => {
      resizeObserver.disconnect();
      myChart.dispose();
    };
  }, [categories, data, palette, seriesName, title, type, unit]);

  return (
    <section className="chart-card">
      <div className="chart-card__header">
        <div>
          {eyebrow && <span className="chart-card__eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
        </div>
        {description && <p>{description}</p>}
      </div>
      <div className="chart-card__canvas" ref={chartRef}></div>
    </section>
  );
};

export default BarChart;
