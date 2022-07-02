import React, { Component } from 'react';
import AddressForm from '../src/index';

class TestProps extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      address: { d: 'd', a: 'a', p: 'p', z: 123, }
    }
  }


  onClick() {
    const { address } = this.state;
    address.d = "123666"
    this.setState({
      address: { }
    })
  }

  render() {
    const { address } = this.state;
    return (
      <div style={{ width: 400 }}>
        <AddressForm
          showLabel
          maxVisible={40}
          values={address}
        />
        <button onClick={this.onClick}>button</button>
      </div>
    );
  }
}
export default TestProps;
