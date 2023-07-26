import { Checkbox, Form, Input, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { memo, useEffect } from 'react';

const ParagraphRightPanelProp = memo((props) => {
  const { text, isCenter, onChange, disabled } = props;
  const [form] = Form.useForm();
  //   console.warn(disabled);
  useEffect(() => {
    form.setFieldsValue({ text, isCenter });
  }, [text, isCenter]);

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
        text,
        isCenter,
      }}
      form={form}
      onValuesChange={() => handleValueChange()}
      disabled={disabled}
    >
      <Form.Item
        label="段落内容"
        name="text"
        rules={[{ required: true, message: '段落内容不能为空' }]}
      >
        <TextArea disabled={disabled}></TextArea>
      </Form.Item>

      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  );
});

export default ParagraphRightPanelProp;
