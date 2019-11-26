import React from 'react';
import './index.less';

export default (props) => {
  return (
    <div className="td-handleBox">{props.children}</div>
  );
}