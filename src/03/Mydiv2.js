import Mydiv21 from "./Mydiv21";
const Mydiv2 = (probs) => {
    
   
    return (
        <div className="mydiv2">
            <h2 className="divh2">Mydiv2 {probs.n}</h2>
            <h2 className="divh2">Mydiv2 {probs.user}</h2>
            <Mydiv21 kkk ={probs} />
        </div>
    ) ;
}

export default Mydiv2 ;