
// import { useRef } from "react";
import Webcam from "react-webcam";
import * as posenet from "@tensorflow-models/posenet";
import { drawKeypoints, drawSkeleton } from "../../utilities";
import jQuery, { data } from 'jquery';
import React, { useState , useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
//전역
import { UserContext } from "../../store/users.js";

function InitialCheckSquat() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [tData, setData] = useState("시작!");
  const context = useContext(UserContext);

  let count = 1;
  let is_person_gone_to_stand = "no";
  let pose_list = [];
  let url_list = [];

  const RunPosenet = async () => {

    useEffect(()=>{  
      const interval = setInterval(()=>{
        if (net!=undefined){
          detect(net);
        }
      },200);
    
      //console.log({tData});
      return () => clearInterval(interval);
    },[net]);  

    const net = await posenet.load({
        architecture: 'ResNet50',
        outputStride: 32,
        inputResolution: { width: 257, height: 200 },
        quantBytes: 2
    });
  };

  const detect = async (net) => {
    if (webcamRef.current.video.readyState === 4) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Make Detections
      const pose = await net.estimateSinglePose(video);
      const imageUrl = webcamRef.current.getScreenshot();

      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);

      // 샘플링 로직
      const camSetFlag = isCameraSetted(pose, videoWidth);
      if (camSetFlag == true) {
        const squat_state = returnSquatState(pose);
        if (squat_state == "squat") {
          pose_list.push(pose);
          url_list.push(imageUrl);
          is_person_gone_to_stand = "no";
        } 
        else {
          if (squat_state == "stand") {
            is_person_gone_to_stand = "yes";
          }
          if (is_person_gone_to_stand == "yes") {
            let pose_list_for_hip_y = [];
            for (let i = 0; i < pose_list.length; i++) {
              pose_list_for_hip_y.push(pose_list[i]["keypoints"][11]["position"]["y"])
            }
            const max_hip_y = Math.max(...pose_list_for_hip_y);
            let max_hip_y_index;
            for (let i = 0; i < pose_list_for_hip_y.length; i++) {
              if (max_hip_y == pose_list_for_hip_y[i]) {
                max_hip_y_index = i;
              }
            }

            const sampling_skel_data = pose_list[max_hip_y_index];
            const sampling_image_data = url_list[max_hip_y_index];

            Postimage(sampling_skel_data, sampling_image_data);

            pose_list.length = 0;
            url_list.length = 0;
          }
        }
      }
    }
  };

  function isCameraSetted(data, camera_width) {
    const mid = camera_width / 2;
    let is_ankle_show = false;
    let is_ankle_mid = false;
    let is_shoulder_sideview = false;

    const left_ankle_x = data["keypoints"][15]["position"]["x"];
    const left_ankle_y = data["keypoints"][15]["position"]["y"];

    const right_ankle_x = data["keypoints"][16]["position"]["x"];
    const right_ankle_y = data["keypoints"][16]["position"]["y"];

    const left_shoulder_x = data["keypoints"][5]["position"]["x"];
    const right_shoulder_x = data["keypoints"][6]["position"]["x"];

    const mis_align = Math.abs(left_shoulder_x - right_shoulder_x);

    const ankle_x = (left_ankle_x + right_ankle_x) / 2;
    const ankle_y = (left_ankle_y + right_ankle_y) / 2;

    // 발목 보이는지 체크
    const below_ankle = 480 - ankle_y;
    console.log("발목 아래 공간: ",below_ankle);
    if (below_ankle > 20) {
        is_ankle_show = true;
        console.log("1-1-1: 발목이 보여요");
        if (mid - 100 < ankle_x < mid + 100) {
          is_ankle_mid = true;
          console.log("1-1-2: 중앙정렬 완료");
        }
        else {
            is_ankle_mid = false;
            console.log("발목이 중앙에 오도록 하세요!");
        }
    }
    else {
        is_ankle_show = false;
        console.log("발목이 안 보여요!");
    }

    // 어깨의 측면view 정렬을 위해
    console.log(mis_align)
    if (mis_align < 50) {
        is_shoulder_sideview = true;
        console.log("1-1-3: 측면으로 잘 섰습니다");
    }
    else {
        is_shoulder_sideview = false;
        console.log("몸을 틀어, 측면이 잘 보이도록 조정해주세요!");
    }

    // 최종 판단
    if (is_ankle_mid && is_shoulder_sideview == true) {
        console.log("1-1: 카메라 세팅 완료");
        return true;
    }
    else {
        return false;
    }
  }

  function returnSquatState(data) {
    // 좌표 받아오기
    const left_hip = data["keypoints"][11]["position"];
    const right_hip = data["keypoints"][12]["position"];
    const left_knee = data["keypoints"][13]["position"];
    const right_knee = data["keypoints"][14]["position"];

    // 관절 좌, 우 중심점 찾기
    let hip = [
        (left_hip["x"] + right_hip["x"]) / 2,
        (left_hip["y"] + right_hip["y"]) / 2,
    ];
    let knee = [
        (left_knee["x"] + right_knee["x"]) / 2,
        (left_knee["y"] + right_knee["y"]) / 2,
    ];

    // extra_point=[hip의 x, knee의 y]
    // 즉, hip에서 수직으로 선 긋고, knee에서 수평으로 선 그엇을때 만나는 점
    let extra_point = [hip[0], knee[1]];
    let angle = calculate_angle(hip, knee, extra_point);

    if (hip[1] < knee[1]){  // 일반적인 경우 --> hip의 y좌표가 작다.
        if (angle < 20) {
            console.log("squat");
            return "squat";
        }
        else if (angle > 80) {
            console.log("stand");
            return "stand";
        }
        else {
            console.log("ongoing");
            return "ongoing";
        }
    }
    else {                  // 가동범위가 좋아서, 깊게 앉은 경우 --> hip의 y좌표가 더 커진다.
        console.log("squat");
        return "squat";
    }
  }

  function calculate_angle(a, b, c) {
    
    const radians = Math.atan2(c[1] - b[1], c[0] - b[0]) - Math.atan2(a[1] - b[1], a[0] - b[0]);
    let angle = Math.abs(radians * 180.0 / Math.PI);

    if (angle > 180.0) {
      angle = 360 - angle;
    }

    return angle;
  }

  // CSRF Token 처리 함수, POST 요청시 반드시 필요함! 
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
      
  async function Postimage(pose, imageUrl) {
    console.log(pose);
    fetch(`http://127.0.0.1:8000/apis/images/getjointpoint`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie("csrftoken"),
          "Accept": "application/json",
      },
      body: JSON.stringify({
        'skeletonpoint': pose,
        'url': imageUrl,
        'count': count,
        // 'exercise_pk':exercise_pk,
      })
    })
    .then((response) => (response.json()))
    .then((data) => setData(data))

    count += 1;
  }

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
      const ctx = canvas.current.getContext("2d");
      canvas.current.width = videoWidth;
      canvas.current.height = videoHeight;

      drawKeypoints(pose["keypoints"], 0.6, ctx);
      drawSkeleton(pose["keypoints"], 0.7, ctx);
  };

  RunPosenet();

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
                          <span className="heading">{tData}</span>
                          <span className="description">측면 정렬 상태 </span>
                        </div>
                      </div>
                    </Col>


                  </Row>
                  <div className="text-center mt-5">  
                    Test
                  </div>
                  
                  <div>
                          <Webcam
                      ref={webcamRef}
                      style={{
                          position: "absolute",
                          marginLeft: "auto",
                          marginRight: "auto",
                          left: 0,
                          right: 0,
                          textAlign: "center",
                          zindex: 9,
                          width: 640,
                          height: 480,
                      }}
                  />
                  <canvas
                      ref={canvasRef}
                      style={{
                          position: "relative",
                          marginLeft: "auto",
                          marginRight: "auto",
                          left: 0,
                          right: 0,
                          textAlign: "center",
                          zindex: 9,
                          width: 640,
                          height: 480,
                      }}
                  />
                  </div>
                  <span>
                  <Link to="result">
                    <Button
                      className="mt-4"
                      color="primary"
                    >
                      결과보기
                      {/* {context.pk} */}
                    </Button>
                  </Link>
                  </span>
                  
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    )
}

export default InitialCheckSquat;

