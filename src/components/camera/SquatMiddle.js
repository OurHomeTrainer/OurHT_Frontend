
// import { useRef } from "react";

import jQuery, { data } from 'jquery';
import React, { useState , useRef, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { useUserContext } from './users';


// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";


function SquatMiddle() {


    const { setUser, user } = useUserContext();
    
    useEffect(() => {
        async function makePk() {
            
                fetch(`http://127.0.0.1:8000/apis/users/createexercise`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCookie("csrftoken"),
                        "Accept": "application/json",
                    },
                    body: JSON.stringify({
                        "userid": 1,
                    })
                })
                
                
            .then((response) => (response.json()))
            .then((data) => {
                setUser(data)
            })
            //.then((data) => console.log(data))

            //.then((responseData) => setFeed(responseData[0]))
            //.then((responseData) => console.log(responseData))
            //.then((responseData) => {setCheck(responseData[0].checklist);})
            //.then((responseData) => {setPhoto(responseData[0].photo);})
        }
        makePk();
        
      }, [data]);



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
                            <span className="heading"> 스쿼트는 실시간으로 Perfect, Good, Bad로 상태를 ~ </span>
                          </div>
                          {/* <div>
                            <span className="heading">10</span>
                            <span className="description">분석결과</span>
                          </div>
                          <div>
                            <span className="heading">890</span>
                            <span className="description">점수</span>
                          </div> */}
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center mt-5">
                        <span>안녕!</span>
                        <span>더꾸며봅시다</span>
                        {/* <span>{user}</span> */}
                    </div>
                    <div className="text-center mt-5">
                        <span>{user}</span>
                        <Link to="squat-page">
                            <Button
                              className="mt-4"
                              color="primary"
                              position="center"
                              
                            >
                              시작하기
                            </Button>
                          </Link>
                        
                    </div>
                    


                        
                    
                  </div>
                </Card>
              </Container>
            </section>
          </main>
          <SimpleFooter />
        </>
      )

}




export default SquatMiddle;

