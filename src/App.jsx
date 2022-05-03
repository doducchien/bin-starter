import "./App.scss";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less';
import { Row, Col } from "antd";
import {
  TwitterOutlined,
  MediumOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  GithubOutlined,
  WhatsAppOutlined,
  PlayCircleOutlined,
  SmileOutlined
} from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <div className="line-straight line-1"></div>
      <div className="line-straight line-2"></div>

      <div className="line-straight line-3"></div>

      <div className="line-straight line-4"></div>

      <div className="line-straight line-5"></div>
      <div className="line-straight line-5"></div>

      <header>
        <div className="logo">
          <img src="https://binstarter.io/images/logo-s2-white.png" alt="" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">MVP</a>
            </li>
            <li>
              <a href="#">Token</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
            <li>
              <a href="#">APP</a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="banner">
          <div className="title">
            Insurance Protocol with Decentralized Approval Mechanism Against
            Fraud
          </div>

          <p className="content">
            BinStarter is a decentralized insurance protocol which has a
            mining-style approval mechanism that brings together projects and
            liquidity providers. This insurance is designed to examine the
            projects according to certain criteria for 30 days and to protect
            liquidity providers from possible damages against any negativities
            that may occur.
          </p>
          <div className="btns">
            <button className="btn-left">STAKE $BSR</button>
            <button className="btn-right">BUY $BSR</button>
          </div>
          <div className="status">
            <div className="chart">
              <Row justify="space-between">
                <Col span={6} className='item-6-start'><span className="label">RAISED</span>-6,739,797 Tokens</Col>
                <Col span={6} className='item-6-end'><span className="label">TARGET</span>-6,739,797 Tokens</Col>
                <Col span={6}>
                  <p className="label">PROJECT PHASE</p>
                </Col>
                <Col span={6}>
                  <p className="label">THE WHITELIST ENDS IN</p>
                </Col>
              </Row>
              <Row justify="space-between" align="middle">
                <Col span={12}>
                  <div className="line-horizon"></div>
                </Col>
                <Col span={6}><div style={{fontSize: '1.87rem'}}>100%</div></Col>
                <Col span={6}></Col>
              </Row>
              <Row justify="space-between">
                <Col span={4} className="item-4"><p>SOFT CAP</p></Col>
                <Col span={4} className="item-4"><p>CROWDSALE</p></Col>
                <Col span={4} className="item-4"><p>HARD CAP</p></Col>

                <Col span={6}>
                  <p className="project-phase">Public Sale Soon</p>
                </Col>
                <Col span={6}></Col>
              </Row>
            </div>

            <div className="end">
              <Row>
                <Col span={4}><a className="actions" href="#"><PlayCircleOutlined style={{fontSize: 38}}/>&nbsp; How it Works</a></Col>
                <Col span={4}><a className="actions" href="#"><SmileOutlined  style={{fontSize: 38}}/>&nbsp; Why buy token now?</a></Col>
                <Col flex={1}></Col>
                <Col>
                  <a className="icons" href="#"><TwitterOutlined /></a>
                  <a className="icons" href="#"><MediumOutlined /></a>
                  <a className="icons" href="#"><YoutubeOutlined /></a>
                  <a className="icons" href="#"><FacebookOutlined /></a>
                  <a className="icons" href="#"><GithubOutlined /></a>
                  <a className="icons" href="#"><WhatsAppOutlined /></a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
