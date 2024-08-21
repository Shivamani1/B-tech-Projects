import './App.css';
import LeftSide from './Component/leftSide';
import MiddleSide from './Component/middleSide';
import RightSide from './Component/rightSide';

function App() {
  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSide/>
      </div>
      <div className="middleside">
        <MiddleSide/>
      </div>
      <div className="rightside">
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
