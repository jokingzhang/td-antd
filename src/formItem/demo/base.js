import React from 'react';
import { Form, Button } from 'antd';
import FormItem from '../index';

@Form.create()
export default class Base extends React.Component {
  onSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    })
  };

  render() {
    const { form } = this.props;

    return (
      <React.Fragment>
        <FormItem
          form={form}
          label="姓名"
          fieldName="name"
          cols={[5, 10]}
        />
        <FormItem
          form={form}
          label="年龄"
          fieldName="age"
          required={false}
          cols={[5, 10]}
        />
        <FormItem
          form={form}
          label="性别"
          fieldName="sex"
          cols={[5, 10]}
        />
        <Button onClick={() => this.onSubmit()}>提交</Button>
      </React.Fragment>
    );
  }
}