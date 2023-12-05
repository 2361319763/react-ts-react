/**
 * PureComponent (可用于性能优化)
 * 会帮你比较新props 跟旧的props，
 * 新的state和老的state (值相等,或者对象含有相同的属性、且属性值相等 )，
 * 决定shouldcomponentUpdate 返回true 或者false， 
 * 从而决定要不要呼叫 render function。
 */

import React, { PureComponent } from 'react';
import { Button } from 'antd';

interface PropsInterface {
  name: string;
}

export default class PureComponenIndex extends PureComponent<PropsInterface> {

  constructor(props: any) {
    super(props);
  }

  state = {
    count: 0
  }

  componentDidMount(){
    console.log('PureComponenIndex-componentDidMount');

  }
  getSnapshotBeforeUpdate(prevProps: Readonly<PropsInterface>, prevState: Readonly<{}>) {
    console.log('PureComponenIndex-getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('PureComponenIndex-componentDidUpdate');
  }

  render() {
    console.log('PureComponenIndex-render');
    return (
      <div>
        PureComponent - {this.props.name} - {this.state.count}
        <Button onClick={()=>this.setState({count: ++this.state.count})}>Add</Button>
      </div>
    )
  }
}