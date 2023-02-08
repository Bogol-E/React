import Mydiv11 from "./Mydiv11";
import { useState } from "react";
import { useEffect } from "react";

const Mydiv1 = ({rname, n, setn}) => {
    const user = rname ; 
    let [cnt, setCnt] = useState(0) ;

    const addCnt = () => { 
        setCnt(++cnt);
        setn(cnt);
        console.log(cnt);
    }  

    useEffect(()=>{
        console.log('Mydiv1 처음입니다...')
    }, [])

    useEffect(()=>{
        console.log('변경되었습니다...')
        return (
            console.log('종료...')
        )
    }, )

    useEffect(()=>{
        console.log('cnt변경으로 n변경')
        setn(++n);
    }, [cnt])

    return (
        <div className="mydiv1">
            <h2 className="divh2">Mydiv1 {user}</h2>
            <Mydiv11 user={user} divname={'사용자정의'+ cnt} />
            <div className="divbt">
                <button onClick={addCnt}>❤️</button>
                <span>{cnt}</span>
            </div>
        </div>
    ) ;
}

export default Mydiv1 ;