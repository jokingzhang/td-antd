/*
* 可拖拽的 Modal，无遮罩层，可多开的浮层
* title 部分可进行拖拽
* */

import React from 'react';
import Modal from 'antd/es/modal';
import 'antd/es/modal/style';
import styles from './index.less';

class DragModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.id = Math.random();
    this.initLeft = (window.innerWidth - (props.width || 520)) / 2; // 初始化位置调整
    this.dragDom = null; // 拖拽的目标元素
    this.dragging = false; // 是否拖拽的开关
    this.tLeft = 0; // ---|
    this.tTop = 0; //  ------> 坐标轴
  }

  componentDidMount() {
    this.getDragDom();
  }

  componentDidUpdate() {
    if (!this.dragDom) {
      this.getDragDom();
    }
  };

  /*
   * 初始渲染时，直接获取 Modal 的 dom 会获取不到。
   * 设置 ref 使用 findDOMNode 也获取不到。
   * 只能在定时器中使用原生方式来获取。
   * */
  getDragDom = () => {
    setTimeout(() => {
      // 获取唯一标示元素
      const dragDom = document.getElementsByClassName(`d_${this.id}`)[0];
      if (dragDom) {
        dragDom.style.left = `${this.initLeft}px`;
        dragDom.style.top = '100px';
        this.dragDom = dragDom;
      }
    });
  };

  onMouseDown = (e) => {
    e.preventDefault();
    this.dragging = true; // 激活拖拽状态
    /*
    * 实现点击后，当前浮层在最上面
    * */
    const nodeList = document.getElementsByClassName(styles.drag_modal);
    if (nodeList.length > 0) {
      Array.from(nodeList).forEach(item => item.style.zIndex = 9999);
      this.dragDom.style.zIndex = 10000;
    }

    /*
    * getBoundingClientRect: 返回一个 DomRect 对象
    *   包含该元素的 top、right、bottom、left 值，对应的是到屏幕上方和左边的距离，单位 px
    * */
    const dragDomRect = this.dragDom.getBoundingClientRect();
    /*
    * e.clientX、e.clientY
    *   获取鼠标的坐标位置
    * */
    this.tLeft = e.clientX - dragDomRect.left; // 鼠标按下时和选中元素的坐标偏移:x坐标
    this.tTop = e.clientY - dragDomRect.top; // 鼠标按下时和选中元素的坐标偏移:y坐标

    this.onMouseMove(this.dragDom);
  };

  onMouseUp = (e) => {
    e.preventDefault();
    this.dragging = false; // 停止移动状态
    document.onmousemove = null; // 停止鼠标移动事件
  };

  onMouseMove = (node) => {
    document.onmousemove = (e) => {
      e.preventDefault();
      if (this.dragging) {
        node.style.left = `${e.clientX - this.tLeft}px`;
        node.style.top = `${e.clientY - this.tTop}px`;
      }
    }
  };

  render() {
    const { children, title = 'Drag-Modal', wrapClassName = '' } = this.props;

    return (
      <Modal
        {...this.props}
        mask={false}
        wrapClassName={`${styles.drag_modal} d_${this.id} ${wrapClassName}`}
        title={
          <div
            className={`${styles.drag_title}`}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
          >
            {title}
          </div>
        }
      >
        {children}
      </Modal>
    );
  }
}

export default DragModal;
