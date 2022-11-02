import React, { useContext } from "react";
import "./SearchBar.css";
import { TableContext } from "../../tab/Violation";

function timeReset() {
  document.getElementById("start-time").value = "";
  document.getElementById("end-time").value = "";
}

const SearchBar = () => {
  const { setTableData } = useContext(TableContext);
  const ip = window.location.host.split(":")[0];

  const searchSubmit = async () => {
    const postData = {
      name: document.getElementById("name").value,
      plateNumber: document.getElementById("plate-number").value,
      vehicleType: document.getElementById("vehicle-type").value,
      startDate: document.getElementById("start-date").value,
      endDate: document.getElementById("end-date").value,
    };

    // console.log(postData);
    try {
      // const res = await fetch("http://192.168.195.213:8080/lpr/search", {
      const res = await fetch(`http://${ip}:8080/lpr/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      setTableData(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="grid-container">
        <div>姓名</div>
        <div>
          <input type="text" id="name"></input>
        </div>
        <div>車牌</div>
        <div>
          <input type="text" id="plate-number"></input>
        </div>
        <div>車種</div>
        <div>
          <select id="vehicle-type">
            <option selected value={""}>
              所有車種
            </option>
            <option value={"機車"}>機車</option>
            <option value={"汽車"}>汽車</option>
          </select>
        </div>
        <div>時間</div>
        <div className="date-container">
          <div>
            起 <input type={"date"} id="start-date"></input>
          </div>
          <div>
            迄 <input type={"date"} id="end-date"></input>
          </div>
          <button
            onClick={() => {
              timeReset();
            }}
          >
            重設
          </button>
        </div>
        <div>
          <div>
            <button
              onClick={() => {
                searchSubmit();
              }}
            >
              查詢
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
