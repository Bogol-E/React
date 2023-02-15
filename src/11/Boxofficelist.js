import { useEffect } from "react";

const Boxofficelist = ({tg}) => {

        console.log(tg)

    useEffect(()=>{
        if (!tg) return;
        const api='f5eef3421c602c6cb7ea224104795888&';
        let url=`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101`;
        // let url=`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${api}targetDt=${tg}`;

        fetch(url)
        .then((resp)=>{resp.json()})
        .then((data)=>{
            console.log("데어터", data)
        })
        .catch(err=>{
            console.log("에러", err)
        })

    }, [])



    return (
        <div>
            sdf
        </div>

    );
}

export default Boxofficelist;