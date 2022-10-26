import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LiveVideo.css";

export default function LiveVideo() {
  return (
    <div>
      <h1>This is CameraPage</h1>
      <div class="grid">
        <div class="grid-item item1 ">
          <div class="col">機車</div>
        </div>
        <div class="grid-item item2">
          <div class="col">汽車</div>
        </div>
        <div class="grid-item item3">
          <div style={{ width: 250, height: 250, textAlign: "end" }}>
            <h2>機車攝影機畫面</h2>
          </div>
        </div>
        <div class="grid-item item4">
          <div class="col">汽車畫面</div>
        </div>
        <div class="grid-item item4">
          <div class="col">汽車畫面</div>
        </div>
        <div class="grid-item item4">
          <div class="col">汽車畫面</div>
        </div>
      </div>
    </div>
  );
}
