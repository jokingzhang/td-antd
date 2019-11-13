/*
* 全局引用的 "埋点" 插件
* TODO：
*  1、目前只针对 click 事件进行埋点处理。其他事件持续优化中
*  2、页面级埋点全局只会触发一次，切换路由后也不会重新发起，后续将在优化中进行监听组件销毁事件
*
* 使用方法：
* import { autoTrack } from 'td-antd';
*
* // 此方法全局调用一次即可
* AutoTrack({
*   pageCallback: (log) => {} // 页面埋点回调
*   eventCallback: (log) => {} // click 事件埋点回调
* })
*
* ReactNode 中标记案例，如:
*
* <div logpage={{ type: '页面级' }}>
*   <button logevent={{ type: 'click 事件触发' }}>按钮</button>
* </div>
* */

import * as React from 'react';

const trackList = []; // 全局的埋点数据记录

const autoTrack = (config) => {
  const {
    pageCallback = () => {},
    eventCallback = () => {},
  } = config;
  const originCreateElement = React.createElement;

  React.createElement = function () {
    // eslint-disable-next-line
    const args = arguments;
    const props = args[1] || {};

    // 当页面级的埋点存在时，且缓存中没有该埋点数据时
    if (args[1] && args[1].logpage && trackList.indexOf(args[1].logpage.type) === -1) {
      pageCallback(args[1].logpage);
      trackList.push(args[1].logpage.type);
    }

    if (args[1] && args[1].logevent) {
      const event = function () {
        const newProps = Object.assign(props);
        const click = newProps.onClick;
        newProps.onClick = function () {
          if (typeof click === 'function') {
            click();
          }
          eventCallback(args[1].logevent);
        };

        return newProps;
      };
      args[1] = event();
    }

    // eslint-disable-next-line
    return originCreateElement.apply(null, args);
  };
};

export default autoTrack;
