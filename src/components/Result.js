
import jQuery from 'jquery';
import React, { useState , useEffect, useParams} from "react";

// reactstrap components
import { Card, CardBody, Button, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

function Result(props) {
    
  const [feeds,setFeed]=useState([]);

  let currenturl = document.location.href;
  currenturl = currenturl.slice(currenturl.length - 2, currenturl.length);
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
            .then((data) => setFeed(data))
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
        console.log(event, id, count_number);
        event.preventDefault();
        props.history.push(`/result/feed/${id}/${count_number}`);
      }

    console.log("feeds",feeds);

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

              <div className="profile-page" >
              <section className="section mt-3">
              <Container className="pt-lg-5">
                <Card className="card-profile shadow pb-3 px-3 ">
                  <div className="px-4">
                    <Row className="justify-content-center">
                      <Col className="order-lg-1" lg="4">
                        <div className="card-profile-stats d-flex justify-content-center">
                          <div>
                            {/* <span className="heading"> <h3>분석 결과</h3> </span> */}
                            <h4 className="display-4 mt-3 mb-2">분석 결과</h4>
                          </div>
                        </div>
                      </Col>
                    </Row> 
                    <Row className="justify-content-center">
                      <Col className="order-lg-1">
                        <div className="card-profile-stats d-flex justify-content-center">
                          <div>
                            {/* <span className="heading"> <h3>분석 결과</h3> </span> */}
                            <h4 className="display-5 mt--3 mb-3">총 {feeds.length}회의 운동을 수행하였습니다!</h4>
                          </div>
                        </div>
                      </Col>
                    </Row>                 
                  </div>

                  <div className="row">
                    {feeds.map(feed => (
                        <div className="col-12 p-1 col-sm-4 p-sm-2 col-md-4 p-md-3" key={feed.id}>
                        <Card className="card-lift--hover shadow border-0">
                        <div key={feed.id}
                 onClick={(e) => handleClick(e, current_exercise_pk,feed.count_number)} style={{cursor: 'pointer'}}>
                            {/* <img src={feed.phot }
                                style={{width: '100%'}}></img> */}
                                <CardBody className="card-profile-image pd-10" >
                                <img src= {"data:image/webp;base64," + feed.photo} alt={feed.count_number}>
                                    </img>
                                    
                            <div>
                            <h5 className="text-primary text-uppercase text-center mt-5">{feed.count_number} 회차 </h5>
                            <p className="description text-center mt-3" id="ImageLetterColor">PERFECT!{feed.check_item_name}</p>
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
            </div>



            </section>
            
  
            {/* 여기부터가 컨테이너 부분 */}
           
          </main>
          <SimpleFooter />
        </>
      )

}

export default Result;

