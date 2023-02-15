const Async = () => {
    console.log("명령1")
    
    const url="http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214"
    fetch(url);



    return (
        <>
        </>
    );
}

export default Async;