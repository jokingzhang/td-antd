import React from 'react';

class Test extends React.PureComponent {
  componentDidMount() {}

  render() {
    const { title = 'test' } = this.props;

    return (
      <div {...this.props}>{title}</div>
    );
  }
}

export default Test;
