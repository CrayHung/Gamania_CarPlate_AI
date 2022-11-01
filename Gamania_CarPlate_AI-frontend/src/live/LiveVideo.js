import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LiveVideo.css";
import ReactHlsPlayer from "react-hls-player";
// import "antd/dist/antd.css";
import MyModal from "./MyModal";
// import LPR from "../lpr/LPR";

export default function LiveVideo() {
  //開發用URL

  // const sourceMotor = "http://192.168.195.213:8081/stream/cam4/index.m3u8";
  // const sourceCar1 = "http://192.168.195.213:8081/stream/cam1/index.m3u8";
  // const sourceCar2 = "http://192.168.195.213:8081/stream/cam2/index.m3u8";
  // const sourceCar3 = "http://192.168.195.213:8081/stream/cam3/index.m3u8";

  const ip = window.location.host.split(":")[0];

  // //現場URL
  const sourceMotor = `http://${ip}:8081/stream/cam4/index.m3u8`;
  const sourceCar1 = `http://${ip}:8081/stream/cam1/index.m3u8`;
  const sourceCar2 = `http://${ip}:8081/stream/cam2/index.m3u8`;
  const sourceCar3 = `http://${ip}:8081/stream/cam3/index.m3u8`;

  // console.log(sourceMotor);

  const cam_update = async () => {
    // const res = await fetch("http://192.168.195.213:8080/lpr/cams/latest");
    const res = await fetch(`http://${ip}:8080/lpr/cams/latest`);
    const res_tmp = await res.json();
    res_tmp.cam4.imagePath = res_tmp.cam4.imagePath.substring(1);
    res_tmp.cam1.imagePath = res_tmp.cam1.imagePath.substring(1);
    res_tmp.cam2.imagePath = res_tmp.cam2.imagePath.substring(1);
    res_tmp.cam3.imagePath = res_tmp.cam3.imagePath.substring(1);

    // lpr image
    const imgCam4 = document.getElementById("image-cam4");
    const imgCam1 = document.getElementById("image-cam1");
    const imgCam2 = document.getElementById("image-cam2");
    const imgCam3 = document.getElementById("image-cam3");
    imgCam4.src = `http://${ip}:8080${res_tmp.cam4.imagePath}`;
    imgCam1.src = `http://${ip}:8080${res_tmp.cam1.imagePath}`;
    imgCam2.src = `http://${ip}:8080${res_tmp.cam2.imagePath}`;
    imgCam3.src = `http://${ip}:8080${res_tmp.cam3.imagePath}`;

    // imgCam4.src = `http://192.168.195.213:8080${res_tmp.cam4.imagePath}`;
    // imgCam1.src = `http://192.168.195.213:8080${res_tmp.cam1.imagePath}`;
    // imgCam2.src = `http://192.168.195.213:8080${res_tmp.cam2.imagePath}`;
    // imgCam3.src = `http://192.168.195.213:8080${res_tmp.cam3.imagePath}`;

    // lpr number
    const numberCam4 = document.getElementById("number-cam4");
    const numberCam1 = document.getElementById("number-cam1");
    const numberCam2 = document.getElementById("number-cam2");
    const numberCam3 = document.getElementById("number-cam3");
    numberCam4.innerHTML = res_tmp.cam4.plateNumber;
    numberCam1.innerHTML = res_tmp.cam1.plateNumber;
    numberCam2.innerHTML = res_tmp.cam2.plateNumber;
    numberCam3.innerHTML = res_tmp.cam3.plateNumber;
  };

  useEffect(() => {
    cam_update();

    // const wsUrl = `ws://192.168.195.213:8080/ws`;
    const wsUrl = `ws://${ip}:8080/ws`;

    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log(`connected to ${wsUrl}`);
    };

    ws.onmessage = (msg) => {
      const data = msg.data;
      if (data === "update") {
        // console.log(data);
        cam_update();
      }
    };
  }, []);

  //antd Modal

  return (
    <div>
      <div className="grid-item grid-title">
        <div className="col">即時影像</div>
      </div>

      <div className="grid">
        <div className="grid-item item3">
          <div className="col">
            <ReactHlsPlayer
              src={sourceMotor}
              autoPlay={true}
              muted={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <ReactHlsPlayer
              src={sourceCar1}
              autoPlay={true}
              muted={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <ReactHlsPlayer
              src={sourceCar2}
              autoPlay={true}
              muted={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <ReactHlsPlayer
              src={sourceCar3}
              autoPlay={true}
              muted={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
      <div className="grid-item grid-title">
        <div className="col">車辨畫面</div>
      </div>
      <div className="grid">
        <div className="grid-item item1">
          <div className="col">機車鏡頭</div>
        </div>
        <div className="grid-item item1">
          <div className="col">汽車鏡頭左</div>
        </div>
        <div className="grid-item item1">
          <div className="col">汽車鏡頭右</div>
        </div>
        <div className="grid-item item1">
          <div className="col">汽車鏡頭（車尾）</div>
        </div>
      </div>
      <div className="grid">
        <div
          className="grid-item item3"
          style={{ width: "100%", height: "100%" }}
        >
          <div>
            {/* document.getElementById("image-cam4").src */}
            <MyModal imageId={"image-cam4"} />
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <MyModal imageId={"image-cam1"} />
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <MyModal imageId={"image-cam2"} />
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <MyModal imageId={"image-cam3"} />
          </div>
        </div>
        <div className="grid-item item1">
          <div className="col" id="number-cam4"></div>
        </div>
        <div className="grid-item item1">
          <div className="col" id="number-cam1"></div>
        </div>
        <div className="grid-item item1">
          <div className="col" id="number-cam2"></div>
        </div>
        <div className="grid-item item1">
          <div className="col" id="number-cam3"></div>
        </div>
      </div>
    </div>
  );
}
