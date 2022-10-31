/**
 * 
 * 要判斷新增的預約是否是黑名單
 * 
 * 
 * 
 * 
 * 
 */
import React, { useState, useEffect ,useContext } from 'react';
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {BookContext} from './BOOK'
import {urlContext} from '../web/Root'



const AddBook = () => {

    const serverUrl = useContext(urlContext);

    const { tableData, setTableData } = useContext(BookContext);


    const [bookData, setBookData] = useState();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit, formState: { errors } } = useForm();

    /**表單送出 */
    const onSubmit = (data) => {

        let tmpstartstr = ''
        let tmpendstr = ''
        let str = ''
        tmpstartstr = data.visitorStartStr.replace("T", " ");
        tmpendstr = data.visitorEndStr.replace("T", " ");
        // str = tmpstr + ':00'
        data.visitorStartStr = tmpstartstr;
        data.visitorEndStr = tmpendstr;
        setBookData(data);
        //setTableData(data);
        const finalData = data


        console.log(data.visitorStartStr)
        console.log(data.visitorEndStr)

        console.log("送出的資料是");
        //console.log(bookData);
        console.log(finalData);


        const savebackDB = async () => {



            let fetchurl = serverUrl+"allow/add";
            query()
            function query() {
                fetch(fetchurl, {

                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(finalData)

                })
                    // .then(res => res.json())
                    // .catch(error => console.error('Error:', error))
                    .then(response => {
                        
                        setTableData([...tableData,data])
                        console.log('success', response);
                        handleClose();
                    }
                    );
            }

        }
        savebackDB();

    }




    return (
        <div>

            <Button variant="primary" style={{ margin: "8px" }} onClick={handleShow}>
                新增訪客預約
            </Button>

            <Modal show={show} onHide={handleClose} visible="true">
                <Modal.Header closeButton>
                    <Modal.Title>預約資訊</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <Modal.Body>


                        <div>
                            <span>姓名: </span>
                            <input placeholder='不可空白' defaultValue={null} {...register("name", { required: true, maxLength: 10 })} />
                        </div>
                        <div>
                            <span>單位: </span>
                            <input placeholder='無 ' defaultValue={null}  {...register("unit")} />
                        </div>
                        <div>
                            <span>車種: </span>
                            {/* <input placeholder='摩托車' defaultValue={null} {...register("vehicleType")} /> */}
                            <select defaultValue={'機車'} {...register("vehicleType", { required: true })}>
                                <option value="機車" >機車</option>
                                <option value="汽車">汽車</option>


                            </select>
                        </div>
                        <div>

                            <input type="hidden" defaultValue={"訪客"} {...register("allowType")} />
                        </div>
                        <div>
                            <span>備註: </span>
                            <input placeholder='' defaultValue={null} {...register("note")} />
                        </div>
                        <div>
                            <span>車號: </span>
                            <input placeholder='不可為空' {...register("plateNumber", { required: true })} />
                        </div>

                        <div>
                            <span>預約開始時間: </span>
                            <input type="datetime-local"  {...register("visitorStartStr", { required: true })} />
                        </div>
                        <div>
                            <span>預約結束時間: </span>
                            <input type="datetime-local"  {...register("visitorEndStr", { required: true })} />
                        </div>
                        {errors.exampleRequired && <span>必須輸入</span>}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            關閉
                        </Button>
                        <Button variant="primary" type="submit" >
                            提交預約
                        </Button>
                        <>預約成功視窗關閉</>
                    </Modal.Footer>
                </form>
            </Modal>


        </div >
    );
}

export default AddBook;
