import "./css/menu.css";
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">

      <ul className="nav nav-justified">

        <li className="nav-item">
          <div className="nav-link">
            {/* <Link to={"/"}>
              <div className="nav-text">
                <FormattedMessage id="menu-live" />  
              </div>
            </Link> */}

            <a href="/">
              <div className="nav-text">
                <FormattedMessage id="menu-live" />
              </div>
            </a>
          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link">
            {/* <Link to={"/violation"}>
              <div className="nav-text">
                <FormattedMessage id="record-table-title" />
              </div>
            </Link> */}

            <a href="/violation">
              <div className="nav-text">
                <FormattedMessage id="record-table-title" />
              </div>
            </a>
          </div>
        </li>
        {/* <li className="nav-item">
          <div className="nav-link">
            <Link to={"/lpr"}>
              <div className="nav-text">
                <FormattedMessage id="menu-lpr" />
              </div>
            </Link>
          </div>
        </li> */}
        <li className="nav-item">
          <div className="nav-link">
            {/* <Link to={"/book"}>
              <div className="nav-text">
                <FormattedMessage id="book-title" />
              </div>
            </Link> */}

            <a href="/book">
              <div className="nav-text">
                <FormattedMessage id="book-title" />
              </div>
            </a>
          </div>
        </li>

      </ul>

    </div>
  )
}