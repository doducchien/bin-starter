import "./App.scss";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less';
import { Row, Col, Image, Divider } from "antd";
import img1 from "./assets/img/gfx-e.png";
import img2 from "./assets/img/sc-medium-a.png";
import {
  TwitterOutlined,
  MediumOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  GithubOutlined,
  WhatsAppOutlined,
  PlayCircleOutlined,
  SmileOutlined,
  ArrowDownOutlined,
  WomanOutlined,
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
        <div className="line-straight line-1"></div>
        <div className="line-straight line-2"></div>

        <div className="line-straight line-3"></div>

        <div className="line-straight line-4"></div>

        <div className="line-straight line-5"></div>
        <div className="line-straight line-5"></div>

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
                <Col span={6} className="item-6-start">
                  <span className="label">RAISED</span>-6,739,797 Tokens
                </Col>
                <Col span={6} className="item-6-end">
                  <span className="label">TARGET</span>-6,739,797 Tokens
                </Col>
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
                <Col span={6}>
                  <div style={{ fontSize: "1.87rem" }}>100%</div>
                </Col>
                <Col span={6}></Col>
              </Row>
              <Row justify="space-between">
                <Col span={4} className="item-4">
                  <p>SOFT CAP</p>
                </Col>
                <Col span={4} className="item-4">
                  <p>CROWDSALE</p>
                </Col>
                <Col span={4} className="item-4">
                  <p>HARD CAP</p>
                </Col>

                <Col span={6}>
                  <p className="project-phase">Public Sale Soon</p>
                </Col>
                <Col span={6}></Col>
              </Row>
            </div>

            <div className="end">
              <Row>
                <Col span={4}>
                  <a className="actions" href="#">
                    <PlayCircleOutlined style={{ fontSize: 38 }} />
                    &nbsp; How it Works
                  </a>
                </Col>
                <Col span={4}>
                  <a className="actions" href="#">
                    <SmileOutlined style={{ fontSize: 38 }} />
                    &nbsp; Why buy token now?
                  </a>
                </Col>
                <Col flex={1}></Col>
                <Col>
                  <a className="icons" href="#">
                    <TwitterOutlined />
                  </a>
                  <a className="icons" href="#">
                    <MediumOutlined />
                  </a>
                  <a className="icons" href="#">
                    <YoutubeOutlined />
                  </a>
                  <a className="icons" href="#">
                    <FacebookOutlined />
                  </a>
                  <a className="icons" href="#">
                    <GithubOutlined />
                  </a>
                  <a className="icons" href="#">
                    <WhatsAppOutlined />
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <section className="about-section">
          <h1 className="title">ABOUT BINSTARTER</h1>
          <div className="container">
            <Row>
              <Col span={10} className="left">
                <Row>
                  <h2>
                    We Build Insured Multi-Chain IDO Launchpad that Augments
                    Access to Blockchain Technologies
                  </h2>
                </Row>
                <Row className="content">
                  The popularization of decentralized structures has brought
                  some risks with it. While the risk appetite of investors has
                  increased due to the earning opportunities in the recent
                  period, it has become an indispensable need to create an
                  insurance protocol as a result of unforeseen mistakes or
                  malicious attempts
                </Row>
                <Row className="content">
                  At this point, BinStarter, aiming to secure start-ups and
                  liquidity providers with a decentralized protocol, became the
                  first launchpad project to develop the insurance protocol in
                  its field.
                </Row>
                <Row className="end">
                  <Col span={8}>
                    <button className="btn-left">
                      WHITE PAPER <ArrowDownOutlined />
                    </button>
                  </Col>
                  <Col span={8}>
                    <a className="link">SEE THE ECOSYSTEMS</a>
                  </Col>
                </Row>
              </Col>
              <Col span={14}>
                <Image width="70%" src={img1} preview={false} />
              </Col>
            </Row>
          </div>
        </section>

        <section className="ecosystems-section">
          <Row>
            <h1 className="title">ECOSYSTEMS</h1>
          </Row>
          <Row gutter={48}>
            <Col span={6} className="col-element ele-1">
              <div className="col-item">
                <div className="title-col">INSURED FIXED SWAP POOLS</div>
                <p>
                  A clearing pool that provides a fixed price, transparent, fast
                  and cheap exchange, and provides insurance coverage against a
                  possible fraud case.
                </p>
                <div className="vertical-line"></div>
              </div>
            </Col>
            <Col span={6} className="col-element ele-2">
              <div className="col-item">
                <div className="title-col">INSURED FIXED SWAP POOLS</div>
                <p>
                  A clearing pool that provides a fixed price, transparent, fast
                  and cheap exchange, and provides insurance coverage against a
                  possible fraud case.
                </p>
                <div className="vertical-line"></div>
              </div>
            </Col>
            <Col span={6} className="col-element ele-3">
              <div className="col-item">
                <div className="title-col">INSURED FIXED SWAP POOLS</div>
                <p>
                  A clearing pool that provides a fixed price, transparent, fast
                  and cheap exchange, and provides insurance coverage against a
                  possible fraud case.
                </p>
                <div className="vertical-line"></div>
              </div>
            </Col>
            <Col span={6} className="col-element ele-4">
              <div className="col-item">
                <div className="title-col">INSURED FIXED SWAP POOLS</div>
                <p>
                  A clearing pool that provides a fixed price, transparent, fast
                  and cheap exchange, and provides insurance coverage against a
                  possible fraud case.
                </p>
                <div className="vertical-line"></div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="platform-section">
          <h1 className="title">PLATFORM</h1>
          <div className="container">
            <Row justify="center" align="middle" className="above">
              <Col>
                <div className="left-above">FOR LIQUIDITY PROVIDE</div>
              </Col>
              <Col span={2}>
                <div className="horizontal-line"></div>
              </Col>
              <Col>
                <div className="right-above">FOR STARTUP</div>
              </Col>
            </Row>
            <Row>
              <Col span={10} className="left">
                <Row>
                  <h2>A Open Platform for our Participators</h2>
                </Row>
                <Row className="content" align="middle">
                  Safe, fast, low transaction fee and guarantee purchase
                  opportunity.
                </Row>
                <Row className="content" align="middle">
                  <Col><WomanOutlined style={{ fontSize: 44 }} /></Col>
                  <Col>
                  <p>
                    Guaranteed right to purchase from published projects by
                    level.
                  </p>
                  </Col>
                </Row>
                <Row className="content" align="middle">
                  <Col span={3}><WomanOutlined style={{ fontSize: 44 }} /></Col>
                  <Col flex={1}>
          
                  Safe swap opportunity in Fixed Clearing pools designed on fixed swap rates without being exposed to price fluctuations.


          
                  </Col>
                </Row>
                <Row className="content" align="middle">
                  <Col><WomanOutlined style={{ fontSize: 44 }} /></Col>
                  <Col>
                  <p>
                  Insurance protocol for 30 days against possible bad consequences that may occur in the projects in pools with insurance coverage.


                  </p>
                  </Col>
                </Row>
                <Row className="content" align="middle">
                  <Col><WomanOutlined style={{ fontSize: 44 }} /></Col>
                  <Col>
                  <p>
                  Easy and fast exchange with support for multiple networks


                  </p>
                  </Col>
                </Row>
                <Row className="end">
                  <Col span={8}>
                    <button className="btn-left">
                      WHITE PAPER <ArrowDownOutlined />
                    </button>
                  </Col>
                  <Col span={8}>
                    <a className="link">SEE THE ECOSYSTEMS</a>
                  </Col>
                </Row>
              </Col>
              <Col span={14}>
                <Image width="70%" src={img2} preview={false} />
              </Col>
            </Row>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
