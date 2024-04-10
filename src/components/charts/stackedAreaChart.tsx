import * as echarts from "echarts/core";
import {
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
} from "echarts/components";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useEffect, useRef } from "react";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
>;

const option: EChartsOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },

  grid: {
    left: "3%",
    right: "3%",
    bottom: "4%",
    top: "8%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "访问量",
      type: "line",
      stack: "Total",
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#d794f8" },
          { offset: 0.5, color: "#d794f8" },
          { offset: 1, color: "white" },
        ]),
      },
      color: "#d794f8",
      smooth: true,
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "注册量",
      type: "line",
      stack: "Total",
      emphasis: {
        focus: "series",
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#9ad2fd" },
          { offset: 0.5, color: "#9ad2fd" },
          { offset: 1, color: "white" },
        ]),
      },
      color: "#9ad2fd",
      smooth: true,
      data: [220, 182, 191, 234, 290, 330, 310],
    },
  ],
};

const StackedAreaChart = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      setTimeout(() => {
        const chartDom = mainRef.current;
        const myChart = echarts.getInstanceByDom(chartDom!);
        if (!myChart) echarts.init(chartDom);
        option && myChart && myChart.setOption(option);
      }, 100)
    }
  }, [mainRef.current]);

  return (
    <div
      ref={mainRef}
      id="main"
      style={{
        width: "100%",
        height: "20rem",
      }}
    ></div>
  );
};

export default StackedAreaChart;
