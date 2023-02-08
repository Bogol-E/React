import Galm from "./Galm";
import Gald from "./Gald";
import { useState } from "react";

const Galmain = ({data})=>{

    let dataN=[];

    for (let i =0; i<data.length; i++){
        dataN.push(data[i].galTitle)
    }

    let [m, setm] = useState(null) ;

    return (
        <>
            <div className="head"><h1>해결문제</h1></div>
            <div className="main">
                <Galm  dataN ={dataN} setm={setm} />
                <Gald m={m} data={data} />
            </div>
        </>
    )
}

export default Galmain;