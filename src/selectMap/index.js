import * as React from 'react';
import Select from 'antd/es/select';
import 'antd/es/select/style';

export default class SelectMap extends React.Component {
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
    return (
      <Select
        showSearch
        allowClear
        style={{ width: '100%' }}
        {...this.props}
      >
        {this.renderOption()}
      </Select>
    );
  }
}
