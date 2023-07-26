import useGetPageInfo from '@/hook/useGetPageInfo';
import { resetPageInfo } from '@/store/pageInfo/slice';
import { Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const RightPageSetting = memo(() => {
  const pageInfo = useGetPageInfo();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  //   实时更新表单内容
  useEffect(() => {
    form.setFieldsValue(pageInfo);
  }, [pageInfo]);

  const handleValuesChange = () => {
    console.log('newValues', form.getFieldsValue());
    dispatch(resetPageInfo(form.getFieldsValue()));
  };

  return (
    <Form
      layout="vertical"
      initialValues={pageInfo}
      onValuesChange={() => handleValuesChange()}
      form={form}
    >
      <Form.Item
        label="问卷标题"
        name="title"
        rules={[{ required: true, message: '请输入标题' }]}
      >
        <Input placeholder="请输入标题"></Input>
      </Form.Item>

      <Form.Item label="问卷描述" name="desc">
        <TextArea placeholder="问卷描述"></TextArea>
      </Form.Item>

      <Form.Item label="样式代码" name="css">
        <TextArea placeholder="输入CSS样式代码"></TextArea>
      </Form.Item>

      <Form.Item label="脚本代码" name="js">
        <TextArea placeholder="输入 JS 脚本代码"></TextArea>
      </Form.Item>
    </Form>
  );
});

export default RightPageSetting;
