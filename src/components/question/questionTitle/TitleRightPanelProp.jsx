import { Checkbox, Form, Input, Select } from 'antd';
import React, { memo, useEffect } from 'react';

const TitleRightPanelProp = memo((props) => {
  const { text, level, isCenter, onChange, disabled } = props;
  const [form] = Form.useForm();
  //   console.warn(disabled);
  useEffect(() => {
    form.setFieldsValue({ text, level, isCenter });
  }, [text, level, isCenter]);

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
        level,
        isCenter,
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

      <Form.Item label="层级" name="level">
        <Select
          options={[
            { value: 1, text: 1 },
            { value: 2, text: 2 },
            { value: 3, text: 3 },
          ]}
        ></Select>
      </Form.Item>

      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  );
});

export default TitleRightPanelProp;
