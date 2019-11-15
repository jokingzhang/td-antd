/*
* API：{
*   wrapClassName: 外层容器类名
*   className: 内容容器的类名
*   title: 标题
*   btnText: 按钮名字，如果不为空字符串，才会显示
*   btnProps: 默认按钮的 props 属性
*   line: 分隔线，默认存在
*   rightExtra: 头部右边额外区域
* }
* */

import * as React from 'react';
import classNames from 'classnames';
import Button from 'antd/es/button';
import 'antd/es/button/style';
import './index.less';

export default class Title extends React.Component {
  static defaultProps = {
    title: '',
    btnText: '',
    btnProps: {},
    line: true,
  };

  renderBtn = () => {
    const { btnText, btnProps } = this.props;

    if (typeof btnText === 'string' && btnText.length > 0) {
      return (
        <Button
          ghost
          type="primary"
          size="small"
          style={{ marginLeft: 12 }}
          {...btnProps}
        >
          {btnText}
        </Button>
      );
    }
  };

  render() {
    const { wrapClassName, className, line, title, rightExtra, children } = this.props;

    return (
      <div className={wrapClassName}>
        <div className={classNames('td-title-header', {
          'td-title-line': line,
        })}>
          <div>
            <span className="td-title-title">{title}</span>
            {this.renderBtn()}
          </div>
          {rightExtra}
        </div>
        <div className={className}>
          {children}
        </div>
      </div>
    );
  }
}
