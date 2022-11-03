import React from "react";

// import { FormattedMessage } from "react-intl";

import AddBook from './AddBook';
import AddWhite from './AddWhite'
import './BOOK.css'
import BookList from "./BookList";

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
