/**
 * 
 * 限制欄位輸出還沒做好就能傳出
 * 
 * 
 * 
 * 
 * 
 */
import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";



const AddBook = () => {

    
function savebackDB(data) {
    
    let url= "http://192.168.195.213:8080/allow/add";
    fetch(url, {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {

        
            console.log('success', response);
            // setShow(false);
            handleClose();
        }
            );

}

    const { register, handleSubmit ,  formState: { errors }} = useForm();
    const onSubmit = data =>{ 
        console.log(data);

        let tmpstr = ''
        let str = ''
        tmpstr = data.visitorStartStr.replace("T", " ");
        str = tmpstr + ':00'
        console.log(str);
        data.visitorStartStr = str;
        setBookData(data);
        // console.log(data);
        // console.log(typeof(data));

        /** fetch to DB */
        savebackDB(bookData);

    }

    const [bookData, setBookData] = useState();
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
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
                        <input placeholder='不可空白' defaultValue={null} {...register("name", { required: true, maxLength: 5 })} />
                        </div>
                        <div>
                        <span>單位: </span>
                        <input placeholder='無 ' defaultValue={null}  {...register("unit")} />
                        </div>
                        <div>
                        <span>車種: </span>
                        {/* <input placeholder='摩托車' defaultValue={null} {...register("vehicleType")} /> */}
                        <select defaultValue={'摩托車'} {...register("vehicleType", { required: true })}>
                            <option value="摩托車" >摩托車</option>
                            <option value="汽車">汽車</option>
                            <option value="貨車">貨車</option>

                        </select>
                        </div>
                        <div>
                        <span>資格: </span>
                        <input readOnly="readOnly"  defaultValue={"訪客"} {...register("allowType")} />
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
