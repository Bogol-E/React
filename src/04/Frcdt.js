const Frcdt = ({dt, setDt}) => {
    let dtdiv1Tag = [...dt] ; 
    const show = (v) => {
        // console.log("show ", v) ;
        setDt(v) ;
    }

    dtdiv1Tag = dtdiv1Tag.map((v) => 
        <div className='dtdiv1' key={v} onClick={() => show(v)}>{v}</div>
    ) ;

    // console.log("frcdt ", dtdiv1Tag) ;
    return (
    <div className="mainbox1">
        {dtdiv1Tag}
    </div>
    ) ;
}

export default Frcdt;