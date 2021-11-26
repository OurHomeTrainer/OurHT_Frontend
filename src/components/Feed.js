import React , { useState , useEffect} from 'react';
import jQuery, { data } from 'jquery';

import { Container, Row, Col } from "reactstrap";
import { Card } from 'react-bootstrap';

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import Testimg from 'components/test2.jpeg'

// 전역값
import { useUserContext } from './camera/users';

function Feed(props) {

    console.log("what? ",props.match.params.count_number);

    // 결과 표시를 위해 담아놓은 변수
    let name = 0;
    let count_number = 0;
    let picture = 0;
    const displayfeedback = [];

    // 전역
    const { user } = useUserContext();

    console.log("API 인자들", props.match.params.count_number);
      async function feedTest(count_number) {
        fetch(`http://127.0.0.1:8000/apis/users/getuserfeedback?exercise_pk=19&motion_index=${count_number}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie("csrftoken"),
                "Accept": "application/json",
            },
        })
        .then((response) => (response.json()))
        .then((data) => selectfeedback(data))   
      };
    feedTest(props.match.params.count_number);
    // useEffect(() => {
    //   console.log("Hello");
    //   let current_user;

    //   if (user === 999 || user === "999") {
    //     let temp = localStorage.getItem("saveexercisepk");
    //     current_user = temp;
    //   } else {
    //     current_user = user;
    //     localStorage.setItem("saveexercisepk", JSON.stringify(current_user));
    //   }

    //   console.log("API 인자들", props.match.params.id);
    //   async function feedTest(id) {
    //     fetch(`http://127.0.0.1:8000/apis/users/getuserfeedback?exercise_pk=19&motion_index=${id}`, {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-CSRFToken': getCookie("csrftoken"),
    //             "Accept": "application/json",
    //         },
    //     })
    //     .then((response) => (response.json()))
    //     .then((data) => setFeeds(data))   
    //   };
    // feedTest(props.match.params.id);
    // }, []);

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

    const feedbackstring = [
      ["상체에 적당히 힘을 주어 몸의 각도를 자연스럽게 유지해야 해요!", 
      "상체를 너무 앞으로 숙였어요, 배에 힘들 주어 상체를 펴주세요!"],

      ["시선은 자연스럽게 전방을 주시해주세요", 
      "얼굴이 너무 솟아있어요, 턱을 내려주세요", 
      "시선이 너무 아래를 향해있어요, 목에 많은 무게가 집중 될 수 있으니, 고개를 들어주세요"],

      ["충분한 가동범위가 나오지 않아요! 위 아래로 더 움직여 주세요", 
      "엉덩이와 무릎을 더 내린다는 느낌으로 앉아주세요!", 
      "고관절을 사용해서 깊게 앉아주세요", 
      "무릎과 엉덩이를 지면에 평행하게 만든다는 느낌으로 앉아주세요!"],

      ["무릎이 너무 앞으로 튀어나와있어요!"],

      ["무게 중심이 앞으로 쏠리면 무릎에 너무 많은 부하가 집중돼요, 엉덩이쪽으로 무게중심을 이동해주세요", 
      "무게 중심이 발의 중심으로 온다고 생각하고 움직여주세요", 
      "무게 중심이 제대로 잡혀있지 않아요! 코어 근육에 집중하면서, 무게중심의 위치를 느껴보세요"],

      ["등이 너무 굽어있어요! 어깨가 너무 안쪽으로 말리는 건 아닌지 확인해주세요", 
      "가슴을 펴서 등을 곧게 만들어 주세요", 
      "허리와 엉덩이를 뒤로 빼어 요추부분을 곧게 만들어주세요!", 
      "고관절을 사용해서 허리가 굽지 않도록 신경써주세요"]
    ]
    
    function selectfeedback(data) {
      name = data.name;
      count_number = data.count_number;
      picture = data.photo;
      const checklist = data.checklist;

      let i = 0;
      let check = [false, false, false, false, false, false];

  
      for (i = 0; i < checklist.length; i++)
      { 
        check[checklist[i].pk - 1] = true;
      }
      for (i = 0; i < 6; i++) {
        if (check[i] === false) {
          displayfeedback.push(feedbackstring[i][Math.floor(Math.random() * feedbackstring[i].length)]);
        }
      }
    }
    console.log("feedback", displayfeedback);

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
                          <span className="heading"> 분석 결과 </span>
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
                   <img src={"data:image/webp;base64," + picture} alt={name} style={{maxWidth: '100%'}}></img> 
                }
                </td>
            </tr>
            <tr>
                <th scope="row">Feedback</th>
                <td> 
                  <ul>
                    <span> test </span>
                    {displayfeedback[0]}
                  </ul>
                </td>
            </tr>
            
            <tr>
                <th scope="row">ID</th>
                <td>{props.match.params.id}</td>
            </tr>
            <tr>
                <th scope="row">Count Number</th>
                <td>{count_number}</td>
            </tr>
              </tbody>
            </table>
        <hr className="my-5" />
            </div>
      

                  
            </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
        // <div>
        // <h1>Feeeed page</h1>
        // <h1>여기는 {props.match.params.id}입니다</h1>
        // <img src={feeds.photo} ></img>
        // <h2>{feeds.count_number}</h2>
        // </div>
    );
}

export default Feed;