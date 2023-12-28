import BottomDecorator from '../Components/BottomDecorator/BottomDecorator';
import './App.css';

function App() {
  return (
    <div>
      <div className='about'>
        <BottomDecorator bottom='0px' left='0px'></BottomDecorator>
      </div>
      <br></br>
      <div className='contact'>
        <BottomDecorator bottom='0px' left='0px'></BottomDecorator>
      </div>
      
    </div>
  );
}

export default App;
