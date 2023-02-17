import { useEffect, useState } from "react";

const Detail = ({ cd }) => {
    const [mTag, setMTag] = useState();
    const getData = async () => {
        let url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&'
        url = url + `movieCd=${cd}`;

        try {
            const resp = await fetch(url);
            const data = await resp.json();

            let temp = data.movieInfoResult.movieInfo;
            const showitem = {
                "영화명": "movieNm",
                "개봉일": "openDt",
                "제작상태": "prdtStatNm",
                "영화구분": "typeNm",
                "감독": "directors"
            }

            if (cd) {
                let tag = []
                for (let [k, v] of Object.entries(showitem)) {
                    if (k === "감독") {
                        tag.push(<div className="dtdiv" key={k}>
                            <span className="dtsp1">{k}</span>
                            <span className="dtsp2">{temp[v][0].peopleNm}</span>
                        </div>)
                    }
                    else {
                        tag.push(<div className="dtdiv" key={k}>
                            <span className="dtsp1">{k}</span>
                            <span className="dtsp2">{temp[v]}</span>
                        </div>)
                    }
                };
                setMTag(tag);
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getData();
    }, [cd]);

    return (
        <>
            {cd && mTag}
        </>
    )
}

export default Detail;