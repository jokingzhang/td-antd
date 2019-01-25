import * as React from 'react';
import * as Antd from 'antd';
import './index.less';

const { Form, Button, Row } = Antd;

class SearchForm extends React.PureComponent {
  handleSearch = (e) => {
    e.preventDefault();
    const { form, callback = () => {} } = this.props;

    form.validateFields((err, values) => {
      callback(values);
    });
  };

  render() {
    const { form, btnText = '查询', children } = this.props;
    const formProps = { form, required: false };

    return (
      <Form onSubmit={this.handleSearch} className="td-list-form" autoComplete="off">
        <Row>
          {children(formProps)}
          {btnText !== '' ? <Button htmlType="submit">{btnText}</Button> : null}
        </Row>
      </Form>
    );
  }
}

export default Form.create()(SearchForm);
