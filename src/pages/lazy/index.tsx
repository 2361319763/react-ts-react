import React, { useState, Suspense } from "react";
import { Button } from "antd";
// import Comingsoon from "./comingsoon"
// import Nowplaying from "./nowplaying"
const Nowplaying = React.lazy(() => import("./nowplaying"))
const Comingsoon = React.lazy(() => import("./comingsoon"))
const LazyIndex: React.FC = () => {
  const [type,setType] = useState("1");
  return (
    <div>
      <h2> Lazy Index </h2>
      <Button onClick={()=>setType("1")}>正在热映</Button>
      <Button onClick={()=>setType("2")}>即将上映</Button>
      <Suspense fallback={<p>Loading</p>}>
        {type === "1" && <Nowplaying />}
        {type === "2" && <Comingsoon />}
      </Suspense>
    </div>);
}

export default LazyIndex;