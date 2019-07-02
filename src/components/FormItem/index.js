import React from 'react';
import Input from 'antd/es/input';
import Form from 'antd/es/form';
import 'antd/es/input/style';
import 'antd/es/form/style';
import InputNumberWithUnit from '../InputNumberWithUnit';

function FormItem({ className = '', children, ...props }) {
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
    itemType = 'default',
    unit,
    isNegative = false,
    isInteger = false,
    message = '必填项',
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
        {children || initialValue || ' -- '}
      </Form.Item>
    );
  }

  const rules = [{ required, message }, {
    validator: (rule, value, callback) => {
      validatorCallback(value, callback, rule);

      // 当类型为数字类型时，则内置校验规则
      if (itemType === 'number') {
        if (!isNegative && value < 0) {
          callback(`${label} 不能小于 0`);
          return;
        }

        if (isInteger && value && !Number.isInteger(parseFloat(value))) {
          callback('必须为整数');
          return;
        }
      }

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
        (itemType === 'number') ?
          <InputNumberWithUnit unit={unit} {...inputProps} /> :
          (children || <Input {...inputProps} />)
      )}
    </Form.Item>
  );
}

export default FormItem;
