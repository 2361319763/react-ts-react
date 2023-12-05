import React from "react";
import { createPortal } from "react-dom";

interface PropsInterface {
  onClose: () => void;
}
const dioalg: React.FC<PropsInterface> = (props) => {
  return createPortal(
    <div 
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: '1000',
        background: 'rgba(0,0,0,0.7)'
      }}
      onClick={()=>{
        props.onClose();
      }}
    >
    </div>
  ,document.body)
}

export default dioalg;