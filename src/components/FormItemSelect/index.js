import React from 'react';
import { Select } from 'antd';
import FormItem from '../FormItem';

class FormItemSelect extends React.PureComponent {
  state = {
    data: this.props.data || [],
  };

  componentDidMount() {
    const { data, fetchUrl, callback = () => {} } = this.props;

    if (!data) {
      fetch(fetchUrl, {
        credentials: 'include',
      }).then(response => response)
        .then(response => response.json())
        .then((res) => {
          this.setState({ data: callback(res) });
        }).catch((error) => error);
    }
  }

  renderRead = (data, fields, initialValue) => {
    const obj = data.filter(item => item[fields[0]] === initialValue)[0];

    if (obj) {
      return (typeof fields[1] === "function") ? fields[1](obj) : obj[fields[1]];
    }

    return '--';
  };

  render() {
    const { data } = this.state;
    const { form, fields = ['', ''], selectProps = {}, initialValue } = this.props;

    return(
      <FormItem
        {...this.props}
      >
        {!form ? (
          this.renderRead(data, fields, initialValue)
        ) : (
          <Select
            {...selectProps}
            style={{ width: '100%' }}
            showSearch
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            {data.map(item => (
              <Select.Option
                key={item[fields[0]]}
              >
                {(typeof fields[1] === "function") ? fields[1](item) : item[fields[1]]}
              </Select.Option>)
            )}
          </Select>
        )}
      </FormItem>
    );
  }
}

export default FormItemSelect;
