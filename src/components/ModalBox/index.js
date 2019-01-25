import * as React from 'react';
import * as Antd from 'antd';

const Modal = Antd.Modal;

export default class ModalBox extends React.Component {
  state = {
    visible: false,
  };

  show = (cb) => {
    // 显示模态框
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
    // 点击确定按钮
    const { handleOk } = this.props;
    if (handleOk) {
      handleOk();
      return;
    }
    this.hide();
  };

  cancel = () => {
    // 点击取消按钮
    const { handleCancel } = this.props;
    if (handleCancel) {
      handleCancel();
      return;
    }
    this.hide();
  };

  render() {
    const { visible } = this.state;
    const {
      width = 500,
      // title = '标题',  // 标题添加
      // maskClosable = false,  // 点击蒙层是否允许关闭
      // closable = true, // 右上角取消按钮
      // okText = '确定', // 确定按钮的文案
      // cancelText = '取消', // 取消按钮文案
      // confirmLoading = false, // 确定按钮 loading
      children,
    } = this.props;
    return (
      <Modal
        width={width}
        visible={visible}
        onOk={this.ok}
        onCancel={this.cancel}
        destroyOnClose
        maskClosable={false}
        {...this.props}
      >
        {children}
      </Modal>
    );
  }
}
