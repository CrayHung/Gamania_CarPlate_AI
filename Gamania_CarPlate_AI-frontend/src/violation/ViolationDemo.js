/***
 *
 *
 * fetch    http://192.168.195.213:8080/lpr/all
 *
 * 圖片     http://192.168.195.213:8080/jpg/20221027_154658894_RCV-5981.jpg      (將./jpg/20221027_154658894_RCV-5981.jpg前面的.去掉)
 *          上傳之前要把 192.168.195.213 > 192.168.195.213
 */
import ReactTable from "./table/ReactTable";
import { useEffect, useContext } from "react";
import { FormattedMessage } from "react-intl";
import ImgButton from "./table/ImgButton";
import { urlContext } from "../web/Root";
// import { CurrentTimeDisplay } from "video-react";
// import TimelineItem from "antd/lib/timeline/TimelineItem";
import SearchBar from "./search/SearchBar";
import { TableContext } from "../tab/Violation";

export default function ViolationDemo() {
  // const [tableData, setTableData] = useState("");
  const { tableData, setTableData } = useContext(TableContext);
  // const [tmpData, setTmpData] = useState("");

  const serverUrl = useContext(urlContext);
  // console.log('serverUrl in violationDemo')
  // console.log(serverUrl)

  const fetchurl = serverUrl + "lpr/all";
  // const fetchurl = "http://192.168.195.213:8080/lpr/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchurl);
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
          const eTime0 = data[i]["imagePath"].replace("./", "");
          data[i]["imagePath"] = eTime0;
        }
        setTableData(data);
        //setTableData([...tableData,data]);
      } catch (error) {
        console.log("error", error);
      }

      //每10秒重新抓一次資料
      // setInterval(() => {
      //   fetchData();
      //  }, 10000);
    };

    fetchData();
  }, [fetchurl, setTableData]);

  return (
    <div className="App">
      <SearchBar />
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
      <th>姓名</th>
      <th>車種</th>
      <th>
        <FormattedMessage id="recognitionTimeStr" />
      </th>
      <th>
        <FormattedMessage id="passStatus" />
      </th>
      <th>
        <FormattedMessage id="cameraId" />
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
      <td>{value.name}</td>
      <td>{value.vehicleType}</td>
      <td>{value.recognitionTimeStr}</td>
      <td>{value.passStatus}</td>
      <td>{value.cameraId}</td>
      <td>
        <ImgButton imagePath={value.imagePath} />
      </td>
    </tr>
  );
};
