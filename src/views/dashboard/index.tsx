import { FC } from "react";
import { Row, Col, Button, Timeline } from "antd";
import { Card } from "antd";
import StackedAreaChart from "@/components/charts/stackedAreaChart";
import {
  BarChartOutlined,
  LikeOutlined,
  ShareAltOutlined,
  StarOutlined,
} from "@ant-design/icons";
import CountUp from "react-countup";
import Pie from "@/components/charts/pie";
import "./index.css";
import { Avatar, List } from "antd";

const data = [
  {
    title: "windlil",
  },
  {
    title: "windlil",
  },
  {
    title: "windlil",
  },
  {
    title: "windlil",
  },
];

const Dashboard: FC = () => {
  return (
    <>
      <div className="content">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Card style={{ width: 300, backgroundColor: "#e9eefe" }}>
              <div className="flex relative">
                <div>
                  <div className="font-bold text-3xl">
                    <CountUp end={12500}></CountUp>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">总访问量</div>
                </div>
                <BarChartOutlined
                  style={{ fontSize: "2rem" }}
                  className="absolute right-5 top-1/2 translate-y-[-50%]"
                />
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card style={{ width: 300, backgroundColor: "#effcef" }}>
              <div className="relative">
                <div>
                  <div className="font-bold text-3xl">
                    <CountUp end={520}></CountUp>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">点赞数</div>
                </div>
                <LikeOutlined
                  style={{ fontSize: "2rem" }}
                  className="absolute right-5 top-1/2 translate-y-[-50%]"
                />
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card style={{ width: 300, backgroundColor: "#eff6fc" }}>
              <div className="data-card relative">
                <div>
                  <div className="font-bold text-3xl">
                    <CountUp end={1000}></CountUp>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">分享数</div>
                </div>
                <ShareAltOutlined
                  style={{ fontSize: "2.5rem" }}
                  className="absolute right-5 top-1/2 translate-y-[-50%]"
                />
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card style={{ width: 300, backgroundColor: "#e6f5f9" }}>
              <div className="relative">
                <div>
                  <div className="font-bold text-3xl">
                    <CountUp end={1200}></CountUp>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">收藏数</div>
                </div>
                <StarOutlined
                  style={{ fontSize: "2.5rem" }}
                  className="absolute right-5 top-1/2 translate-y-[-50%]"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="flex my-4">
        <div
          style={{
            width: "60%",
          }}
          className="content  "
        >
          <StackedAreaChart></StackedAreaChart>
        </div>
        <div style={{ width: "38%" }} className="content ml-2">
          <Pie></Pie>
        </div>
      </div>
      <div style={{}} className="content my-4 flex">
        <Card
          title="任务进度"
          bordered={false}
          className="card"
          style={{ flex: 1 }}
        >
          <Timeline
            items={[
              {
                color: "green",
                children: "Create a services site 2015-09-01",
              },
              {
                color: "green",
                children: "Create a services site 2015-09-01",
              },
              {
                color: "red",
                children: (
                  <>
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </>
                ),
              },
              {
                color: "gray",
                children: (
                  <>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </>
                ),
              },
              {
                color: "gray",
                children: (
                  <>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </>
                ),
              },
            ]}
          />
        </Card>
        <Card
          title="项目动态"
          extra={<Button type="link">详细</Button>}
          bordered={false}
          className="card"
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://p26-passport.byteacctimg.com/img/user-avatar/5b8f37cc2140e567e5c9cead063d952b~120x120.awebp`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
