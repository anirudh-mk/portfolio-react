import BottomDecorator from '../Components/BottomDecorator/BottomDecorator';
import HeaddingText from '../Components/HeaddingText/HeaddingText';
import TextButton from '../Components/TextButton/TextButton';
import TopDecorator from '../Components/TopDecorator/TopDecorator';
import './App.css';

function App() {
  return (
    <div>
      <div className='about'>
        <HeaddingText headding='About' color='#fff'></HeaddingText>
        <div className='about-text'>
          <p>
            Hey, I'm Anirudh MK, a backend web developer at G-tech Mulearn, 
            immersed in Django and Python. Pursuing a degree in Electronics and Communication Engineering, 
            I'm passionate about app and web development, as well as robotics. Let's connect
            <br/>
            <br/>
            <i>-I'm eager to collaborate and discuss tech innovations.</i> 
          </p>
        </div>
        <BottomDecorator></BottomDecorator>
        <TopDecorator></TopDecorator>
      </div>
      <div className='projects'>
        <HeaddingText headding='Projects' color='#000'></HeaddingText>
        <TextButton button_text='Download CV' button_color='#6E6F64' font_color='#fff'></TextButton>
      </div>
      <div className='contact'>
        <HeaddingText headding='Contact' color='#fff'></HeaddingText>
        <TextButton button_text='Download CV' button_color='#fff' font_color='#000'></TextButton>
        <BottomDecorator></BottomDecorator>
        <TopDecorator></TopDecorator>
      </div>
    </div>
  );
}

export default App;
