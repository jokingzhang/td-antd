/*
* 监控浏览器宽度大小，判断是否为移动设备，并返回 isMobile。基于 window.matchMedia 封装的 react 高阶组件
* 使用方式：
* @matchMedia(width)
* class DragModal extends React.PureComponent {}
* */

import * as React from 'react';

const matchMedia = (width = '700') => (WrappedComponent) => {
  return class extends React.PureComponent {
    state = {
      isMobile: false,
    };

    componentDidMount() {
      const x = window.matchMedia(`(max-width: ${width}px)`);
      this.mediaFn(x);
      x.addListener(this.mediaFn)
    }

    mediaFn = (x) => {
      this.setState({ isMobile: x.matches });
    };

    render() {
      const { isMobile } = this.state;

      return <WrappedComponent isMobile={isMobile} />;
    }
  }
};

export default matchMedia;
