/*
* 像 modal 一样使用的气泡组件
* API: {
*   okText: 确定按钮的文案
*   cancelText: 取消按钮的文案
*   content: '', 浮层中的内容
*   okButtonProps: 确定按钮的属性
*   cancelButtonProps: 取消按钮的属性
*   onOk: 确定事件
*   onCancel: 取消事件
* }
* */

import React from 'react';
import { Button, Popover } from 'antd';
import './index.less';

export default class PopoverBox extends React.PureComponent {
  static defaultProps = {
    okText: '确定',
    cancelText: '取消',
    okButtonProps: {},
    cancelButtonProps: {},
  };
  state = {
    visible: false,
  };

  show = (cb) => {
    this.setState({
      visible: true,
    }, () => {
      // eslint-disable-next-line
      cb && cb();
    });
  };

  hide = (cb) => {
    // 模态框消失
    this.setState({
      visible: false,
    }, () => {
      // eslint-disable-next-line
      cb && cb();
    });
  };

  ok = () => {
    const { onOk } = this.props;
    // eslint-disable-next-line
    onOk ? onOk() : this.hide();
  };

  cancel = () => {
    const { onCancel } = this.props;
    // eslint-disable-next-line
    onCancel ? onCancel() : this.hide();
  };

  contentNode = () => {
    const {
      content,
      okText,
      cancelText,
      okButtonProps,
      cancelButtonProps,
    } = this.props;

    return (
      <React.Fragment>
        <div className="td-popover-content">{content}</div>
        <div className="td-popover-footer">
          <Button size="small" onClick={this.cancel} {...cancelButtonProps}>{cancelText}</Button>
          <Button size="small" type="primary" onClick={this.ok} {...okButtonProps}>{okText}</Button>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <Popover
        {...this.props}
        visible={visible}
        overlayClassName="td-popover-box"
        content={this.contentNode()}
        onVisibleChange={(v) => { this.setState({ visible: v }) }}
        trigger="click"
      >
        {children}
      </Popover>
    );
  }
}
