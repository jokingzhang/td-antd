import * as React from 'react';
import InputNumber from 'antd/es/input-number';
import 'antd/es/input-number/style';
import style from './index.module.less';

export default class InputNumberWithUnit extends React.PureComponent {
  render() {
    const { unit, positionTop = 0 } = this.props;

    if (unit) {
      return (
        <div className={style['td-number-input-wrapper']}>
          <InputNumber {...this.props} />
          <span className={style['td-number-input-unit']} style={{ top: positionTop }}>{unit}</span>
        </div>
      );
    }

    return <InputNumber {...this.props} />;
  }
}
