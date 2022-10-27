import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LiveVideo.css";
import ReactHlsPlayer from "react-hls-player";

export default function LiveVideo() {
  const sourceMotor = "http://192.168.195.213:8081/stream/cam4/index.m3u8"; //輸入前端的串流URL
  const sourceCar1 = "http://192.168.195.213:8081/stream/cam1/index.m3u8";
  const sourceCar2 = "http://192.168.195.213:8081/stream/cam2/index.m3u8";
  const sourceCar3 = "http://192.168.195.213:8081/stream/cam3/index.m3u8";

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
          <div style={{ width: "100%", height: 250, textAlign: "center" }}>
            <h2>機車車辨畫面</h2>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <h2>汽車車辨畫面</h2>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <h2>汽車車辨畫面</h2>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <h2>汽車車辨畫面</h2>
          </div>
        </div>
        <div className="grid-item item1">
          <div className="col">車牌號碼</div>
        </div>
        <div className="grid-item item1">
          <div className="col">車牌號碼</div>
        </div>
        <div className="grid-item item1">
          <div className="col">車牌號碼</div>
        </div>
        <div className="grid-item item1">
          <div className="col">車牌號碼</div>
        </div>
      </div>
    </div>
  );
}
