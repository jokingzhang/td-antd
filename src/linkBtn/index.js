import * as React from 'react';
import styles from './index.module.less';

export default class LinkBtn extends React.Component {
  static defaultProps = {
    className: '',
  };

  render() {
    const { className, children } = this.props;

    return (
      <button
        type="button"
        {...this.props}
        className={`${styles.normal} ${className}`}
      >
        {children}
      </button>
    );
  }
}
