const Galm = ({ dataN, setm }) => {

    const nonClick = document.querySelectorAll(".non-click");

    function handleClick(event) {
        nonClick.forEach((e) => {
            e.classList.remove("click");
        });
        event.target.classList.add("click");
    }

    nonClick.forEach((e) => {
        e.addEventListener("click", handleClick);
    });

    const show = (v) => {
        setm(v);
    }

    dataN = dataN.map((i) =>
        <div className="non-click" 
        name={i} key={i} onClick={() => show(i)}>{i}</div>
    );

    return (
        <div className="galM">
            {dataN}
        </div>
    )
}

export default Galm;