const Taccidentd = ( {c1, c2, m, mm, data}) => {
    let ddat
    
    if (mm === null){
        m = null;
        ddat={};
    } else {
        for(let i=0; i< c2.length; i++){
            if ( data[i].사고유형_중분류 === mm && data[i].사고유형_대분류 === m ){
                ddat=data[i];
            }
        };
    }

    let keys=["사고유형_대분류", "사고유형_중분류", "사고건수", "사망자수", "중상자수"];
        
    let ddat1 = Object.entries(ddat);

    ddat1 = ddat1.map((i) => 
        <div className="tcardSel" key={i} >{i}</div>
    ) ;


    // let ddat2 = ddat1.map(({사고유형_중분류, 사고유형_대분류, ...rest} )=>rest);
    // ddat2 = ddat1.map((i) => 
    //     <div className="tcdetail" key={i} >{i}</div>
    // ) ;
   


//  교수님
    // let selData = data.filter((i)=> 
    // i.사고유형_대분류 === m &&  i.사고유형_중분류 === mm
    // )[0]

    // 

    let dtag =keys.map((k)=>
    <li>
        <span>{k}</span>
        <span>{ddat1[k]}</span>
    </li>);

    // dtag.push(
  
    //     <li>
    //         <span>

    //         </span>
    //         <span>

    //         </span>
    //     </li>
    // )


    return (
        <div className="tcdetail">
            <h2>상세내용</h2>
            {dtag}
        </div>
      ) ;
}

export default Taccidentd ;