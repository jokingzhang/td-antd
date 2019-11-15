import * as React from 'react';
import classNames from 'classnames';
import './index.less';

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
        className={classNames('td-linkBtn-normal', className)}
      >
        {children}
      </button>
    );
  }
}
