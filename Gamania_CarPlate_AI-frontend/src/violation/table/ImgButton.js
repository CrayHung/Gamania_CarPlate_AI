import React, {useState,useContext} from 'react';
import { FormattedMessage } from 'react-intl';
import { Modal, Image } from 'antd';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {urlContext} from '../../web/Root'



function ImgButton(props) {

  const serverUrl = useContext(urlContext);
  const imagePath = props.imagePath

  // console.log('serverUrl+imagePath')
  // console.log(serverUrl+imagePath)

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

return <>
    <button type="button" className="btn btn-primary btn-option" onClick={showModal}><FormattedMessage id="Img-btn" /></button>
    <Modal title={<FormattedMessage id="Img-btn" />} centered width={1000} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
		  <Image src={`${serverUrl}${imagePath}`} width={960} height={540} />
		</Modal>
            </>
}
export default ImgButton