import React from "react";

// import { FormattedMessage } from "react-intl";

import AddBook from './AddBook';
import AddWhite from './AddWhite'
import './BOOK.css'
import BookList from "./BookList";

export const updateTable = async () => {
  /* deployment */
  const ip = window.location.host.split(":")[0];
  const serverUrl = `http://${ip}:8080`;
  
  /* dev */
  // const serverUrl = "http://192.168.195.213:8080";

  try {
    /* dev */
    // const res = await fetch("http://192.168.195.213:8080/allow/all");

    /* deployment */
    const res = await fetch(serverUrl + "/allow/all");

    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export default function BOOK() {

  return (
    <div className="App">
      {/* <h1>
        <FormattedMessage id="book-table-title" />
      </h1> */}
 
      <div className='rowC'>

      <AddBook></AddBook>
    
      <AddWhite ></AddWhite>
      {/* <AddBlack tableData={tableData}></AddBlack> */}
      
      </div>

      <BookList></BookList>


    </div>
  );
}