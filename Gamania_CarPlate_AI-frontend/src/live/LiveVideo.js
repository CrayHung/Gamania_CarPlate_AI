import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LiveVideo.css";

export default function LiveVideo() {
  return (
    <div>
      <div className="grid-item grid-title">
        <div className="col">即時影像</div>
      </div>

      <div className="grid">
        <div className="grid-item item3">
          <div style={{ width: "100%", height: 250, textAlign: "center" }}>
            <h2>機車即時畫面</h2>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <h2>汽車即時畫面</h2>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <h2>汽車即時畫面</h2>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">
            <h2>汽車即時畫面</h2>
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
