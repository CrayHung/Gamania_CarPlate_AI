/***
 * 
 * 
 * 改URL  let url= "http://192.168.195.213:8080/allow/add";
 *   // const [tableData, setTableData] = useState(null);
 * 
 */
import React, { useEffect, useState } from "react";

import { FormattedMessage } from "react-intl";

// import test from './test.json';
import AddBook from './AddBook';
import AddWhite from './AddWhite'
import AddBlack from "./AddBlack";
import './BOOK.css'
import BookList from "./BookList";





export default function BOOK() {


  // const [data, setData] = useState(null);
  // const [tableData, setTableData] = useState(test);
  // const [bookData, setBookData] = useState();


  /**
   * 一連進來就去抓全部資料 , 全部資料存在tableData , 預約名單存在bookData
   */


//    useEffect(() => {
//     const url = "http://192.168.195.213:8080/allow/all";

//     const fetchData = async () => {
//         try {
//             const response = await fetch(url);
//             const json = await response.json();
//             console.log(json);
//             setTableData(json);
//         } catch (error) {
//             console.log("error", error);
//         }
//     };

//     fetchData();
//     console.log(tableData);
// }, []);






  /**去掉重複車牌 */
    // const data = ori_data.flitter((item,index,arr)=>{
    //   return arr.indexOf(item).plateNumber === index
    // });



  /**不顯示NULL的車牌 */
  // const data = ori_data.filter(function (item) {
  //   return item.plateNumber !== "NULL"
  // });


  /**倒序排列 */
    // const tmp_arr = []
    // for (let i = 0; i < data.length; i++) {
    // tmp_arr[i] = data.pop()
     

  return (
    <div className="App">
      <h1>
        <FormattedMessage id="book-table-title" />
      </h1>
 
      <div className='rowC'>
      <AddBook ></AddBook>
    
      <AddWhite ></AddWhite>
      {/* <AddBlack tableData={tableData}></AddBlack> */}
      
      </div>

      <BookList></BookList>


    </div>
  );
}
