import './style11.css';

import { useState, useRef, useEffect } from 'react';

const Box = () => {

  const link = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="
  //const [date, setDate] = useState();
  const pickedDate = useRef();
  const [url, setUrl] = useState();
  const [view, setView] = useState([]);
  
  const setPickedDate = () => {
    setUrl(link + (pickedDate.current.value).replaceAll('-',''));
  };

  useEffect(() => {
    fetch(url).then((result) => result.json())
    .then((data) => {
      const list = data.boxOfficeResult.dailyBoxOfficeList;
      setView(
        list.map((item, index) => {
          let rank;
          if(item.rankInten > 0) rank = <span key={`cr${index}`} className='movie-ChangeRank font-red'>{"▲ " + Math.abs(item.rankInten)}</span>;
          if(item.rankInten == 0) rank = <span key={`cr${index}`} className='movie-ChangeRank'>{"-"}</span>;
          if(item.rankInten < 0) rank = <span key={`cr${index}`} className='movie-ChangeRank font-blue'>{"▼ " + Math.abs(item.rankInten)}</span>;
          return <div key={index} className="contentLine" >
            <span key={`rk${index}`} className='movie-Rank'>{item.rank}</span>
            <span key={`mn${index}`} className='movie-Name'>{item.movieNm}</span>
            <span key={`pr${index}`} className='movie-Price'>{parseInt(item.salesAmt).toLocaleString('ko-KR')}원</span>
            <span key={`wt${index}`} className='movie-Watcher'>{parseInt(item.audiCnt).toLocaleString('ko-KR')}명</span>
            {rank}
          </div>
        })
      );
      console.log(list);
      console.log(view);
    });
  },[url]);

  return (
    <div className="body">
      <div className="header">
        <span className='rowLine'></span>
        <span className='headerTitle'>일별 박스오피스</span>
        <span className='rowLine'></span>
      </div>
      <div className="main">
        <form>
          <input type="date" name="mvd" ref={pickedDate} onChange={setPickedDate}/>
        </form>
        <div className="viewContent">
          <div className="contentHeader">
            <span className='title-Name'>영화명</span>
            <span className='title-Price'>매출액</span>
            <span className='title-Watcher'>관객수</span>
            <span className='title-ChangeRank'>증감율</span>
          </div>
          <div className="contentBody">
            {view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;