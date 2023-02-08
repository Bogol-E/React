import './App.css';
import MyDiv1 from './01/MyDiv1'
import MyDiv2 from './01/MyDiv2'
import MyClock from './01/MyClock'


//리액트 컴퍼넌트 이름은 대문자로 시작
//jsx가 들어간 리턴이 반듯이 있어야 한다. 태그는 하나만 들어가야 함. 노드1개 자식노드 허용
//여러 태그를 쓰고싶으면 부모태그 1개로 묵음. 표시안되게 하기위해 빈태그 사용 <></>
//리턴 안 jsx는 자바스크립트와 리액트 문법을 썩어 쓸수 있게 해줌

const App = () => {
  console.log('Apps.js') ;
  return (
    <div className="App-header">
        <MyDiv1 />
        <MyDiv2 />
        <MyClock />
    </div>
  );
}

// 외부에서 쓸수 있게 해줌
export default App;
