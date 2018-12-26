import React from 'react';
import { Select } from 'antd';

export default class SelectMap extends React.PureComponent {
  renderOption = () => {
    const { data = [], fields = [] } = this.props;

    if (Array.isArray(data)) {
      if (data[0] && typeof data[0] === 'object') {
        return data.map(item => <Select.Option key={item[fields[0]]}>{item[fields[1]]}</Select.Option>);
      }
      return data.map(item => <Select.Option key={item}>{item}</Select.Option>);
    }

    return Object.keys(data).map(item => <Select.Option key={item}>{data[item]}</Select.Option>);
  };

  render() {
    const { style = { width: '100%' } } = this.props;

    return (
      <Select style={style} {...this.props}>
        {this.renderOption()}
      </Select>
    );
  }
}
