/**
 * 
 * 限制欄位輸出還沒做好就能傳出
 * 
 * 
 * 
 * 
 * 
 */
import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import WhiteList from './WhiteList'
import { urlContext } from '../web/Root'

const AddWhite = () => {

  const serverUrl = useContext(urlContext);
  const [bookData, setBookData] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, formState: { errors } } = useForm();


  /**表單送出 */
  const onSubmit = (data) => {

    // let tmpstartstr = ''
    // let tmpendstr = ''
    // let str = ''
    // tmpstartstr = data.visitorStartStr.replace("T", " ");
    // tmpendstr = data.visitorEndStr.replace("T", " ");
    // // str = tmpstr + ':00'
    // data.visitorStartStr = tmpstartstr;
    // data.visitorEndStr = tmpendstr;
    setBookData(data);
    const finalData = data


    console.log(data.visitorStartStr)
    console.log(data.visitorEndStr)

    console.log("送出的資料是");
    //console.log(bookData);
    console.log(finalData);


    // const savebackDB = async () => {
    //   let fetchurl = serverUrl + "allow/add";
    //   query()
    //   function query() {
    //     fetch(fetchurl, {

    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(finalData)

    //     })
    //       // .then(res => res.json())
    //       // .catch(error => console.error('Error:', error))
    //       .then(response => {


    //         console.log('success', response);
    //         handleClose();
    //       }
    //       );
    //   }

    // }
    // savebackDB();

    (async () => {
      try {
        const res = await fetch(`${serverUrl}allow/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(finalData)
        });

        console.log(await res.text());
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
            <div className="right">
              <WhiteList ></WhiteList>
            </div>

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
