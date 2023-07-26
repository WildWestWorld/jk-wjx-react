import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Select, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { nanoid } from 'nanoid';
import React, { memo, useEffect } from 'react';

const RadioRightPanelProp = memo((props) => {
  const { text, isVertical, value, options = [], onChange, disabled } = props;
  const [form] = Form.useForm();
  //   console.warn(disabled);
  useEffect(() => {
    form.setFieldsValue({ text, isVertical, value, options });
  }, [text, isVertical, value, options]);

  const handleValueChange = () => {
    console.log(form.getFieldsValue());

    if (onChange) {
      let newValues = form.getFieldsValue();
      if (newValues.options) {
        newValues.options = newValues.options.filter((item) => {
          return !(item.text == null);
        });
      }

      const { options = [] } = newValues;
      options.forEach((item) => {
        if (item.value) return;
        item.value = nanoid(5);
      });

      onChange(newValues);
    }
  };

  return (
    <Form
      layout="verical"
      initialValues={{
        text,
        isVertical,
        value,
        options,
      }}
      form={form}
      onValuesChange={() => handleValueChange()}
      disabled={disabled}
    >
      <Form.Item
        label="标题"
        name="text"
        rules={[{ required: true, message: '请输入标题' }]}
      >
        <Input></Input>
      </Form.Item>

      <Form.Item label="选项">
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }, index) => {
                return (
                  <Space key={key} align="baseline">
                    {/* 当前选项 输入框 */}
                    <Form.Item
                      name={[name, 'text']}
                      rules={[{ required: true, message: '请输入选项文字' }]}
                    >
                      <Input placeholder="输入选项文字"></Input>
                    </Form.Item>
                    {/* 当前选项 删除按钮 */}
                    {index > 1 && (
                      <MinusCircleOutlined
                        onClick={() => remove(name)}
                      ></MinusCircleOutlined>
                    )}
                  </Space>
                );
              })}

              {/* 添加选项 */}
              <Form.Item>
                <Button
                  type="link"
                  onClick={() => add({ text: '', value: '' })}
                  icon={<PlusOutlined></PlusOutlined>}
                >
                  添加选项
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>

      <Form.Item label="默认选中" name="value">
        <Select
          value={value}
          options={options.map((item) => {
            return { value: item.value, label: item.text || '' };
          })}
        ></Select>
      </Form.Item>

      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  );
});

export default RadioRightPanelProp;
