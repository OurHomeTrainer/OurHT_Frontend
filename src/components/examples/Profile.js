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

// reactstrap components
import { Card, Container, Button,Badge,Row, Col,Progress } from "reactstrap";
import Puang from "components/puang.jpg"

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import CalendarByJames from "components/CalendarByJames";
import ProfileModifiy from "components/examples/ProfileModifiy"

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main" id="ImageLetter">
          <section className="section section-shaped section-lg">
            {/* background */}
            <div className="shape shape-style-1 bg-gradient-info shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />  
            </div>
            <div className="profile-page" >
            <section className="section mt-7">
            <Container className="pt-lg-7">
              <Card className="card-profile shadow mt-300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-actions py-4 mt-lg-0">
                        
                        
                      </div>
                    </Col>
                    
            {/*카드의 레이아웃 행렬 가운데 부분임 주석 풀면 가운데에 추가로 넣을수 있음*/}
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image2">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={Puang} className="rounded-circle" ></img>
                        </a>
                      </div>
                    </Col>
                    
                    

                    {/* 아래부분은 프로필에서 버튼만들고 링크 넣는 부분 추후 필요하면 활성화 할 것. */}

                    {/* <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col> */}
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          안녕하세요!
                        </Button>
                        {/* <ProfileModifiy/> */}
                      </div>
                      
                    </Col>
                  </Row>

                  <Row className="justify-content-center">
                    <Col className="order-lg-1" lg="6">
                      <div className="card-profile-stats d-flex justify-content-center" id="ImageLetterColor">
                        <div >
                          <span className="heading">김푸앙</span>
                          <span className="description">이름</span>
                        </div>
                        <div>
                          <span className="heading">8세</span>
                          <span className="description">나이</span>
                        </div>
                        <div>
                          <span className="heading">80cm</span>
                          <span className="description">신장</span>
                        </div>
                        <div>
                          <span className="heading">20kg</span>
                          <span className="description">체중</span>
                        </div>
                      </div>
                    </Col>

                  </Row>
                  {/* <div className="text-center mt-5">
                    <h3>
                      김병달 <span className="font-weight-light">, 24</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      185cm 70kg
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      여기에 캘린더 및 운동기록들 모아서 보여줘야함 저장된 분석
                      결과들 리스트 출력
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      간략하게 보여주고 특정일자 및 특정 운동의 상세보기는
                      더보기 링크 통해 상세 페이지로 이동하여 보여주려 생각중.
                      의견 부탁
                    </div>
                  </div> */}



                  {/* <Row className="justify-content-center">

                  <Col lg="3">
                    <h3 className="h4 text-success font-weight-bold mb-4">
                      이번달 진행현황
                    </h3>
                    <div className="progress-wrapper">
                      <div className="progress-info">
                        <div className="progress-label">
                          <span>진행률</span>
                        </div>
                        <div className="progress-percentage">
                          <span>40%</span>
                        </div>
                      </div>
                      <Progress max="100" value="25" color="default" />
                    </div>
                    
                  </Col>
                  </Row> */}
                  <CalendarByJames />

                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          위에서는 요약 여기서는 운동 통계 및 그동안 기록된
                          리스트들 나열
                        </p>
                        {/* 일단 링크 막아둠 */}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          더 보기
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
            </section>
            </div>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
