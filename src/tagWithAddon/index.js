/*
* 封装 antd 的 Tag 组件，前后可输入名称。
* API：{
*   addonBefore: 前置文本
*   addonAfter: 后置文本
*   children: 标签名称
*   color: 标签颜色
* }
* */

import * as React from 'react';
import Tag from 'antd/es/tag';
import 'antd/es/tag/style';

export default class TagWithAddon extends React.PureComponent {
  static defaultProps = {
    color: 'blue',
    isBackground: true,
  };

  render() {
    const { addonBefore, addonAfter, children, color, isBackground } = this.props;

    return (
      <React.Fragment>
        {addonBefore}
        {children &&
          <Tag
            color={color}
            style={{
              marginLeft: addonBefore && 8,
              background: !isBackground && 'none',
            }}
            {...this.props}
          >
            {children}
          </Tag>
        }
        {addonAfter}
      </React.Fragment>
    );
  }
}
