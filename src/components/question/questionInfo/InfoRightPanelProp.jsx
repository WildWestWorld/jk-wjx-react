import { Checkbox, Form, Input, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { memo, useEffect } from 'react';

const InfoRightPanelProp = memo((props) => {
  const { title, desc, onChange, disabled } = props;
  console.log(title);
  const [form] = Form.useForm();
  //   console.warn(disabled);
  useEffect(() => {
    form.setFieldsValue({ title, desc });
  }, [title, desc]);

  const handleValueChange = () => {
    console.log(form.getFieldsValue());

    if (onChange) {
      onChange(form.getFieldsValue());
    }
  };

  return (
    <Form
      layout="verical"
      initialValues={{
        title,
        desc,
      }}
      form={form}
      onValuesChange={() => handleValueChange()}
      disabled={disabled}
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: '标题不能为空' }]}
      >
        <Input></Input>
      </Form.Item>

      <Form.Item
        label="描述"
        name="desc"
        rules={[{ required: true, message: '标题不能为空' }]}
      >
        <TextArea disabled={disabled}></TextArea>
      </Form.Item>
    </Form>
  );
});

export default InfoRightPanelProp;
