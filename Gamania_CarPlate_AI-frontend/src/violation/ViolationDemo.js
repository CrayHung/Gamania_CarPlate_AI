/***
 * 
 * 
 * fetch    http://192.168.195.213:8080/lpr/all
 * 
 * 圖片     http://192.168.195.213:8080/jpg/20221027_154658894_RCV-5981.jpg      (將./jpg/20221027_154658894_RCV-5981.jpg前面的.去掉)
 *          上傳之前要把 192.168.195.213 > 127.0.0.1
 */
import ReactTable from "./table/ReactTable";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import ImgButton from "./table/ImgButton";






export default function ViolationDemo() {
  const [tableData, setTableData] = useState("");




  useEffect(() => {
    const url = "http://192.168.195.213:8080/lpr/all";

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            for (let i = 0; i < data.length; i++) {
              const eTime0 = data[i]["imagePath"].replace("./", "/");
              data[i]["imagePath"] = eTime0;
            }
          
            setTableData(data);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);
console.log(tableData);






  return (
    <div className="App">
      <h1>
        <FormattedMessage id="record-table-title" />
      </h1>
      <ReactTable
        tableData={tableData}
        sizePerPage={sizePerPage}
        tableHeader={TableHeader}
        tableBody={tableBody}
      />
    </div>
  );
}


const sizePerPage = 10;

const TableHeader = () => {
  return (
    <tr>
      <th>
        <FormattedMessage id="visitor-plateNumber" />
      </th>
      <th>
        <FormattedMessage id="recognitionTimeStr" />
      </th>
      <th>
        <FormattedMessage id="passStatus"  />
      </th>
      <th>
        <FormattedMessage id="cameraId"  />
      </th>

      <th>
        <FormattedMessage id="table-th7" />
      </th>



    </tr>
  );
};

const tableBody = (value, index) => {

  return (
    <tr key={index}>
      <td>{value.plateNumber}</td>
      <td>{value.recognitionTimeStr}</td>
      <td>{value.passStatus}</td>
      <td>{value.cameraId}</td>
      <td>
        <ImgButton imagePath={value.imagePath} />
      </td>

    </tr>
  );
};

