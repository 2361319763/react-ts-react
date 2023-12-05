import React, { Component } from 'react';

export default class ClassComponentChild extends Component {

  state = {
    name: 'ClassComponentChild'
  }

  render(): React.ReactNode {
    return <div>ClassComponentChild</div>;
  }
}