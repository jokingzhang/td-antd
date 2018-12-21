/*
* 异步请求的搜索 select 组件，继承 FormItem 的 API
* API：{
*   fetchUrl: 组件请求的接口，如果有，则使用该接口进行请求。
*     有值：则使用该接口进行请求。 API.type 无效
*     无值：则使用默认接口进行请求。 API.type 有效
*   type(string)：AGENCY（代理机构）/SPONSOR（发起机构）
*   callback(data){}：成功后的回调函数，必须 return 后端返回的列表数据
*   fields：['orgCode', 'orgName' || function] 可以配合 API.fetchUrl 使用，Option 渲染使用
*     fields[1] 为 function 时，则可自定义需要渲染的内容
*   selectProps：{}。select 属性。如 selectProps: { onChange: (value) => {} } 等
*   data(Array)：数据源。当该属性存在时，fetchUrl、callback 无效，且不会发送异步请求
* }
* */

import React from 'react';
import { Select } from 'antd';
import FormItem from '../FormItem';

class FormItemSelect extends React.PureComponent {
  state = {
    data: this.props.data || [],
  };

  componentDidMount() {
    const { data, fetchUrl, callback = () => {} } = this.props;

    if (!data) {
      fetch(fetchUrl, {
        credentials: 'include',
      }).then(response => response)
        .then(response => response.json())
        .then((res) => {
          this.setState({ data: callback(res) });
        }).catch((error) => error);
    }
  }

  renderRead = (data, fields, initialValue) => {
    const obj = data.filter(item => item[fields[0]] === initialValue)[0];

    if (obj) {
      return (typeof fields[1] === "function") ? fields[1](obj) : obj[fields[1]];
    }

    return '--';
  };

  render() {
    const { data } = this.state;
    const { form, fields = ['', ''], selectProps = {}, initialValue } = this.props;

    return(
      <FormItem
        {...this.props}
      >
        {!form ? (
          this.renderRead(data, fields, initialValue)
        ) : (
          <Select
            {...selectProps}
            style={{ width: '100%' }}
            showSearch
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {data.map(item => (
              <Select.Option
                key={item[fields[0]]}
              >
                {(typeof fields[1] === "function") ? fields[1](item) : item[fields[1]]}
              </Select.Option>)
            )}
          </Select>
        )}
      </FormItem>
    );
  }
}

export default FormItemSelect;
