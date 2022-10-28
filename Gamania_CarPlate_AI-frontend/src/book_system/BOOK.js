/***
 * 
 * 
 * 改URL  let url= "http://192.168.195.213:8080/allow/add";
 *   // const [tableData, setTableData] = useState(null);
 * 
 */
import React, { useEffect, useState , createContext ,useContext } from "react";

import { FormattedMessage } from "react-intl";

// import test from './test.json';
import AddBook from './AddBook';
import AddWhite from './AddWhite'
import AddBlack from "./AddBlack";
import './BOOK.css'
import BookList from "./BookList";
import {urlContext} from '../web/Root'


export const BookContext = createContext();


export default function BOOK() {

  const serverUrl = useContext(urlContext);
  const [tableData, setTableData] = useState("");

useEffect(() => {
        const fetchData = async () => {
            const fetchurl = serverUrl+"allow/all";
            fetch(fetchurl)
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {

                    setTableData(response)
                    
                });
               
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
