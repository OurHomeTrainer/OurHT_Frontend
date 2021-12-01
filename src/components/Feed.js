import React , { useState , useEffect, useContext } from 'react';
import jQuery, { data } from 'jquery';

import { Button, Badge, Container, Row, Col } from "reactstrap";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import Testimg from 'components/test2.jpeg'

function Feed(props) {

    console.log("what? ",props.match.params.id);
    


    const [feed,setFeed]=useState([]);


    useEffect(() => {
        feedTest(props.match.params.id);
    }, []);



    async function feedTest(id) {
        fetch(`http://127.0.0.1:8000/apis/users/getuserfeedback?exercise_pk=1&motion_index=${id}`, {
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

    feedTest();

    


    


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
                            세부 피드백
                         </h3>
                            
                        </div>
                      </div>
                    </Col>
                  </Row>


                  <div>
            <table className="table">
            <tbody>

            <tr>
                <th scope="row"></th>
                <td>
                {
                   <img src={Testimg} alt={feed.name} style={{maxWidth: '100%'}}></img> 
                }
                </td>
            </tr>
            <tr>
                <th scope="row">Name</th>
                <td>{feed.name}</td>
            </tr>
            

            
            <tr>
                <th scope="row">ID</th>
                <td><Badge color="primary" pill className="badge-lg">
                            
                            {props.match.params.id}피드백내용은 이러이러이러어ㅓ합니다</Badge></td>
            </tr>
            <tr>
                <th scope="row">Count Number</th>
                <td><Badge color="success" pill className="badge-lg">여기는 어때요? 피드백내용이 나오는거</Badge></td>
            </tr>

            
            
            </tbody>
            </table>
        <hr className="my-5" />
      </div>
      

                  
                </div>
              </Card>
            </Container>


          </section>

          {/* 여기부터가 컨테이너 부분 */}
          {/* <section className="section">
            
          </section> */}
        </main>
        <SimpleFooter />
      </>
        // <div>
        // <h1>Feeeed page</h1>
        // <h1>여기는 {props.match.params.id}입니다</h1>
        // <img src={feed.photo} ></img>
        // <h2>{feed.count_number}</h2>
        


        // </div>

    );
}
export default Feed;