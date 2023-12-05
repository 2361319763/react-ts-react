import React from "react";

export type TabNameProps = {
  msg: string | undefined;
  changeMsg:(msg:string)=>void;
}
const TabName: React.FC<TabNameProps> = (props) => {
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
TabName.defaultProps = {
  msg: '默认值'
}
export default TabName;