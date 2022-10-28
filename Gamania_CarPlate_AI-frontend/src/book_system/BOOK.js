/***
 * 
 * 
 * 改URL  let url= "http://192.168.195.213:8080/allow/add";
 *   // const [tableData, setTableData] = useState(null);
 * 
 */
import React, { useEffect, useState , createContext  } from "react";

import { FormattedMessage } from "react-intl";

// import test from './test.json';
import AddBook from './AddBook';
import AddWhite from './AddWhite'
import AddBlack from "./AddBlack";
import './BOOK.css'
import BookList from "./BookList";


export const BookContext = createContext();


export default function BOOK() {

  const [tableData, setTableData] = useState("");

useEffect(() => {
        const fetchData = async () => {
            const url = "http://192.168.195.213:8080/allow/all";
            fetch(url)
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {

                    setTableData(response)
                    
                });
               
            console.log('1st fetch data in fetchData()')
            console.log(tableData)
        }
        fetchData();
    },[])



  return (
    <BookContext.Provider value={{tableData, setTableData}}>
    <div className="App">
      <h1>
        <FormattedMessage id="book-table-title" />
      </h1>
 
      <div className='rowC'>

      <AddBook></AddBook>
    
      <AddWhite ></AddWhite>
      {/* <AddBlack tableData={tableData}></AddBlack> */}
      
      </div>

      <BookList></BookList>


    </div>
    </BookContext.Provider>
  );
}
