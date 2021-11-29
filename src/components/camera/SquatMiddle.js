
// import { useRef } from "react";

import jQuery, { data } from 'jquery';
import React, { useState , useRef, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { useUserContext } from './users';


// reactstrap components
import { Button, Card, Container, Row, Col,UncontrolledCarousel} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
//이미지 테스트
import Testimg from 'components/test2.jpeg'


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
    const items = [
        {
          src: Testimg,
          altText: '',
          caption: '',
          header: ''
        },
        {
          src: Testimg,
          altText: '',
          caption: '',
          header: ''
        }
      ];


    

    
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
            <section className="section section-lg pt-lg-0 mt--300">
              <Container>
                <Card className="card-profile shadow mt--100">
                  <div className="px-4">
                    <Row className="justify-content-center">
                      
  
                      <Col className="order-lg-1" lg="4">
                        <div className="card-profile-stats d-flex justify-content-center">
                          <div>
                          <h3 className="display-4 mb-0">
                            스쿼트 가이드
                         </h3>
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
                        <h4 className="display-4 mb-0">OurHT는 자세분석과 등의 곡률을 계산하여 정확한</h4>
                       
                        {/* <span>{user}</span> */}
                    </div>

                    <div style={{
                       marginLeft: "auto",
                      marginRight: "auto",
                      position: "relative",
                      width:"50%"
                  }} >
                    <UncontrolledCarousel items={items} />
                    </div>
                    <div className="text-center mt-1">
                    
                    <h5 className="display-4 mb-0">위와 같이 측면을 향하도록 서주세요</h5>
                    </div>
                    <div className="text-center mt-5">
                        <span>{user}</span>
                        <Link to="squat-page">
                            <Button
                              className="mt-4"
                              color="default"
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

