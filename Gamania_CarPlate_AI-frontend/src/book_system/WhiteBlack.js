/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
import React, { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import test from './test.json';
import ReactTable from "../violation/table/ReactTable";

const sizePerPage = 10;

const WhiteBlack = () => {

    const [blackData, setBlackData] = useState(test);
    const [whiteData, setWhiteData] = useState(test);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleGetData = () => {
        /**
         * fetch資料+篩選
         * 
         */
        let arrwhite = [];
        let arrblack = [];
        arrwhite = blackData.filter(function (value, arr) {
            return value.allowType === "allow";
        });
        arrblack = blackData.filter(function (value, arr) {
            return value.allowType === "not allow";
        });
        console.log("黑名單車輛");
        console.log(arrblack);
        console.log("白名單車輛");
        console.log(arrwhite);

        setBlackData(arrblack);
        setWhiteData(arrwhite);
        handleShow();

    }

    const onBtnClick = () => {
        handleGetData();

    }

    const TableHeader = () => {
        return (
            <tr>

                <th>
                    <FormattedMessage id="black-list" />
                </th>
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
                <td>{value.plateNumber}</td>
                <td>{value.name}</td>
                <td>{value.unit}</td>
                <td>{value.vehicleType}</td>
                <td>{value.allowType}</td>
                <td>{value.note}</td>
                <td>{value.visitorStartSt}</td>
                <td>{value.visitorEndStr}</td>
                <td>{value.plateNumber}</td>
            </tr>
        )
    }

    return (
        <div>

            <Button variant="primary" onClick={onBtnClick} >
                黑名單
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>黑名單</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReactTable
                        tableData={blackData}
                        sizePerPage={sizePerPage}
                        tableHeader={TableHeader}
                        tableBody={tableBody}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        關閉
                    </Button>
                </Modal.Footer>

            </Modal>


        </div >
    );
}

export default WhiteBlack;
