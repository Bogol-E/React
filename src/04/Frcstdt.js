import { useState } from 'react';

// const Frcstdt = (probs) => {
//     let dtidiv1Tag =[...probs.dt];

    const Frcstdt = ({dt, setdt}) => {
        let dtidiv1Tag =[...dt];

    const show = (v) => {
        console.log("show", v)
        setdt=v;
        
    }

    dtidiv1Tag = dtidiv1Tag.map((v)=>
        <div className="dtdiv1" key ={v} onClick={()=>show(v)} >{v}</div>
    );

    
    // console.log(dt);

    return(
        <div className="mainbox1">
            {dtidiv1Tag}
        </div>
    );
}

export default Frcstdt;