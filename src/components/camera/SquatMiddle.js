
import jQuery, { data } from 'jquery';
import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import { useUserContext } from './users';


// reactstrap components
import { Button, Card, Container, Row, Col,UncontrolledCarousel} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
//이미지 테스트
import Testimg from 'components/test2.jpeg'
//icon
import {BsCheckLg, BsXLg} from 'react-icons/bs';


function SquatMiddle() {

  let user_pk_temp = localStorage.getItem("user_pk");
  console.log(user_pk_temp);
  
  const { setExercisepk, exercise_pk } = useUserContext();

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
                        "userid": user_pk_temp,
                        /* 이 자리 로그인 하면 유저 pk가 들어와야 함! */
                    })
                })
                
                
            .then((response) => (response.json()))
            .then((data) => {
              localStorage.setItem("saveexercisepk", JSON.stringify(data)); 
            })
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
                          <div id="ImageLetter">
                          <h3 className="display-3 mt-5 mb-5">
                            시작 전 주의사항
                         </h3>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                          <Col className="text-center">
                          <div>
                        <img src={Testimg} style={{maxWidth: '80%'}}></img> 
                        </div>
                              </Col>
                          <Col className="text-center">
                              <div>
                                <img src={Testimg} style={{maxWidth: '80%'}}></img> 
                                </div>
                                </Col>
                          
                      </Row>

                      <div className="text-center mt-4">
                    <Row>
                          <Col className="text-center">
                       

                              <BsCheckLg className="icon" color="green"/>

                              </Col>
                          
                          <Col className="text-center">
                      
                              
                              <BsXLg className="icon" color="red"/>


                              </Col>
                      </Row>
                    </div>


                      <div className="text-center mt-5">
                    <h5 className="text-primary mt-3">OurHT는 측면 운동 자세를 통해 관절 분석과 등의 곡률을 계산하여 정확한 자세 판단을 진행합니다.</h5>
                     
                    </div>

                    


                


                    {/* <UncontrolledCarousel items={items} /> */}
                    
                    <div className="text-center mt-1">
                    
                    <h5 className="text-primary mt-1">위와 같이 측면을 향하고 발목이 보이도록 위치해주세요</h5>
                    </div>
                    <div className="text-center mt-5 mb-5">
                        
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
  
            {/* 여기부터가 컨테이너 부분 */}
            {/* <section className="section section-lg pt-lg-0 mt--300">
              
            </section> */}
          </main>
          <SimpleFooter />
        </>
      )

}




export default SquatMiddle;

