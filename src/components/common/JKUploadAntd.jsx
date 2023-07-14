import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';

//获取token
const token = sessionStorage.getItem('token');

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('您必须上传JPG/PNG文件!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片必须小于2MB!');
  }
  return isJpgOrPng && isLt2M;
};
const JKUploadAntd = ({ imageUrl, setImageUrl, source }) => {
  const [loading, setLoading] = useState(false); //加载状态
  //   const [imageUrl, setImageUrl] = useState();//上传之后的数据 //现在改为从外部传入
  //上传进度改变时触发
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    //完成时触发
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);

        // setImageUrl(url);
        // console.log(info);
        //如果上传成功了
        if (info.file.response.code == 0) {
          message.success('上传成功');
          setImageUrl(info.file.response.data.url);
        } else {
          message.error(info.file.response.msg);
        }
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <Upload
      //上传后服务器接收到的属性名
      name="file"
      listType="picture-card"
      //样式名
      className="file-uploader"
      //是否显示上传列表
      showUploadList={false}
      //服务器端的接口地址
      action="/api/admin/common/upload/image"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      data={{ source: source }}
      headers={{ Authorization: 'Bearer ' + token }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};
export default JKUploadAntd;
