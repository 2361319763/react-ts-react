/**
 * 初始化 阶段
 * constructor 构造函数 初始化时执行
 * 不可以修改状态
 * 
 * componentWillMount 将要挂在到 Dom 中  (将被弃用)
 *    可以访问到状态，并对状态进行修改
 *    获取不到组件中的Dom
 * 
 * render 正在渲染
 *    不能修改状态，会造成死循环
 * 
 * componentDidMount 已经挂在到 Dom 中
 * --------------------------------------------------
 * 
 * 运行中 阶段
 * componentWillUpdate 更新前 (将被弃用)
 * 
 * componentDidUpdate 更新后
 * 
 * componentWillReceiveProps 父组件修改属性触发
 * 
 * shouldComponentUpdate 组件更新判断 可用于性能优化
 * 返回false会阻止render调用
 * 
 * getDerivedStateFromProps 
 * 在调用 render 方法之前被调用，不管是在初始挂载时还是在后续组件更新时都会被调用
 * 返回的 state props 值不能被修改
 * 不能和 componentWillMount componentWillReceiveProps componentWillUpdate 同时使用
 * 
 * getSnapshotBeforeUpdate
 * 取代了componetWillUpdate，触发时间为update发生的时候，在render之后dom渲染之前返回一个值，作为componentDidUpdate的第三个参数
 * ---------------------------------------------------
 * 
 * 销毁阶段
 * componentWillUnmount
 */

import React, { Component } from 'react';
import { Card, Button } from "antd";

interface StateInterface {
  count: number;
}
interface PropsInterface {
  name?: string;
}

export default class LifeCycle extends Component<PropsInterface> {
  constructor(props:PropsInterface) {
    super(props);
    console.log('constructor');
  }
  state: StateInterface = {
    count: 0
  }
  // 将被弃用
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');

    // 第一次挂载到Dom树前的 最后一次修改状态的机会
    this.setState({
      count: ++this.state.count
    })
    // 初始化数据使用

  }
  componentDidMount(){
    console.log('componentDidMount');
    // 数据请求axios
    // 订阅函数调用
    // 启动定时器
    // 基于创建完的dom进行操作

  }
  // static getDerivedStateFromProps(Props: PropsInterface, State: StateInterface) {
  //   console.log('getDerivedStateFromProps');
  //     return {
  //       count: 1,
  //       name: "111"
  //     }
  // }
  // getSnapshotBeforeUpdate(prevProps: Readonly<PropsInterface>, prevState: Readonly<{}>) {
  //   console.log('getSnapshotBeforeUpdate');
  //   return null;
  // }
  // 将被弃用
  UNSAFE_componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
    console.log('componentWillUpdate');
      
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('componentDidUpdate');

    // 更新后对 dom 节点进行操作
    
  }
  componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void {
    console.log('componentWillReceiveProps');
  }
  // shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<StateInterface>, nextContext: any): boolean {
  //   console.log('shouldComponentUpdate');
  //   console.log('nextProps:',nextProps);
  //   console.log('nextState:',nextState);
  //   console.log('nextContext:',nextContext);
    
  //   return nextState.count % 2 === 0;
  // }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render () {
    console.log('render');
    
    return (
      <Card>
        <h2>LifeCycle</h2>
        <p>{ this.props?.name }</p>
        <p>{ this.state.count }</p>
        <Button onClick={()=>this.setState({count: ++this.state.count})}>Add</Button>
      </Card>
    )
  }
}