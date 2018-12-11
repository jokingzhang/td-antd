/*
* 带单位的 input 受控组件
* API: {
*   form: 受控组件对象
*   formItemLayout: 表单排序样式
*   initialValue: 初始值
*   label: 名称
*   required: 是否为必填项
*   fieldName: 字段名
*   unit: 单位，默认 "万元"
*   validatorCallback(value, callback): 自定义校验规则, value = string
*   isNegative: 是否可为负数，默认 false = 不可以
*   isInteger: 值是否为整数，默认 false = 不可以
*   inputProps: Input 组件的属性，如： inputProps = { disabled: true }
* }
* */

import React from 'react';
import { Form, Input } from 'antd';

function MoneyInput({ children, ...props }) {
  const { cols = [] } = props;
  const {
    form,
    formItemLayout = {
      labelCol: { sm: { span: cols[0] || 10 } },
      wrapperCol: { sm: { span: cols[1] || 14 } },
    },
    initialValue,
    fieldName = '',
    label = '',
    required = true,
    unit = '',
    validatorCallback,
    isNegative = false,
    isInteger = false,
    readOnly = false,
    inputProps = {},
  } = props;
  const { getFieldDecorator } = form;

  return (
    <Form.Item
      {...props}
      {...formItemLayout}
    >
      {getFieldDecorator(fieldName, {
        initialValue,
        rules: [{
          required,
          message: `请填写${label}`,
        }, {
          validator: (rule, value, callback) => {
            // eslint-disable-next-line
            validatorCallback && validatorCallback(value, callback);

            if (unit === '%' && value > 100) {
              callback(`${label}不能超过 100`);
              return;
            }

            if (!isNegative && value < 0) {
              callback(`${label}不能小于 0`);
              return;
            }
            if (unit === '元' && value && !Number.isInteger(parseFloat(value))
              && value.split('.')[1].length > 2) {
              callback('值不可超过两位小数');
              return;
            }
            if (isInteger && value && !Number.isInteger(parseFloat(value))) {
              callback('值必须为整数');
              return;
            }

            callback();
          },
        }],
      })(
        readOnly ? <span>{initialValue || '--'}</span> : (
          <Input {...inputProps} type="number" addonAfter={unit} />
        )
      )}
      {children}
    </Form.Item>
  );
}

export default MoneyInput;
