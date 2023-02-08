const Taccidentmm = ( {c1, c2, data, m , setmm}) => {
    const show = (v) => {
        // console.log("show ", v) ;
        setmm(v) ;
    }
 
    let cc2=[];
    for(let i=0; i< c2.length; i++){
       
        if (c2[i][0]===m)  cc2.push(c2[i][1]);
      
    };

    
    
    
    
    cc2 = cc2.map((i) => 
        <div className="tcard" key={i} onClick={() => show(i)}>{i}</div>
        
    )
  
  
    return (
        <div className="tc2">
            <h2>중분류</h2>
            {cc2}
        </div>
    ) ;
}

export default Taccidentmm ;