import React, { useState,useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import ReactTable from "../violation/table/ReactTable";


const sizePerPage = 10;

const BlackList = ({tableData}) => {

    const [blackData, setBlackData] = useState(tableData);




    useEffect(() => {
        handleGetData();
      }, [tableData]);


        const handleGetData = () => {
            let arrblack = [];
            arrblack = blackData.filter(function (value, arr) {
                return value.allowType === "not allow";
            });

            setBlackData(arrblack);
            //setWhiteData(arrwhite);
            // handleShow();
    
        }


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
                <td>{value.plateNumber}</td>
            </tr>
        )
    }

    return (
        <div>

                    <ReactTable
                        tableData={blackData}
                        sizePerPage={sizePerPage}
                        tableHeader={TableHeader}
                        tableBody={tableBody}
                    />

        </div >
    );
}

export default BlackList;
