// todo: 本地 import 测试未通过

import * as React from 'react';
import Descriptions from 'antd/es/descriptions';
import 'antd/es/descriptions/style';

export default class DescList extends React.PureComponent {
  static defaultProps = {
    dataSource: [],
    size: 'small',
    column: 4,
    columns: [],
    defaultValue: '--',
  };

  // 可支持嵌套获取值，如 "key.key.key"
  deepGet = (object, path, defaultValue) => {
    return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path)
      .reduce((o, k) => (o || {})[k], object) || defaultValue;
  };

  renderItem = () => {
    const { dataSource, columns, defaultValue } = this.props;

    return columns.map((item, index) => {
      const { title, dataIndex, render, unVisible } = item;

      if (unVisible) {
        return null;
      }

      const value = render ? render(dataSource) : this.deepGet(dataSource, dataIndex, defaultValue);

      return (
        <Descriptions.Item label={title} key={index}>
          {value || defaultValue}
        </Descriptions.Item>
      )
    })
  };

  render() {
    return (
      <Descriptions {...this.props}>
        {this.renderItem()}
      </Descriptions>
    );
  }
}
