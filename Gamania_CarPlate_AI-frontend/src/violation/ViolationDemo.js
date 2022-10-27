/***
 * 
 * 
 * fetch 過去的通行紀錄
 * 
 */
import ReactTable from "./table/ReactTable";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import ImgButton from "./table/ImgButton";
import VideoButton from "./table/VideoButton";

import test from '../book_system/test.json';



/* Data generator */
// function usersGererator(size) {
//   let items = [];
//   for (let i = 0; i < size; i++) {
//     items.push({ id: i + 1, name: `Name ${i + 1}`, age: 18 + i });
//   }
//   return items;
// }

/* Parameter */
// const tableData = usersGererator(100);

const sizePerPage = 10;

const TableHeader = () => {
  return (
    <tr>
      <th>
        <FormattedMessage id="visitor-unit" />
      </th>
      <th>
        <FormattedMessage id="visitor-name" />
      </th>
      <th>
        <FormattedMessage id="visitor-vehicleType" />
      </th>
      <th>
        <FormattedMessage id="visitor-allowType"  />
      </th>
      <th>
        <FormattedMessage id="visitor-plateNumber" />
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
      <td>{value.unit}</td>
      <td>{value.name}</td>
      <td>{value.vehicleType}</td>
      <td>{value.allowType}</td>
      <td>{value.plateNumber}</td>
      <td>
        <ImgButton imgPath={value.imgPath} />
      </td>

    </tr>
  );
};

export default function ViolationDemo() {
  const [tableData, setTableData] = useState(test);

  // useEffect(() => {
  //   (async () => {
  //     const data = await fetch("https://twowayiot.com/violation/all");
  //     const res = await data.json();
  //     // setPost(res);
  //     // console.log(res);
  //     setTableData(res);
  //   })();
  // }, []);

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
