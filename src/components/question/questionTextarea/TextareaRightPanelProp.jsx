import { Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { memo, useEffect } from 'react';

const TextareaRightPanelProp = memo((props) => {
  const { text, placeholder, onChange, disabled } = props;

  console.warn(props);
  console.warn(props.text);
  const [form] = Form.useForm();
  useEffect(() => {
    console.log(text);
    form.setFieldsValue({ text, placeholder });
    console.log(form);
  }, [text, placeholder]);

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
        title: text || '暂无标题',
        placeholder: placeholder || '暂无placeholder',
      }}
      form={form}
      onValuesChange={() => handleValueChange()}
      disabled={disabled}
    >
      <Form.Item
        label="标题"
        name="text"
        rules={[{ required: true, message: '标题不能为空' }]}
      >
        <Input></Input>
      </Form.Item>

      <Form.Item label="placeholder" name="placeholder">
        <TextArea disabled={disabled}></TextArea>
      </Form.Item>
    </Form>
  );
});

export default TextareaRightPanelProp;
