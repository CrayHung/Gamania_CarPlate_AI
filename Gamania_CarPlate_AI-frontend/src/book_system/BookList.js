import React, { useEffect, useContext } from 'react';
import { FormattedMessage } from "react-intl";
import ReactTable from "../violation/table/ReactTable";
import { urlContext } from '../web/Root'
import { BookContext } from "../tab/Book";


const sizePerPage = 10;

export default function BookList() {
    const serverUrl = useContext(urlContext);
    const { bookData, setBookData } = useContext(BookContext);

    useEffect(() => {

        (async () => {
            try {
                /* dev */
                // const res = await fetch("http://192.168.195.213:8080/allow/all");

                /* deployment */
                const res = await fetch(serverUrl + "allow/all");
                
                setBookData(await res.json());
            } catch (err) {
                console.error(err);
            }

        })();

    }, [serverUrl, setBookData]);



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
        )
    }

    const tableBody = (value, index) => {

        return (
            <tr key={index}>
                <td>{value.name}</td>
                <td>{value.unit}</td>
                <td>{value.vehicleType}</td>
                <td>{value.allowType}</td>
                <td>{value.note}</td>
                <td>{value.visitorStartStr}</td>
                <td>{value.visitorEndStr}</td>
                <td>{value.plateNumber}</td>
            </tr>
        )
    }

    return (
        <div>

            <ReactTable
                tableData={bookData}
                sizePerPage={sizePerPage}
                tableHeader={TableHeader}
                tableBody={tableBody}
            />

        </div >
    );
}


