import * as React from 'react';
import Modal from 'antd/es/modal';
import 'antd/es/modal/style';

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
