import { Component } from 'react';
import { Button } from 'antd';

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

  constructor(props: userProps){
    super(props);
  }

  setShow = () => {
    this.setState({ 
      myShow: !this.state.myShow,
      index: ++this.state.index
    })
  }

  render() {
    return(
      <div>
        <h2>classComponent</h2>
        <p>{ this.props.name } - { this.props.age }</p>
        <p>{ this.state.index }</p>
        <Button onClick={() => this.setShow()}>{  this.state.myShow ? "取消收藏" : "收藏" }</Button>
      </div>
    );
  }
}