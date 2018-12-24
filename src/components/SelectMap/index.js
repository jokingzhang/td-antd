import React from 'react';
import { Select } from 'antd';

function SelectMap({ ...props }) {
  const { data = {}, field = [], style = { width: '100%' } } = props;

  const renderOption = () => {
    if (Array.isArray(data)) {
      return data.map(item => <Select.Option key={item[field[0]]}>{item[field[1]]}</Select.Option>);
    }

    return Object.keys(data).map(item => <Select.Option key={item}>{data[item]}</Select.Option>);
  };

  return (
    <Select {...props} style={style}>
      {renderOption()}
    </Select>
  );
}

export default SelectMap;
