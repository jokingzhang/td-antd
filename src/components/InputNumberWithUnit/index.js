import * as React from 'react';
import InputNumber from 'antd/es/input-number';
import 'antd/es/input-number/style';
import './index.less';

export default class InputNumberWithUnit extends React.PureComponent {
  render() {
    const { unit } = this.props;

    if (unit) {
      return (
        <div className="td-number-input-wrapper">
          <InputNumber {...this.props} />
          <div className="td-number-input-unit">{unit}</div>
        </div>
      );
    }

    return <InputNumber {...this.props} />;
  }
}
