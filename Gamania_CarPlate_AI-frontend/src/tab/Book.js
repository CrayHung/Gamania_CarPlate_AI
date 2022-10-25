import { HelmetProvider, Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from 'react-intl';
import BOOK from '../book_system/BOOK'

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

     <BOOK></BOOK>
    </HelmetProvider>
  )
}