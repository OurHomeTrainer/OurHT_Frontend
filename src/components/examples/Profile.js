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
import { Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import CalendarByJames from "components/CalendarByJames";

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
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* background */}
            <div className="shape shape-style-1 bg-gradient-info shape-default alpha-4"></div>
          </section>

          {/* 여기부터가 컨테이너 부분 */}
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--800">
                <div className="px-4">
                  <Row className="justify-content-center">
                    {/*<Col className="order-lg-2" lg="3">
                      카드의 레이아웃 행렬 가운데 부분임 주석 풀면 가운데에 추가로 넣을수 있음
                    </Col>
    */}

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

                    <Col className="order-lg-2" lg="6">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">김병주</span>
                          <span className="description"></span>
                        </div>
                        <div>
                          <span className="heading">2</span>
                          <span className="description">월간 운동횟수</span>
                        </div>
                        <div>
                          <span className="heading">128 kcal</span>
                          <span className="description">이번달 소모한 칼로리!</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
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
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
