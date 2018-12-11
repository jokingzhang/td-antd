/*
* React v16 新特性
* 内置 componentDidCatch 函数可处理错误日志，达到错误边界处理的目的，而不会使整个组件树卸载
* 问题：在渲染阶段会捕获错误，但是在运行状态下无法捕获错误。
* */

import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
      count: 0,
    };
  }

  // 如果首次未捕获到错误，将不执行此函数
  componentDidCatch(err) {
    const { count } = this.state;

    this.setState({
      hasError: true,
      errorMessage: err.message || 'Something went wrong!',
      count: count + 1,
    });
  }

  // 使用计数方式规避首次渲染无法正常恢复错误字段值的问题
  componentWillReceiveProps() {
    const { count } = this.state;

    if (count > 0) {
      this.setState({
        hasError: false,
      });
    }
  }

  render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <div style={{ padding: '20px', color: 'red' }}>{`ERROR: ${errorMessage}`}</div>;
    }
    return children;
  }
}
