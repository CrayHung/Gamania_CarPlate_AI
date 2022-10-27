import React, { useState,useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import ReactTable from "../violation/table/ReactTable";


const sizePerPage = 10;

export default function BookList() {
    const [tableData, setTableData] = useState("");

    useEffect(() => {
        const url = "http://192.168.195.213:8080/allow/all";
    
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                const data = json.filter(function (item) {
                    return item.visitorStartStr!== "";
                });

                setTableData(data);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);



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
                        tableData={tableData}
                        sizePerPage={sizePerPage}
                        tableHeader={TableHeader}
                        tableBody={tableBody}
                    />

        </div >
    );
}


