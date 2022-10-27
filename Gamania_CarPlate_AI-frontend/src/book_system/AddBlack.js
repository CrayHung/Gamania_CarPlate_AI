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
 import './AddBlack.css';
 import BlackList from './BlackList';
 
 
 
 const AddBlack = ({tableData}) => {
 
     
 function savebackDB(data) {
     
     let url= "http://127.0.0.1:8080/allow/add";
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
 
     const { register, handleSubmit , formState: { errors }} = useForm();
     const onSubmit = data =>{ 
         console.log(data);
 
         setBookData(data);
         savebackDB(bookData);
 
     }
 
     const [bookData, setBookData] = useState();
     
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
 
 
     return (
         <div>
 
             <Button variant="danger" style={{margin:"8px"}} onClick={handleShow}>
                 新增黑名單車輛
             </Button>
 
             <Modal show={show} onHide={handleClose} visible="true" size='xl'>
             <Modal.Header closeButton>
             <Modal.Title>新增黑名單車輛</Modal.Title>
                 </Modal.Header>
             <form onSubmit={handleSubmit(onSubmit)}>
 
 
                 <Modal.Body>
                    <div className="right">
                           <BlackList tableData={tableData}></BlackList>
                    </div>

                    <div className="left">
                         <div>
                         <span>姓名: </span>
                         {/* <input placeholder='不可空白' defaultValue={null} {...register("name", { required: true, maxLength: 5 })} /> */}
                         <input placeholder='不可空' defaultValue={null} {...register("name", { required: true})} />
                         </div>
                         <div>
                         <span>單位: </span>
                         <input placeholder=' ' defaultValue={null}  {...register("unit")} />
                         </div>
                         <div>
                         <span>車種: </span>
                         {/* <input placeholder='摩托車' defaultValue={null} {...register("vehicleType")} /> */}
                         <select defaultValue={'機車'} {...register("vehicleType", { required: true })}>
                            <option value="機車">機車</option>
                            <option value="汽車">汽車</option>


                        </select>
                         </div>
                         <div>
                         <span>資格: </span>
                         <input readOnly="readOnly" placeholder='黑名單' defaultValue={"not allow"} {...register("allowType")} />
                         {/* <select defaultValue={'員工'} {...register("allowType", { required: true })}>
                            <option value="員工">員工</option>
                            <option value="廠商">廠商</option>
                        </select> */}
                         </div>
                         <div>
                         <span>備註: </span>
                         <input placeholder='' defaultValue={null} {...register("note")} />
                         </div>
                         <div>
                         <span>車號: </span>
                         <input placeholder='不可空' {...register("plateNumber", { required: true })} />
                         </div>
 
                         
                         {errors.exampleRequired && <span>必須輸入</span>}

                    </div>


                 </Modal.Body>
                 <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                         關閉
                     </Button>
                     <Button variant="primary" type="submit" >
                         新增
                     </Button>
     
                     {/* <>新增成功視窗關閉</> */}
                 </Modal.Footer>
                 </form>
             </Modal>
 
 
         </div >
     );
 }
 
 export default AddBlack;
 