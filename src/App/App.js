import BottomDecorator from '../Components/BottomDecorator/BottomDecorator';
import HeaddingText from '../Components/HeaddingText/HeaddingText';
import TopDecorator from '../Components/TopDecorator/TopDecorator';
import './App.css';

function App() {
  return (
    <div>
      <div className='about'>
        <HeaddingText headding='About' color='#fff'></HeaddingText>
        <BottomDecorator></BottomDecorator>
        <TopDecorator></TopDecorator>
      </div>
      <div className='projects'>
        <HeaddingText headding='Projects' color='#000'></HeaddingText>
      </div>
      <div className='contact'>
        <HeaddingText headding='Contact' color='#fff'></HeaddingText>
        <BottomDecorator></BottomDecorator>
        <TopDecorator></TopDecorator>
      </div>
    </div>
  );
}

export default App;
