import React, { useEffect, memo } from "react";

interface IProps {
  name: string;
}

const memoChild: React.FC<IProps> = memo((props) => {
  useEffect(() => {
    console.log("child",props);
  }, []);
  return <div>{props.name}</div>;
})

export default memoChild;