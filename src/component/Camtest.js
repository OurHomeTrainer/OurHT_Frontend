import { useRef, useCallback } from "react";
import Webcam from "react-webcam";

function Camtest() {

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const capture = useCallback(
        () => {
          const imageUrl = webcamRef.current.capture();
        },
        [webcamRef]
    );

    const capture_url = async () => {
        const imageUrl = webcamRef.current.getScreenshot();
        console.log('👂👂 Image saved to', imageUrl);
        let resultimg = document.getElementById("CaptureResult");
        resultimg.src = imageUrl;
        postimage(imageUrl);
        return imageUrl;
    };

    //let url = capture_url();
    async function postimage(url){
        fetch(`/api/images/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
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