/*
* 根据数据渲染 Select 组件
* API: {
*   data(object/array): 数据源，可以为 "对象" 或 "数组"
*   field(array): ['key', 'value'] 当 data 为数组时，需要申明渲染字段。
* }
* */

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
