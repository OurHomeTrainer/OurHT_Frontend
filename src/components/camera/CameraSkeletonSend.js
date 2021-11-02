import { useRef } from "react";
import Webcam from "react-webcam";
import * as posenet from "@tensorflow-models/posenet";
import { drawKeypoints, drawSkeleton } from "../../utilities";
import jQuery from 'jquery'

function CameraSkeletonSend() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runPosenet = async () => {
        const net = await posenet.load({
            architecture: 'ResNet50',
            outputStride: 32,
            inputResolution: { width: 257, height: 200 },
            quantBytes: 2
        });
        //
        setInterval(() => {
            detect(net);
        }, 10000);
    };

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Make Detections
            const pose = await net.estimateSinglePose(video);

            //오른쪽 어깨
            var shol_x = parseFloat(pose.keypoints[6].position["x"]);
            shol_x.toFixed(2);
            const shol_y = pose.keypoints[6].position["y"];

            //오른쪽 무릎
            const knee_x = pose.keypoints[14].position["x"];
            const knee_y = pose.keypoints[14].position["y"];

            //엉덩이
            const heep_x = pose.keypoints[11].position["x"];
            const heep_y = pose.keypoints[11].position["y"];
            var diff = knee_y - shol_y;

            console.log(`어깨 x: ${shol_x}/어깨 y:${shol_y}`);
            console.log(`무릎 x: ${knee_x}/무릎 y:${knee_y}`);
            console.log(`엉덩이 x: ${heep_x}/엉덩이 y:${heep_y}`);
            /*
            var isSholCenter = false;
            var isKneeCenter = false;
            if (shol_x > 180 && shol_x < 280) {
              isSholCenter = true;
            }
            if (knee_x > 180 && knee_x < 280) {
              isKneeCenter = true;
            }
            if (isSholCenter && isKneeCenter) {
              if (diff >= 300)
                console.log("ready   diff:" + diff)
              if (diff < 300) { // 앉았을때 -> 스쿼트 했을 때
                console.log("스퀏!   diff:" + diff)
                // to do: 여기서 pose를 json형식으로 전달하기(POST 이용)
              }
            }
            */

            drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
            postimage(pose);
        }

    };

    //여기서 보내면 됨!!!
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
    }

    async function postimage(pose) {
        fetch(`http://127.0.0.1:8000/#/apis/images/getjointpoint`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie("csrftoken"),
                "Accept": "application/json",
            },
            body: JSON.stringify(pose)
        })
        console.log("보냈습니다~");
    }

    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext("2d");
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;

        drawKeypoints(pose["keypoints"], 0.6, ctx);
        drawSkeleton(pose["keypoints"], 0.7, ctx);
    };

    runPosenet();

    return (
        <div>
            <div> 비비디비오디오 </div>
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
        </div>
    )
}

export default CameraSkeletonSend;