import * as React from 'react';
import * as Antd from 'antd';
import './index.less';

const { InputNumber } = Antd;

export default class InputNumberWithUnit extends React.PureComponent {
  render() {
    const { unit } = this.props;

    if (unit) {
      return (
        <div className="td-number-input-wrapper">
          <InputNumber {...this.props} />
          <span className="td-number-input-unit">{unit}</span>
        </div>
      );
    }

    return <InputNumber {...this.props} />;
  }
}
