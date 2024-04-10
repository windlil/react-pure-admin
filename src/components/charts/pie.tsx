import * as echarts from "echarts";
import { useEffect } from "react";

type EChartsOption = echarts.EChartsOption;

const option: EChartsOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "数据",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      color: ['#87a2fb', '#92e7ff', '#aefeae', '#8ec8fe'],
      data: [
        { value:600, name: "访问量" },
        { value: 520, name: "点赞数" },
        { value: 1000, name: "分享数" },
        { value: 1200, name: "收藏数" },
      ],
    },
  ],
};

const Pie = () => {
  useEffect(() => {
    setTimeout(() => {
      const chartDom = document.getElementById("main1")!;
      const myChart = echarts.getInstanceByDom(chartDom);
      if (!myChart) {
        echarts.init(chartDom);
      }

      option && myChart && myChart.setOption(option);
    }, 100);
  }, []);
  return <div id="main1" style={{ height: "20rem", width: "100%" }}></div>;
};

export default Pie;
