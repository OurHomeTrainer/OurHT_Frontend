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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Card, Container, Button, Badge, Row, Col, Progress } from "reactstrap";
import Puang from "components/puang.jpg";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import CalendarByJames from "components/CalendarByJames";
import ProfileModifiy from "components/users/ProfileModifiy";

function Profile() {
  const main = React.createRef();

  const [userdata, setUserdata] = useState([]);

  let current_user_pk = localStorage.getItem("user_pk");

  useEffect(() => {
    async function getuserinfo(current_user_pk) {
      fetch(`http://127.0.0.1:8000/apis/users/getuserinfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userid: current_user_pk,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log("허허", data);
          if (data.age === null) {
            data.age = "입력 필요!";
          }
          if (data.height === null) {
            data.height = "입력 필요!";
          }
          if (data.weight === null) {
            data.weight = "입력 필요!";
          }
          setUserdata(data);
        });
    }
    getuserinfo(current_user_pk);
  }, []);

  return (
    <>
      <DemoNavbar />
      <main ref={main} id="ImageLetter">
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
          <div className="profile-page">
            <section className="section mt-4">
              <Container className="pt-lg-4">
                <Card className="card-profile shadow">
                  <div className="px-4">
                    <Row className="justify-content-center">
                      <Col className="order-lg-1" lg="4">
                        <div className="card-profile-actions py-4 mt-lg-0"></div>
                      </Col>

                      {/*카드의 레이아웃 행렬 가운데 부분임 주석 풀면 가운데에 추가로 넣을수 있음*/}
                      <Col className="order-lg-2" lg="3">
                        <div className="card-profile-image2">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img src={Puang} className="rounded-circle"></img>
                          </a>
                        </div>
                      </Col>
                      <Col
                        className="order-lg-3 text-lg-right align-self-lg-center"
                        lg="4"
                      >
                        <div className="card-profile-actions py-4 mt-lg-0">
                          <Link to="/userinfo">
                            <Button className="mt-4" color="primary">
                              <div>사용자 정보 수정</div>
                            </Button>
                          </Link>
                          {/* <ProfileModifiy/> */}
                        </div>
                      </Col>
                    </Row>

                    <Row className="justify-content-center mt--5 mb--6">
                      <Col className="order-lg-1" lg="2">
                        <div
                          className="card-profile-stats d-flex justify-content-center"
                          id="ImageLetterColor"
                        >
                          <div>
                            <span className="heading">{userdata.username}</span>
                            <span className="description">이름</span>
                          </div>
                        </div>
                      </Col>
                      <Col className="order-lg-1" lg="2">
                        <div
                          className="card-profile-stats d-flex justify-content-center"
                          id="ImageLetterColor"
                        >
                          <div>
                            <span className="heading">{userdata.age}</span>
                            <span className="description">나이</span>
                          </div>
                        </div>
                        `
                      </Col>
                      <Col className="order-lg-1" lg="2">
                        <div
                          className="card-profile-stats d-flex justify-content-center"
                          id="ImageLetterColor"
                        >
                          <div>
                            <span className="heading">{userdata.height}</span>
                            <span className="description">신장</span>
                          </div>
                        </div>
                      </Col>
                      <Col className="order-lg-1" lg="2">
                        <div
                          className="card-profile-stats d-flex justify-content-center"
                          id="ImageLetterColor"
                        >
                          <div>
                            <span className="heading">{userdata.weight}</span>
                            <span className="description">체중</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <CalendarByJames />
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

export default Profile;