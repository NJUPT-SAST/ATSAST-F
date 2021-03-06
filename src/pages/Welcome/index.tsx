import React, { useState, useEffect } from 'react';
import { Card, Carousel, Row, Col, Calendar, Typography, Button, Modal, Input, Form, Avatar } from 'antd';
import axios from 'axios'
import './index.less';

const { Title } = Typography;
const { Grid } = Card;

// 获取当前日期
const nowDate = new Date();

// 表单查找好友
const onFinish = (values: any) => {
  // eslint-disable-next-line no-console
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  // eslint-disable-next-line no-console
  console.log('Failed:', errorInfo);
};

// 卡片底部Meta元素
const { Meta } = Card;

// 为给定的时间配备问候语
function greeting(hour: number) {
  let words;
  if (hour >= 23 || hour <= 3)
    words = "深夜了，不要熬夜太晚哦";
  else if (hour <= 5)
    words = "凌晨好，早起的鸟儿有虫吃";
  else if (hour <= 10)
    words = "早上好，今天又是做水果蛋糕的好天气呢";
  else if (hour <= 12)
    words = "中午好，注意午休哦";
  else if (hour <= 14)
    words = "下午好，继续加油吧";
  else if (hour <= 15)
    words = "三点几嚟，饮茶先啦";
  else if (hour <= 18)
    words = "下午好，继续加油吧";
  else if (hour <= 22)
    words = "晚上好，又是收获满满的一天呢";
  return words
}

/* Row间Height（通用） */
const rowHeightStyle = {
  height: '16px'
}

/* “最新活动” 中内嵌卡片样式 */
const gridStyle = {
  width: '33.3%',
  textAlign: 'center',
};

// 调用API显示用户名
function Name(){
  const [data,setData]=useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://yapi.sast.fun/mock/13/user/selfinfo')
      setData(result.data.data.realName);
      // eslint-disable-next-line no-console
      console.log(result);
    }
    fetchData();
  }, []);

  return (
    <Title level={4}><p>{data}</p></Title>
  );
}

export default (): React.ReactNode => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={2}></Col>
        <Col span={14}>
          <Card >
            <Row><Name/></Row>
            <Title level={4}><p>{greeting(nowDate.getHours())}</p></Title>
          </Card>
          <Row style={rowHeightStyle}></Row>  {/* 空Row为卡片间增加留白 */}
          <Carousel autoplay effect="fade">
            <div className="pic">
              <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/01.jpg"></img>
            </div>
            <div className="pic">
              <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/02.jpg"></img>
            </div>
            <div className="pic">
              <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/03.jpg"></img>
            </div>
            <div className="pic">
              <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/04.jpg"></img>
            </div>
            <div className="pic">
              <img src="https://cdn.jsdelivr.net/gh/moroshima/CDN-Repository@0.4/Background/05.jpg"></img>
            </div>
          </Carousel>
          <Row style={rowHeightStyle}></Row>
          <div className="nearestAct">
            <Card title="最新活动" bordered={false} extra={<a href="#">更多活动</a>}>
              <Grid style={gridStyle} >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="技术沙龙-c语言急救车"
                  description="用一节公开课的时间带领大家将考试的常见知识点和考察方式复习一遍，快速高效复习。" />
              </Grid>
              <Grid style={gridStyle} >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="技术沙龙-c语言急救车"
                  description="用一节公开课的时间带领大家将考试的常见知识点和考察方式复习一遍，快速高效复习。" />
              </Grid>
              <Grid style={gridStyle} >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="技术沙龙-c语言急救车"
                  description="用一节公开课的时间带领大家将考试的常见知识点和考察方式复习一遍，快速高效复习。" />
              </Grid>
            </Card>
          </div>
        </Col>
        <Col span={6}>
          <div className="site-card-border-less-wrapper">
            <Card title="快速开始" bordered={false}  extra={<a href="#">添加</a>}>
              <Button type="link">快速组队</Button><br></br>
              <Button type="link">查看比赛信息</Button><br></br>
              <Button type="link">查看队伍信息</Button><br></br>
            </Card>
          </div>

          <Modal title="队友邀请" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="学号"
                name="username"
                wrapperCol={{ offset: 0, span: 8 }}
                rules={[{ required: true, message: '请输入学号' }]}
              >
                <Input placeholder="例如：B20010101" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" >
                  邀请
                </Button>
              </Form.Item>
            </Form>


          </Modal>
          <Row style={rowHeightStyle}></Row>  {/* 空Row为卡片间增加留白 */}

          {/* 右侧为卡片,显示日历 */}
          <Card bordered={false}>
            <Calendar
              fullscreen={false}
              // disabledDate={()=>{return true}}
              headerRender={() => {
                return (
                  <div style={{ padding: 8 }}>
                    <Typography.Title level={4}>{nowDate.getFullYear()}年{nowDate.getMonth() + 1}月{nowDate.getDate()}日</Typography.Title>
                  </div>
                );
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};