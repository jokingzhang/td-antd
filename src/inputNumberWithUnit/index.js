import * as React from 'react';
import InputNumber from 'antd/es/input-number';
import 'antd/es/input-number/style';

const symbolReg = {
  '¥': /\¥\s?|(,*)/g,
  '$': /\$\s?|(,*)/g,
  'NT$': /\NT\s?|(,*)/g,
  'zł': /\zł\s?|(,*)/g,
  '€': /\€\s?|(,*)/g,
};

export default class InputNumberWithUnit extends React.Component {
  static defaultProps = {
    unit: '',
  };

  isMoneySymbol = () => {
    const { unit } = this.props;
    const symbol = Object.keys(symbolReg);
    return symbol.includes(unit);
  };

  render() {
    const { unit } = this.props;

    if (this.isMoneySymbol()) {
      return (
        <InputNumber
          formatter={value => `${unit} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(symbolReg[unit], '')}
          {...this.props}
        />
      );
    }

    return (
      <InputNumber
        formatter={value => `${value}${unit}`}
        parser={value => value.replace(unit, '')}
        {...this.props}
      />
    );
  }
}
