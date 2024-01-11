/**
 * 背景图片渐变切换
 */

import React from "react";
import "./index.scss"

const cinematic: React.FC = () => {

  const imgList = [
    "https://images.unsplash.com/photo-1504221507732-5246c045949b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQ2OTA1MjE&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1595131838595-3154b9f4450b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQ2OTA1MjE&ixlib=rb-4.0.3&q=80",
    "https://images.unsplash.com/photo-1618331835717-801e976710b2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQ2OTA1NjU&ixlib=rb-4.0.3&q=80"
  ]

  return (
    <div className="stage">
      {
        imgList.map((item, index) => {
          return <div 
            className="actor" 
            key={'actor_'+index}
            style={{
              backgroundImage: `url(${item})`,
              animationDelay: index * 10 + "s"
            }}
          ></div>
        })
      }
    </div>
  )
}

export default cinematic;