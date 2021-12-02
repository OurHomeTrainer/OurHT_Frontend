
import jQuery from 'jquery';
import React, { useState , useEffect} from "react";

// reactstrap components
import { Card, CardBody, Button, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

function Result(props) {
    
  const [feeds,setFeed]=useState([]);

  // 여기 수정해야함
  let currenturl = document.location.href;
  currenturl = currenturl.slice(34, currenturl.length);
  let current_exercise_pk = currenturl;
  localStorage.setItem("saveexercisepk", current_exercise_pk)

    useEffect(() => {
        async function feedTest() {
            fetch(`http://127.0.0.1:8000/apis/users/getuserfeedback?exercise_pk=${current_exercise_pk}&motion_index=999`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie("csrftoken"),
                    "Accept": "application/json",
                },
            })
            .then((response) => (response.json()))
            .then((data) => {
              let i = 0;
              for (i = 0; i < data.length; i++) {
                if (data[i].checklist.length >= 5) {
                  data[i].feedbackresult = "Perfect!";
                  data[i].color = "green";
                }
                else if (data[i].checklist.length <= 2) {
                  data[i].feedbackresult = "Bad :(";
                  data[i].color = "red";
                }
                else {
                  data[i].feedbackresult = "Good ~.~";
                  data[i].color = "yellow";
                }
              }
              setFeed(data)
            })
        }
        feedTest();
      }, []);

    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    };

    const handleClick = (event, id, count_number) => {
        event.preventDefault();
        props.history.push(`/result/feed/${id}/${count_number}`);
      }

    return (
        <>

          <DemoNavbar />
          <main className="profile-page">
            <section className="section-profile-cover section-shaped my-0">
              {/* background */}
              <div className="shape shape-style-1 bg-gradient-info shape-default alpha-4"/>
            </section>
  
            {/* 여기부터가 컨테이너 부분 */}
            <section className="section">
              <Container>
                <Card className="card-profile shadow mt--300">
                  <div className="px-4">
                    <Row className="justify-content-center">
                      
  
                      <Col className="order-lg-1" lg="4">
                        <div className="card-profile-stats d-flex justify-content-center">
                          <div>
                            {/* <span className="heading"> <h3>분석 결과</h3> </span> */}
                            <h4 className="display-4 mb-0">분석 결과</h4>
                          </div>
                        </div>
                      </Col>
                    </Row>               
                  </div>

                  <div className="row">
                    {feeds.map(feed => (
                        <div className="col-12 p-1 col-sm-4 p-sm-2 col-md-4 p-md-3" key={feed.id}>
                        <Card className="card-lift--hover shadow border-0">
                        <div key={feed.count_number}
                 onClick={(e) => handleClick(e, current_exercise_pk,feed.count_number)} style={{cursor: 'pointer'}}>
                                <CardBody className="card-profile-image">
                                <img src= {"data:image/webp;base64," + feed.photo} alt={feed.count_number}/>
                                    
                            <div>
                            <h5 className="text-primary text-uppercase">{feed.count_number} 회차 </h5>
                            <p className="description mt-3" style={{color:feed.color}}> {feed.feedbackresult} </p>
                            </div>
                            </CardBody>
                        </div>
                        </Card>
                        </div>
                ))}
                </div>              
                </Card>
              </Container>
            </section>
          </main>
          <SimpleFooter />
        </>
      )

}

export default Result;

