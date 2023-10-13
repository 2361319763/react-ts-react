import React, { Component } from 'react';
import { Button } from 'antd';
import ClassComponentChild from './child';

interface InState {
  myShow: boolean;
  index: number;
}
export type userProps = {
  name: string;
  age: number;
}

export default class classComponent extends Component<userProps>{
  
  static defaultProps: userProps = {
    name: 'default',
    age: 18
  }

  public state: InState = {
    myShow: true,
    index: 0
  }
  myRef = React.createRef<HTMLDivElement>();
  childRef = React.createRef<ClassComponentChild>();

  constructor(props: userProps){
    super(props);
  }

  setShow = () => {
    this.setState({ 
      myShow: !this.state.myShow,
      index: ++this.state.index
    })
  }

  getChild = () => {
    console.log(this.childRef);
  }

  render() {
    return(
      <div>
        <h2>classComponent</h2>
        <p ref={ this.myRef }>{ this.props.name } - { this.props.age }</p>
        <p>{ this.state.index }</p>
        <Button onClick={() => this.setShow()}>{  this.state.myShow ? "取消收藏" : "收藏" }</Button>
        <br />
        <ClassComponentChild ref={this.childRef} />
        <Button onClick={() => this.getChild()}>获取子组件信息</Button>
      </div>
    );
  }
}