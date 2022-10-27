import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LiveVideo.css";
import ReactHlsPlayer from "react-hls-player";
// import LPR from "../lpr/LPR";

export default function LiveVideo() {
  //開發用URL

  // const sourceMotor = "http://192.168.195.213:8081/stream/cam4/index.m3u8";
  // const sourceCar1 = "http://192.168.195.213:8081/stream/cam1/index.m3u8";
  // const sourceCar2 = "http://192.168.195.213:8081/stream/cam2/index.m3u8";
  // const sourceCar3 = "http://192.168.195.213:8081/stream/cam3/index.m3u8";

  //現場URL
  const sourceMotor = "http://127.0.0.1:8081/stream/cam4/index.m3u8";
  const sourceCar1 = "http://127.0.0.1:8081/stream/cam1/index.m3u8";
  const sourceCar2 = "http://127.0.0.1:8081/stream/cam2/index.m3u8";
  const sourceCar3 = "http://127.0.0.1:8081/stream/cam3/index.m3u8";

  const [cam1, setCam1] = useState({});
  const [cam2, setCam2] = useState({});
  const [cam3, setCam3] = useState({});
  const [cam4, setCam4] = useState({});

  useEffect(() => {
    (async () => {
      // const res = await fetch("http://192.168.195.213:8080/lpr/cams/latest");
      const res = await fetch("http://127.0.0.1:8080/lpr/cams/latest");
      const res_tmp = await res.json();
      res_tmp.cam4.imagePath = res_tmp.cam4.imagePath.substring(1);
      res_tmp.cam1.imagePath = res_tmp.cam1.imagePath.substring(1);
      res_tmp.cam2.imagePath = res_tmp.cam2.imagePath.substring(1);
      res_tmp.cam3.imagePath = res_tmp.cam3.imagePath.substring(1);
      setCam4(res_tmp.cam4);
      setCam1(res_tmp.cam1);
      setCam2(res_tmp.cam2);
      setCam3(res_tmp.cam3);
    })();
  }, []);

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
              width={350}
              height={275}
            />
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <ReactHlsPlayer
              src={sourceCar1}
              autoPlay={true}
              muted={true}
              width={350}
              height={275}
            />
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <div className="col">
              <ReactHlsPlayer
                src={sourceCar2}
                autoPlay={true}
                muted={true}
                width={350}
                height={275}
              />
            </div>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <div className="col">
              <ReactHlsPlayer
                src={sourceCar3}
                autoPlay={true}
                muted={true}
                width={350}
                height={275}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item grid-title">
        <div className="col">車辨畫面</div>
      </div>
      <div className="grid">
        <div className="grid-item item3">
          <div>
            <img
              // src={"http://192.168.195.213:8080" + cam4.imagePath}
              src={cam4.imagePath}
              width={"100%"}
            ></img>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <img
              // src={"http://192.168.195.213:8080" + cam1.imagePath}
              src={cam1.imagePath}
              width={"100%"}
            ></img>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <img
              // src={"http://192.168.195.213:8080" + cam2.imagePath}
              src={cam2.imagePath}
              width={"100%"}
            ></img>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <img
              // src={"http://192.168.195.213:8080" + cam3.imagePath}
              src={cam3.imagePath}
              width={"100%"}
            ></img>
          </div>
        </div>
        <div className="grid-item item1">
          <div className="col">{cam4.plateNumber}</div>
        </div>
        <div className="grid-item item1">
          <div className="col">{cam1.plateNumber}</div>
        </div>
        <div className="grid-item item1">
          <div className="col">{cam2.plateNumber}</div>
        </div>
        <div className="grid-item item1">
          <div className="col">{cam3.plateNumber}</div>
        </div>
      </div>
    </div>
  );
}
