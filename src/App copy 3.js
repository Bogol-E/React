import './App.css'; 
// import Box from './02/Box' ; 
// import Mydiv from './03/Mydiv' ;
// import Frcst from './04/Frcst';
// import Taccident from './05/Taccident' ;
// import Gal from "./06/Gal" ;
// import GalSelect from "./06/GalSelect" ;

//import Mycom from "./07/Mycom" ; 
//import Myform from "./08/MyForm" ;

// import RouteMain from "./09/RouteMain" ;
import Wmain from './10/Wmain';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    // <Box /> 
    // <Mydiv />  
    // <Frcst />

    // <Taccident />
    // <Gal />
    // <GalSelect />
    //</Mcom />
   //<Myform />
    <BrowserRouter>
      {/* <RouteMain /> */}
      <Wmain />
    </BrowserRouter>
  );
}

export default App;
