import * as React from 'react';
import * as Antd from 'antd';
import FormItem from '../FormItem';

const Select = Antd.Select;

class FormItemSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data || [],
      loading: false,
    };
  }

  componentDidMount() {
    const { data, fetchUrl, callback = () => {} } = this.props;

    if (!data) {
      this.setState({ loading: true });
      fetch(fetchUrl, {
        credentials: 'include',
      }).then(response => response)
        .then(response => response.json())
        .then((res) => {
          this.setState({ loading: false });
          this.setState({ data: callback(res) });
        }).catch((error) => {
        this.setState({ loading: false });
        return error;
      });
    }
  }

  // 需要处理 单选和多选的回显
  renderRead = (data, fields, initialValue) => {
    const arr = data.filter(item => initialValue.includes(item[fields[0]]));

    if (arr && arr.length > 0) {
      const str = arr.map(item => (typeof fields[1] === "function") ? fields[1](item) : item[fields[1]]);
      return str.join('、');
    }

    return '--';
  };

  render() {
    const { data, loading } = this.state;
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
            loading={loading}
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
