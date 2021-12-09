import React, { useState, useEffect } from "react";
import jQuery, { data } from "jquery";

import { Button, Badge, Container, Row, Col } from "reactstrap";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

function Feed(props) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    let current_user = localStorage.getItem("saveexercisepk");
    console.log("currnet user", current_user);

    feedTest(current_user, props.match.params.count_number);
  }, [props.match.params.count_number]);

  async function feedTest(current_user, count_number) {
    fetch(
      `http://127.0.0.1:8000/apis/users/getuserfeedback?exercise_pk=${current_user}&motion_index=${count_number}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFeed(data);
      });
  }

  const feedbackstring = [
    [
      "상체에 적당히 힘을 주어 몸의 각도를 자연스럽게 유지해야 해요!",
      "상체를 너무 앞으로 숙였어요, 배에 힘들 주어 상체를 펴주세요!",
    ],

    [
      "시선은 자연스럽게 전방을 주시해주세요",
      "시선이 너무 아래를 향해있어요, 목에 많은 무게가 집중 될 수 있으니, 고개를 들어주세요",
    ],

    [
      "충분한 가동범위가 나오지 않아요! 위 아래로 더 움직여 주세요",
      "고관절을 사용해서 깊게 앉아주세요",
      "무릎과 엉덩이를 지면에 평행하게 만든다는 느낌으로 앉아주세요!",
    ],

    ["무릎이 너무 앞으로 튀어나와있어요!"],

    [
      "무게 중심이 앞으로 쏠리면 무릎에 너무 많은 부하가 집중돼요, 엉덩이쪽으로 무게중심을 이동해주세요",
      "무게 중심이 발의 중심으로 온다고 생각하고 움직여주세요",
    ],

    [
      "등이 너무 굽어있어요! 어깨가 너무 안쪽으로 말리는 건 아닌지 확인해주세요",
      "가슴을 펴서 등을 곧게 만들어 주세요",
      "고관절을 사용해서 허리가 굽지 않도록 신경써주세요",
    ],
  ];

  const displayfeedback = [];
  let i = 0;
  const checklist = feed.checklist;

  if (checklist != undefined) {
    const check = [false, false, false, false, false, false];
    for (i = 0; i < checklist.length; i++) {
      check[checklist[i].pk - 1] = true;
    }
    console.log("Check 배열", check);
    for (i = 0; i < 6; i++) {
      if (check[i] === false) {
        displayfeedback.push(
          feedbackstring[i][
            Math.floor(Math.random() * feedbackstring[i].length)
          ]
        );
      }
    }
    console.log("feedback", displayfeedback);
  }

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
        return cookieValue;
      }
    }
  }
  // feedTest();

  return (
    <>
      <DemoNavbar />
      <main className="profile-page" id="ImageLetter">
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
          <Container className="pt-lg-5">
            <Card className="bg-secondary shadow border-0">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <h3 className="display-3 mt-5 mb-5">
                          {feed.count_number} 회차 세부 피드백
                        </h3>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row "></th>

                      <td>
                        {
                          <img
                            src={"data:image/webp;base64," + feed.photo}
                            alt={feed.name}
                            style={{ maxWidth: "80%" }}
                          ></img>
                        }
                      </td>

                      <td>
                        {
                          <img
                            src={
                              "data:image/webp;base64," +
                              feed.photo_back_checked
                            }
                            alt={feed.name}
                            style={{ maxWidth: "80%" }}
                          ></img>
                        }
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Feedback</th>
                      <td colSpan="2">
                        {displayfeedback.map((feedback) => (
                          <ul>{feedback}</ul>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr className="my-5" />
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}

export default Feed;
