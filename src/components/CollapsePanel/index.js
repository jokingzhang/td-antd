import React from 'react';
import { Collapse } from 'antd';
import './index.less';

function CollapsePanel({ className, children, ...props }) {
  const {
    // header = '', // 折叠面板标题
    // showArrow = false  // 是否显示箭头
    // disabled = false // 是否禁用折叠面板
    rightExtra,  // 头部右边额外的回调 => reactNode || string
  } = props;

  return (
    <Collapse defaultActiveKey={['1']} className={`td-collapse ${className}`}>
      <Collapse.Panel {...props} key="1">
        { children }
      </Collapse.Panel>
      <div className="td-collapse-right-extra">
        {rightExtra}
      </div>
    </Collapse>
  );
}

export default CollapsePanel;
