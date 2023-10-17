/**
 * memo
 * 防止组件更新
 * 与PureComponent类似
 * 新老 props 相等时子组件不更新
 */

import React, { Component, ReactNode } from "react";
import { Card, Input, Button } from "antd";
import Child from "./child";

class memoIndex extends Component {
  state = {
    name: "memo",
    childName: "memo-child",
  };
  render(): ReactNode {
    console.log("memo-index");
    return (
      <Card>
        <h2>{this.state.name}</h2>
        <Child name={this.state.childName} />
        <Input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></Input>
        <Button onClick={()=>this.setState({childName:this.state.name})}>Click</Button>
      </Card>
    )
  }
}

// const memoIndex: React.FC = () => {
//   const [name, setName] = useState<string>("memo");
//   const [childName, setChildName] = useState<string>("memo-child");

//   useEffect(()=>{
//     console.log("memo-index update");
//   },[])
//   return (
//     <Card>
//       <h2>{name}</h2>
//       <Child name={childName} />
//       <Input value={name} onChange={(e)=>setName(e.target.value)}></Input>
//       <Button onClick={()=>setChildName(name)}>Click</Button>
//     </Card>
//   )
// }

export default memoIndex;