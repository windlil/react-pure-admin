import React, { FC } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";

const Dashboard: FC = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 300, backgroundColor: "#e9eefe" }}>
            <div className="data-card">
              <div>
                <div className="font-bold text-3xl">1,2500</div>
                <div className="text-sm text-gray-400 mt-1">总访问量</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 300, backgroundColor: "#effcef" }}>
            <div className="data-card">
              <div>
                <div className="font-bold text-3xl">520</div>
                <div className="text-sm text-gray-400 mt-1">点赞数</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 300, backgroundColor: "#eff6fc" }}>
            <div className="data-card">
              <div>
                <div className="font-bold text-3xl">80</div>
                <div className="text-sm text-gray-400 mt-1">分享数</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card style={{ width: 300, backgroundColor: "#e6f5f9" }}>
            <div className="data-card">
              <div>
                <div className="font-bold text-3xl">100</div>
                <div className="text-sm text-gray-400 mt-1">收藏数</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
