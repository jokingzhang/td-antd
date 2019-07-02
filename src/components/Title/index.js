import React from 'react';
import Button from 'antd/es/button';
import 'antd/es/button/style';
import './index.less';

export default function Title({ className, children, ...props }) {
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
      <div className={`td-h3 ${line ? 'td-h3-line' : ''}`}>
        <span className="td-h3-title">{title}</span>
        {renderButton()}
        {leftExtra}
        {rightExtra && (
          <div className="td-h3-right-extra">
            {rightExtra}
          </div>
        )}
      </div>
      <div className={`${line ? 'td-h3-content' : ''}`}>
        {children}
      </div>
    </div>
  );
}
