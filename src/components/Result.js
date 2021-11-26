
import jQuery, { data } from 'jquery';
import React, { useState , useEffect} from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { Card} from 'react-bootstrap';

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// 전역값
import { useUserContext } from './camera/users';

function Result(props) {

  // 전역
  const { user } = useUserContext();
    
  const [feeds,setFeed]=useState([]);

    useEffect(() => {

      let current_user;

      if (user == 999) {
        let temp = localStorage.getItem("saveexercisepk");
        current_user = temp;
      } else {
        current_user = user;
        localStorage.setItem("saveexercisepk", JSON.stringify(current_user));
      }

        async function feedTest() {
            fetch(`http://127.0.0.1:8000/apis/users/getuserfeedback?exercise_pk=${current_user}&motion_index=999`, {
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
      }, [user]);

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

    const handleClick = (event, id) => {
        console.log(event, id);
        event.preventDefault();
        props.history.push(`/result/feed/${id}`);
      }
    
    return (
        <>

          <DemoNavbar />
          <main className="profile-page">
            <section className="section-profile-cover section-shaped my-0">
              {/* background */}
              <div className="shape shape-style-1 bg-gradient-info shape-default alpha-4">
  
              </div>
  
  
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
                            <span className="heading"> 분석 결과 </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center mt-5">
                      <Row>
                          <Col className="text-center">사진</Col>
                          <Col className="text-center">횟수</Col>
                          <Col className="text-center">피드백</Col>
                      </Row>
                      


                      <ul className="img-box">
                          {feeds.map(feed=>(
                              <li key={feed.id} className="row align-items-center"> 
                                <div className="col-3 py-5">
                                  {/* <img src={feed.photo} ></img> */}
                                </div>
                                
                                  
                                  <span className="col">{feed.count_number}</span>
                                  {/* <span className="col">{feed.checklist}</span> */}
                                  <span className="col">
                                      {feed.checklist.map((checklist=>
                                        <li key={checklist.id} className="row align-items-center">
                                            <span className="col">{checklist.check_item_name}</span>
                                            </li>
                                            ))}
                                      </span>
                                  
                                  </li>
                          ))}
                      </ul>
                    </div>
                    
                  </div>
                  


                  <div className="row">
                    {feeds.map(feed => (
                        <div className="col-12 p-1 col-sm-4 p-sm-2 col-md-4 p-md-3" key={feed.id}>
                        <div className="card" key={feed.id}
                 onClick={(e) => handleClick(e, feed.id)} style={{cursor: 'pointer'}}>
                            <img src={"data:image/webp;base64," + feed.photo}
                                style={{width: '100%'}}></img>
                                {/* <img src= {Testimg} alt={feed.count_number}>
                                    </img> */}
                            <div className="card-body">
                            <h5 className="card-title">{feed.count_number} 회차 </h5>
                            <p className="card-text">PERFECT!{feed.check_item_name}</p>
                            </div>
                        </div>
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

