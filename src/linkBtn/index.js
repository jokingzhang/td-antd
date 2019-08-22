import * as React from 'react';
import styles from './index.module.less';

function LinkBtn({ className = '', children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className={`${styles.normal} ${className}`}
    >
      {children}
    </button>
  );
}

export default LinkBtn;
