/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes

import { Link } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,

  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main" className="wrapper">
          <div className="position-relative bg-gradient-info">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">

              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        OurHT와 함께 정확한 운동을 시작해보세요!{" "}
                        {/* <span>여기 더 추가해도됨 글씨</span> */}
                      </h1>
                      <p className="lead text-white">
                        스쿼트 푸쉬업 플랭크의 정확한 자세교정과
                        분석서비스를 통해 당신의 홈트를 도와줍니다.
                      </p>
                      <div className="btn-wrapper">
                        {/* <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}

            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div> 
                          
                            이부분 주석 풀고 아이콘 추가 가능 추후에 적절한거 찾아서 넣기
                          */}
                          <h6 className="text-primary text-uppercase">
                            스쿼트
                          </h6>
                          <p className="description mt-3">
                            무릎의 각도, 등의 굽음, 엉덩이의 위치가 중요 포인트입니다. 이에 집중하여 운동을 시작해보세요.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              무릎
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              엉덩이
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              등
                            </Badge>
                          </div>

                          <Link to="middle">
                            <Button
                              className="mt-4"
                              color="primary"
                            >
                              시작하기
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          여기도 마찬가지 아이콘 부분
                          */}
                          <h6 className="text-success text-uppercase">
                            푸쉬업
                          </h6>
                          <p className="description mt-3">
                            팔의 각도와 상체를 일직선으로 유지하는 것이 중요합니다. 시선은 전방유지에 신경쓰며 운동을 시작해보세요
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              상체고정
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              팔 각도
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              시선 유지
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            시작하기
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          {/* <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          아이콘 부분
                          */}
                          <h6 className="text-warning text-uppercase">
                            플랭크
                          </h6>
                          <p className="description mt-3">
                            코어힘에 집중하세요. 어깨, 엉덩이, 무릎의 위치를 신경쓰는 것이 중요합니다. 힘들어도 1분만 버티세요!
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              코어힘
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              상체고정
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              1분유지
                            </Badge>
                          </div>
                          <Link to="/plank-page">
                            <Button
                              className="mt-4"
                              color="warning"


                            >
                              시작하기
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>



        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
