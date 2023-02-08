const Taccidentm = ( {c1, c2, data, setm, setmm}) => {
    
    
   
    const show = (v) => {
        // console.log("show ", v) ;
        setm(v) ;
        setmm(null);
    }

    c1 = c1.map((i) => 
        <div className="tcard" key={i} onClick={() => show(i)}>{i}</div>
        
    ) ;
    
        
    return (
        <div className="tc1">
            <h2>대분류</h2>
                {c1}
        </div>
    ) ;
}

export default Taccidentm ;