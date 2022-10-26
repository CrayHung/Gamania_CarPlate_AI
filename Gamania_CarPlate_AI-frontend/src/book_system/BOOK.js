import React, { useEffect, useState } from "react";

import ReactTable from "../violation/table/ReactTable";
import { FormattedMessage } from "react-intl";

import test from './test.json';
import AddBook from './AddBook';
import WhiteBlack from './WhiteBlack'
import './BOOK.css'
// import "./LPR.css";
// import ShowImage from "./ShowImage";



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
          <FormattedMessage id="visitor-name" />
        </th>
        <th>
          <FormattedMessage id="visitor-unit" />
        </th>
        <th>
          <FormattedMessage id="visitor-vehicleType" />
        </th>
        <th>
          <FormattedMessage id="visitor-allowType" />
        </th>
        <th>
          <FormattedMessage id="visitor-note" />
        </th>
        <th>
          <FormattedMessage id="visitor-visitorStartStr" />
        </th>
        <th>
          <FormattedMessage id="visitor-visitorEndStr" />
        </th>
        <th>
          <FormattedMessage id="visitor-plateNumber" />
        </th>
      </tr>
    );
  };
  
  const tableBody = (value, index) => {
    return (
      <tr key={index}>
        <td>{value.name}</td>
        <td>{value.unit}</td>
        <td>{value.vehicleType}</td>
        <td>{value.allowType}</td>
        <td>{value.note}</td>
        <td>{value.visitorStartSt}</td>
        <td>{value.visitorEndStr}</td>        
        <td>{value.plateNumber}</td>
      </tr>
    );
  };


export default function BOOK() {
  const [tableData, setTableData] = useState(test);

  // console.log(tableData);

//   useEffect(() => {
//     (async () => {
//       const data = await fetch("https://twowayiot.com/violation/all");
//       const res = await data.json();
//       // setPost(res);
//       // console.log(res);
//       setTableData(res);
//     })();
//   }, []);

  return (
    <div className="App">
      <h1>
        <FormattedMessage id="book-table-title" />
      </h1>
 
      <div className='rowC'>
      <AddBook></AddBook>

      <WhiteBlack></WhiteBlack>
      </div>
      <ReactTable
        tableData={tableData}
        sizePerPage={sizePerPage}
        tableHeader={TableHeader}
        tableBody={tableBody}
      />
    </div>
  );
}
