import React from 'react';
import { Card, Button } from 'antd';
import { Map, List, fromJS } from 'immutable';

class immutableIndex extends React.Component {
  state = {
    info: Map({
      name: '张三',
      location: Map({
        province: '浙江',
        city: '杭州'
      }),
      favor: List(['读书','看报','写代码'])
    }),
    info2: fromJS({
      name: '张三',
      location: {
        province: '浙江',
        city: '杭州'
      },
      favor: ['读书','看报','写代码']
    })
  }
  setName() {
    this.setState({
      'info':this.state.info.set('name', '李四').set('location', this.state.info.get('location').set('city', '宁波'))
    })
  }
  setNametoFromJs() {
    this.setState({
      'info2':this.state.info2.setIn(['name'], '李四').setIn(['location','city'], '宁波')
    })
  }
  deleteFavor(index:number) {
    this.setState({
      'info':this.state.info.update('favor', (list:List<string>)=>list.delete(index))
    })
  }
  render() {
    return (
      <Card>
        <h2>immutable</h2>
        <p>个人信息</p>
        <Button onClick={()=>this.setName()}>修改</Button>
        <Button onClick={()=>this.setNametoFromJs()}>fromJS 修改</Button>
        <div>
          { this.state.info.get('name') } <br />
          { this.state.info.get('location').get('province') } - { this.state.info.get('location').get('city') } <br />
          { 
            this.state.info.get('favor').map((item,index) => {
              return (
                <li key={item}> 
                  <span>{item}</span>
                  <Button size='small' onClick={()=>this.deleteFavor(index)}>删除</Button>
                </li>
              )
            })
          }
        </div>
        <hr />
        <p>fromJS</p>
        <div>
          { this.state.info2.get('name') } <br />
          { this.state.info2.get('location').get('province') } - { this.state.info2.get('location').get('city') }
        </div>
      </Card>
    )
  }
}

export default immutableIndex;