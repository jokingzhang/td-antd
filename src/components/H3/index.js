/*
* 带按钮的 h3 组件
* API：{
*   className: 样式
*   title: 标题名称
*   disabled: 按钮是否可用
*   size: 按钮大小，默认 = small [small, default]
*   onClick: 按钮事件
*   btnVisible：按钮是否显示，默认 = true = 显示
*   line: 分割线，默认显示
*   leftExtra: 标题左边额外的回调，=> ReactNode 和 string
*   rightExtra: 标题右边额外的回调，=> ReactNode 和 string
* }
* */

import React from 'react';
import { Button } from 'antd';
import './index.less';

function H3({ className, children, ...props }) {
  const {
    title = '',
    btnText = '增加',
    btnVisible = true,
    disabled = false,
    onClick = () => {},
    size = 'small',
    line = true,
    leftExtra,
    rightExtra,
  } = props;

  const renderButton = () => {
    if (btnVisible) {
      return (
        <Button
          className="td-h3-btn"
          type="primary"
          ghost
          disabled={disabled}
          size={size}
          onClick={onClick}
        >
          { btnText }
        </Button>
      );
    }
  };

  return (
    <div className={className}>
      <h3 className={`td-h3 ${line ? 'td-h3-line' : ''}`}>
        <span>{title}</span>
        {renderButton()}
        {leftExtra}
        <div className="td-h3-right-extra">
          {rightExtra}
        </div>
      </h3>
      <div className={`${line ? 'td-h3-content' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default H3;
