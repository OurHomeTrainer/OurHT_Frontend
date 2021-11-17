
// import { useRef } from "react";

import jQuery, { data } from 'jquery';
import React, { useState , useRef, useEffect, Component } from "react";


// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";




function Result() {

    const [photo,setPhoto]=useState([]);
    const [check,setCheck]=useState([]);
    const [feeds,setFeed]=useState([]);

    useEffect(() => {
        feedTest()
      }, [feeds]);



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
    

    async function feedTest() {
        fetch(`http://127.0.0.1:8000/apis/users/getuserfeedback?username=quad&date=2021-11-15T08:50:05.000Z`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie("csrftoken"),
                "Accept": "application/json",
            },
        
        })
        
        .then((response) => (response.json()))
        .then((data) => setFeed(data))
        //.then((responseData) => setFeed(responseData[0]))
        //.then((responseData) => console.log(responseData[0].checklist))
        //.then((responseData) => {setCheck(responseData[0].checklist);})
        //.then((responseData) => {setPhoto(responseData[0].photo);})
    }
    feedTest();



    // fetch(`http://127.0.0.1:8000/apis/users/getuserfeedback?username=quad&date=2021-11-15T08:50:05.000Z`)
    // .then(res=>res.json())
    // .then(res=>console.log(res))

    // fetch(`http://127.0.0.1:8000/apis/users/getexercise?username=quad`)
    // .then(res=>res.json())
    // .then(res=>console.log(res))

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
                      
                      하윙
                      {/* {feeds} */}
                      {/* <img
                      src={photo}
                      />
                      {check} */}


                      <ul>
                          {feeds.map(feed=>(
                              <li key={feed.id}>
                                  <img src={feed.photo} alt={feed.checklist}/>
                                  <span>{feed.checklist}</span>
                                  </li>
                          ))}
                      </ul>
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




export default Result;

