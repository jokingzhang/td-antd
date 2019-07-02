import React from 'react';
import './index.less';

function LinkBtn({ className = '', children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className={`td-linkBtn ${className}`}
    >
      {children}
    </button>
  );
}

export default LinkBtn;
