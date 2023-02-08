const Gald = ({ m, data }) => {
    let seldata = []

    for (let i = 0; i < data.length; i++) {
        if (data[i].galTitle === m) {
            seldata = data[i];
        }
    }

    let imgurl = seldata.galWebImageUrl;
    let img = <img src={imgurl} className="img" alt="logo" />

    let key = ["galTitle", "galPhotographyLocation", "galPhotographer", "galPhotographyMonth", "galSearchKeyword"];
    let kkey = key.map((k) =>
        <div className={k} key={k} >{seldata[k]}</div>
    );

    return (
        <div className="gald">
            {imgurl && img}
            {kkey}
        </div>
    )
}

export default Gald;