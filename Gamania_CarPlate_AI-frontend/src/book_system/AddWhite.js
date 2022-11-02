import React, { useState, useContext } from 'react';
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { urlContext } from '../web/Root'
import { BookContext } from "../tab/Book";

const AddWhite = () => {

  const serverUrl = useContext(urlContext);
  // const [bookData, setBookData] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { setBookData } = useContext(BookContext);

  const updateTable = async () => {
    try {
      /* dev */
      // const res = await fetch("http://192.168.195.213:8080/allow/all");

      /* deployment */
      const res = await fetch(serverUrl + "allow/all");

      setBookData(await res.json());
    } catch (err) {
      console.error(err);
    }
  }

  /**表單送出 */
  const onSubmit = (data) => {
    (async () => {
      try {
        /* dev */
        // const res = await fetch(`http://192.168.195.213:8080/allow/add`, {

        /* deployment */
        const res = await fetch(`${serverUrl}allow/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        console.log(await res.text());
        updateTable();
        handleClose();
      } catch (err) {
        console.log(err);
      }
    })();

  }

  return (
    <div>

      <Button variant="primary" style={{ margin: "8px" }} onClick={handleShow}>
        新增白名單車輛
      </Button>

      <Modal show={show} onHide={handleClose} visible="true" size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>新增白名單車輛</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>


          <Modal.Body>
            {/* <div className="right">
              <WhiteList ></WhiteList>
            </div> */}

            <div className="left">


              <div>
                <span>姓名: </span>
                {/* <input placeholder='不可空白' defaultValue={null} {...register("name", { required: true, maxLength: 5 })} /> */}
                <input placeholder='不可空' defaultValue={null} {...register("name", { required: true })} />
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
                {/* <span>資格: </span>
                         <input readOnly="readOnly"  defaultValue={"白名單"} {...register("allowType")} /> */}
                <input type="hidden" defaultValue={"白名單"} {...register("allowType")} />

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

export default AddWhite;
