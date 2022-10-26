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
        <div className="grid-item item1 ">
          <div className="col">機車</div>
        </div>
        <div className="grid-item item2">
          <div className="col">汽車</div>
        </div>
        <div className="grid-item item3">
          <div style={{ width: 250, height: 250, textAlign: "end" }}>
            <h2>機車即時畫面</h2>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">汽車即時畫面</div>
        </div>
        <div className="grid-item item4">
          <div className="col">汽車即時畫面</div>
        </div>
        <div className="grid-item item4">
          <div className="col">汽車即時畫面</div>
        </div>
      </div>
      <div className="grid grid-item grid-title">
        <div className="col">車辨畫面</div>
      </div>
      <div className="grid">
        <div className="grid-item item3">
          <div style={{ width: 250, height: 250, textAlign: "end" }}>
            <h2>機車車辨畫面</h2>
          </div>
        </div>
        <div className="grid-item item4">
          <div className="col">汽車車辨畫面</div>
        </div>
        <div className="grid-item item4">
          <div className="col">汽車車辨畫面</div>
        </div>
        <div className="grid-item item4">
          <div className="col">汽車車辨畫面</div>
        </div>
      </div>
    </div>
  );
}
