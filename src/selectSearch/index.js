import * as React from 'react';
import _debounce from 'lodash/debounce';
import { Select, Spin } from 'antd';

export default class SelectSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      data: [],
      loading: false,
    };
    this.onFetch = _debounce(this.onFetch.bind(this), 600);
  }

  reset = () => {
    this.setState({
      value: [],
      data: [],
    });
  };

  // 自定义异步功能
  onFetch(value) {
    const { url, afterFetch } = this.props;
    this.setState({ data: [] }, () => {
      if (value && value.length > 0) {
        this.setState({ loading: true }, () => {
          fetch(`${url}${value}`)
            .then(response => response.json())
            .then(data => {
              const res = (afterFetch && afterFetch(data)) || [];
              this.setState({ loading: false, data: res });
            })
        });
      }
    });
  }

  // 选择后触发，提供 callback 回调
  handleChange = (value) => {
    const { callback = () => {}} = this.props;

    this.setState({ value: value }, () => {
      callback(value);
    });
  };

  // 多个组件同时使用时，在输入值后进行切换会报错，需要在失去焦点时进行数据重置
  onBlur = () => {
    this.setState({ data: [] });
  };

  render() {
    const { loading, value, data } = this.state;
    const { fields, isData = false, customOption } = this.props;

    return (
      <Select
        value={value}
        {...this.props}
        showSearch
        notFoundContent={loading ? <Spin size="small" /> : '暂无数据'}
        filterOption={false}
        onSearch={this.onFetch}
        onChange={this.handleChange}
        onBlur={this.onBlur}
        style={{ width: '100%' }}
      >
        {data.map(item => (
          <Select.Option
            key={isData ? JSON.stringify(item) : item[fields[0]]}
          >
            {(customOption && customOption(item)) || item[fields[1]]}
          </Select.Option>
        ))}
      </Select>
    );
  }
}
