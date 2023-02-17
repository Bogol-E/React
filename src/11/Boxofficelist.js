import { useEffect, useState } from "react";



const Boxofficelist = ({ tg }) => {
    const [con, setcon]=useState();
    const [cd, setcd]=useState();
    // let showdetail({i.movieCd}) =>{
    //     return setcd({i.movieCd})
    // }
    useEffect(() => {
        if (!tg) return;
        const api = 'f5eef3421c602c6cb7ea224104795888&';
        // let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101`;
        let url=`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url += `key=${api}`;
        url += `targetDt=${tg}`;
        

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                data=data.boxOfficeResult.dailyBoxOfficeList;
                console.log("추출", data[0].rank);
                              
                setcon(data.map((i,k)=>{
                return <div className={i.movieCd} key={`c${k}`} >
                    {/* onClick={()=>showdetail(i.movieCd)} */}
                    <span className="s1" key={`rank${k}`}>{i.rank}</span>
                    <span className="s2" key={`movieNm${k}`}>{i.movieNm}</span>
                    <span className="s3" key={`salesAmt${k}`}>{parseInt(i.audiCnt).toLocaleString('ko-KR')}명</span>
                    </div>

            
            
            }));
                
            })
            
            .catch(err => {
                setcon(<div><h2>랜더링 실패 지난 날짜를 선택하세요</h2></div>)
            })

    }, [tg])





    return (
        <div className="left">
            <div className="row" key="cbal"><span className="s1">순위</span>
            <span className="s2" >영화명</span>
            <span className="s3">관객수</span>
            </div>
            {con}
        </div>

    );
}

export default Boxofficelist;