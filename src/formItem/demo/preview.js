import React from 'react';
import FormItem from '../index';

export default class Base extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FormItem
          label="姓名"
          cols={[5, 10]}
          initialValue="sam"
        />
        <FormItem
          label="年龄"
          cols={[5, 10]}
          initialValue="18"
        />
        <FormItem
          label="性别"
          cols={[5, 10]}
          initialValue="男"
        />
        <FormItem
          label="地址"
          cols={[5, 10]}
          defaultValue="~"
        />
      </React.Fragment>
    );
  }
}