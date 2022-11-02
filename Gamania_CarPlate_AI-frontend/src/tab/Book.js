import { HelmetProvider, Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from 'react-intl';
import BOOK from '../book_system/BOOK';
import React, { createContext, useState } from "react";

export const BookContext = createContext();

function BookProvider({ children }) {
  const [bookData, setBookData] = useState([]);

  return (
    <BookContext.Provider value={{ bookData, setBookData }}>
      {children}
    </BookContext.Provider>
  );
}

export default function Lpr() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({ id: "book-title" })}
        </title>
      </Helmet>
      <div className="main-title">
        <FormattedMessage id="book-title"></FormattedMessage>
      </div>
     <BookProvider>
        <BOOK></BOOK>
     </BookProvider>
    </HelmetProvider>
  )
}