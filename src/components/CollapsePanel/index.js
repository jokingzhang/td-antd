import * as React from 'react';
import * as Antd from 'antd';
import './index.less';

const Collapse = Antd.Collapse;

export default class CollapsePanel extends React.Component {
  render() {
    const {
      className,
      children,
      rightExtra,  // 头部右边额外的回调 => reactNode || string
      isOpen = true, // 是否展开，默认展开
    } = this.props;

    return (
      <Collapse defaultActiveKey={[isOpen ? '1' : '0']} className={`td-collapse ${className}`}>
        <Collapse.Panel {...this.props} key="1">
          { children }
        </Collapse.Panel>
        <div className="td-collapse-right-extra">
          {rightExtra}
        </div>
      </Collapse>
    );
  }
}
