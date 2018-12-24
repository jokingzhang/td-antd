import React from 'react';
import { Form, Input } from 'antd';

function FormItem({ className, children, ...props }) {
  const { cols = [] } = props;
  const {
    formItemLayout = {
      labelCol: { sm: { span: cols[0] || 10 } },
      wrapperCol: { sm: { span: cols[1] || 14 } },
    },
    form,
    label = '',
    fieldName = '',
    initialValue = undefined,
    required = true,
    validatorCallback = () => {},
    extraRules = [],
    inputProps = {},
    valuePropName = 'value',
  } = props;

  if (!form) {
    return (
      <Form.Item
        style={{ marginBottom: 0 }}
        className={className}
        {...formItemLayout}
        {...props}
        label={label}
      >
        {children || <span>{initialValue || ' -- '}</span>}
      </Form.Item>
    );
  }

  const rules = [{
    required,
    message: `${label} 是必填项`,
  }, {
    validator: (rule, value, callback) => {
      validatorCallback(value, callback, rule);
      callback();
    },
  }].concat(extraRules);

  return (
    <Form.Item
      className={className}
      {...formItemLayout}
      {...props}
    >
      {form.getFieldDecorator(fieldName, {
        rules,
        initialValue,
        valuePropName,
      })(
        children || <Input {...inputProps} />
      )}
    </Form.Item>
  );
}

export default FormItem;
