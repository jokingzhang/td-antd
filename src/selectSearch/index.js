import React from 'react';
import Select from 'antd/es/select';
import 'antd/es/select/style';
import Spin from 'antd/es/spin';
import 'antd/es/spin/style';

function debounce(fn, time) {
  // 定时器，用来 setTimeout
  let timer;
  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
  return function() {
    // 保存函数调用时的上下文和参数，传递给 fn
    const context = this;
    // eslint-disable-next-line
    const args = arguments;

    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
    clearTimeout(timer);

    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 time 毫秒就执行 fn
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, time)
  }
}

export default class SelectSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      data: [],
      loading: false,
    };
    this.onFetch = debounce(this.onFetch.bind(this), 600);
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
        {...this.props}
        showSearch
        value={value}
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
