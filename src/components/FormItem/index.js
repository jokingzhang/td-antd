import * as React from 'react';
import * as Antd from 'antd';
import InputNumberWithUnit from '../InputNumberWithUnit';

const { Form, Input } = Antd;

class FormItem extends React.PureComponent {
  render() {
    const { cols = [] } = this.props;
    const {
      className,
      children,
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

    } = this.props;

    if (!form) {
      return (
        <Form.Item
          style={{ marginBottom: 0 }}
          className={className}
          {...formItemLayout}
          {...this.props}
          label={label}
        >
          {children || initialValue || ' -- '}
        </Form.Item>
      );
    }

    const rules = [{
      required,
      message: `必填项`,
    }, {
      validator: (rule, value, callback) => {
        validatorCallback(value, callback, rule);

        // 当类型为数字类型时，则内置校验规则
        if (itemType === 'number') {
          if (!isNegative && value < 0) {
            callback(`${label}不能小于 0`);
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
        {...this.props}
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
}

export default FormItem;
