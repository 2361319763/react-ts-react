import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { Button } from 'antd';
import { ReducerInterface } from '@/redux/reducers'

interface PropsInterface {
  name: string;
  count?: number;
  dispatchSetNmae: (name: string) => void;
  dispatchSetCount?: () => void;
}

const promiseGetCount = () => {
  return new Promise((resolve,reject)=>{
    resolve({
      type: 'SET_COUNT',
      payload: 2
    })
  })
}

const reactReduxIndex: React.FC<PropsInterface> = (props) => {
  const dispatch = useDispatch();
  const { dispatchSetNmae } = props;
  const count = useSelector((state:ReducerInterface) => state.countReducer.count);

  useEffect(()=>{
    console.log('reactRedux - props:',props);
  },[])
  
  const dispatchSetCount = () => {
    dispatch(promiseGetCount())
  }

  return (
    <div>
      <h2>reactRedux</h2>
      <p>name — { props.name }</p>
      <p>count — { count }</p>
      <Button onClick={()=>{dispatchSetNmae('reactRedux')}}>发布 SET_NAME</Button>
      <Button onClick={()=>{dispatchSetCount()}}>发布 SET_COUNT</Button>
    </div>
  )
}

const mapStateToProps = (store:ReducerInterface)=>{
  console.log('reactRedux - store:',store);
  return {
    name: store.userReducer.name,
    // count: store.countReducer.count
  }
}
const mapDispatchToProps = (dispatch:Dispatch) => ({
  dispatchSetNmae: (payload:string = 'reduxChild') => {
    dispatch({
      type: 'SET_NAME',
      payload
    })
  },
  // dispatchSetCount: () => {
  //   dispatch(promiseGetCount())
  // }
})
export default connect(mapStateToProps,mapDispatchToProps)(reactReduxIndex);