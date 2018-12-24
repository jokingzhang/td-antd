import React from 'react';
import { Button } from 'antd';
import './index.less';

function H3({ className, children, ...props }) {
  const {
    title = '',
    btnText = '',
    disabled = false,
    onClick = () => {},
    size = 'small',
    line = true,
    leftExtra,
    rightExtra,
  } = props;

  const renderButton = () => {
    if (typeof btnText === 'string' && btnText.length > 0) {
      return (
        <Button
          className="td-h3-btn"
          type="primary"
          ghost
          disabled={disabled}
          size={size}
          onClick={onClick}
        >
          { btnText }
        </Button>
      );
    }
  };

  return (
    <div className={className}>
      <h3 className={`td-h3 ${line ? 'td-h3-line' : ''}`}>
        <span>{title}</span>
        {renderButton()}
        {leftExtra}
        {rightExtra ? (
          <div className="td-h3-right-extra">
            {rightExtra}
          </div>
        ) : null}
      </h3>
      <div className={`${line ? 'td-h3-content' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default H3;
