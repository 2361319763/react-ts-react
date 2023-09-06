export default function TabName(props:any) {
  console.log('props',props);
	// 子传父
    const handleClick = (msg:string) => {
      props.changeMsg(msg);
    };
    return (
        <div>
            <div>{props.msg}</div>
            <button onClick={()=>{handleClick('77777')}}>测试</button>
        </div>
    );
}