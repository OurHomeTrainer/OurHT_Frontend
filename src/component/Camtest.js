import { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import jQuery from "jquery";

function Camtest() {

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const capture = useCallback(
        () => {
          const imageUrl = webcamRef.current.capture();
        },
        [webcamRef]
    );
    
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

    const capture_url = async () => {
        const imageUrl = webcamRef.current.getScreenshot();
        let resultimg = document.getElementById("CaptureResult");
        resultimg.src = imageUrl;
        postimage(imageUrl);
        return imageUrl;
    };

    async function postimage(url){
        fetch(`/api/images/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie("csrftoken"),
                "Accept": "application/json",
            },
            // body: JSON.stringify({
            //     'url': url,
            //     'name': "test"
            // })
            body: JSON.stringify(url)
        })
        console.log(url);
    }

    return (
        <div>
            <div>
            <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{
                width:640,
                height:480,
            }}
            />
            </div>

            <button onClick={capture_url}> Capture Photo </button>
            <img id="CaptureResult"></img>
        </div>
    )
}

export default Camtest;