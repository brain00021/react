import React, { Component } from 'react';
import MyButton from './MyButton';
import YourButton from './YourButton';
import HisButton from './HisButton';
class AllButton extends Component {
  render() {
    return (
      <div>
        <MyButton>Hello</MyButton>
        <YourButton>World</YourButton>
        <HisButton>Hello Everyone</HisButton>
      </div>
    );
  }
}

export default AllButton;