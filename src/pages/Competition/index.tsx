import React from 'react';
import { Card, Input, Space, Radio, Select, Carousel, List, Typography, Collapse, } from 'antd';
import './index.less';
const { Paragraph, Text, Title } = Typography;
// 搜索栏相关
const { Search } = Input;
const { Option } = Select;
//折叠面板
const { Panel } = Collapse;

class App extends React.Component {

  state = {
    list: {
      success: "",
      errMsg: "",
      errCode: "",
      data: [
        {
          masterUid: "",
          contestName: "",
          description: "",
          currAdmin: "",
          isTeam: "",
          isJoin: "",
          comment: "",
          pushlink: "",
          contestOrganizer: "",
          contestHost: "",
          contestHelper: "",
          currStu: "",
          banners: "",
          teamGroup: "",
          subjectCategory: "",
          workCategory: "",
          joinGrade: "",
          isInstructor: "",
          enable: "",
          judging: "",
          minMember: "",
          maxMember: "",
          minInstructor: "",
          maxInstructor: "",
          isTech: "",
          contestType: "",
          stages: "",
          fileUrl: "",
        }
      ]
    },
    listData: [
    ],
    Organizers: [
    ],
    joinGrades: [
    ],
  }
  componentDidMount() {
    fetch('http://pipe.sast.codes:7566/mock/13/user/contestlist/', {
      method: 'get',
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          list: json,
          listData: json.data,
        });
        this.state.list.data.map(data => {
          this.state.Organizers.push(data.contestOrganizer);
        })
        this.state.list.data.map(data => {
          this.state.joinGrades.push(data.joinGrade);
        })
        this.setState({
        })
        // console.log(this.props)
      })
  }
  onSearch = (value) => {
    this.state.listData = [];
    // console.log(this.state.list);
    this.state.list.data.map(data => {
      if (data.contestName.indexOf(value) != -1) {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
  }
  handleClick0 = () => {
    this.state.listData = [];
    // console.log(this.state.list);
    this.state.list.data.map(data => {
      this.state.listData.push(data);
    })
    this.setState({
    })
    // console.log(this.state.listData);
  }
  handleClick1 = () => {
    this.state.listData = [];
    // console.log(this.state.list);
    this.state.list.data.map(data => {
      if (data.contestType == "理工类") {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
    // console.log(this.state.listData);
  }
  handleClick2 = () => {
    this.state.listData = [];
    // console.log(this.state.list);
    this.state.list.data.map(data => {
      if (data.contestType == "社科类") {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
    // console.log(this.state.listData);
  }
  handleClick3 = () => {
    this.state.listData = [];
    // console.log(this.state.list);
    this.state.list.data.map(data => {
      if (data.contestType == "综合类") {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
    // console.log(this.state.listData);
  }
  handleChange0 = (value) => {
    this.state.listData = [];
    this.state.list.data.map(data => {
      if (value.indexOf(data.joinGrade) != -1) {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
  }
  handleChange1 = (value) => {
    this.state.listData = [];
    this.state.list.data.map(data => {
      if (value.indexOf(data.contestOrganizer) != -1) {
        this.state.listData.push(data);
      }
    })
    this.setState({
    })
  }
  render() {
    return (
      <>
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
        <Card>
          <Collapse accordion defaultActiveKey={['1']} ghost>
            <Panel header={<text>比赛名称搜索：</text>} key="1">
              <Search
                placeholder="请输入比赛名称"
                allowClear
                enterButton="搜索"
                size="middle"
                style={{ width: '300px' }}
                onSearch={this.onSearch}
              />
            </Panel>
            <Panel header="所属类目：" key="2">
              <Radio.Group buttonStyle="solid" defaultValue="a" size="middle">
                <Radio.Button value="a" onClick={this.handleClick0}>全部</Radio.Button>
                <Radio.Button value="b" onClick={this.handleClick1}>理工类</Radio.Button>
                <Radio.Button value="c" onClick={this.handleClick2}>社科类</Radio.Button>
                <Radio.Button value="d" onClick={this.handleClick3}>综合类</Radio.Button>
              </Radio.Group>
            </Panel>
            <Panel header="参赛对象：" key="3">
              <Select
                mode="tags"
                placeholder=""
                style={{ width: '250px' }}
                onChange={this.handleChange0}
              >{this.state.joinGrades.map(joinGrade => (
                <Option key={joinGrade}>{joinGrade}</Option>
              ))}
              </Select>
            </Panel>
            <Panel header="主办方：" key="4">
              <Select
                mode="tags"
                placeholder=""
                tokenSeparators={[',']}
                style={{ width: '250px' }}
                onChange={this.handleChange1}
              >
                {this.state.Organizers.map(Organizer => (
                  <Option key={Organizer}>{Organizer}</Option>
                ))}
              </Select>
            </Panel>
          </Collapse>
        </Card>
        <Card>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              pageSize: 5,
            }}
            dataSource={this.state.listData}
            renderItem={item => (
              <List.Item
                key={item.contestName}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  title={
                    <Title level={3}>
                      比赛名称：{<a href={'/competition/detail?contestId='+item.contestName}>{item.contestName}</a>}
                    </Title>
                  }
                  description={
                    <Space>
                      <Text>
                        比赛类目：{item.contestType}
                        <br />
                        比赛类型：{item.isTeam}
                        <br />
                        主办方：{item.contestOrganizer}
                        <br />
                        面向年级：{item.joinGrade}
                      </Text>
                    </Space>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      </>
    )
  }
}

function Competition() {
  return (
    <div>
      <App />
    </div>
  );
}

export default Competition;
