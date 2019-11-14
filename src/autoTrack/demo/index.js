import React from 'react';
import autoTrack from '../index';

autoTrack({
  pageCallback: (log) => {
    console.log(log);
  },
  eventCallback: (log) => {
    console.log(log);
  }
});

export default class Demo extends React.Component {
  render() {
    return (
      <div logpage="页面级">
        <button logevent={{ type: 'click 事件触发' }}>按钮</button>
      </div>
    );
  }
}