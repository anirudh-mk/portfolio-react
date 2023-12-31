import BottomDecorator from '../Components/BottomDecorator/BottomDecorator';
import HeaddingText from '../Components/HeaddingText/HeaddingText';
import TextButton from '../Components/TextButton/TextButton';
import TopDecorator from '../Components/TopDecorator/TopDecorator';
import DetailsText from '../Components/DetailsText/DetailsText';

import { faGithubAlt, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import NavigationButton from '../Components/NavigationButton/NavigationButton';
import IconButton from '../Components/IconButton/IconButton';
import ProfileImage from '../Components/ProfileImage/ProfileImage';
import ProjectScreen from '../Screens/ProjectScreen/ProjectScreen';

function App() {
  return (
    <div>
      <div className='home-headding-container'>
        <HeaddingText headding='Anirudh MK' color='#fff'/>
        <NavigationButton title='Home' width={115} top={33} left={588} background='rgba(255, 255, 255, 0.50)'/>
        <NavigationButton title='About' width={115} top={33} left={730}/>
        <NavigationButton title='Project' width={115} top={33} left={872}/>
        <NavigationButton title='Contact Me' width={149} top={33} left={1014}/>
      </div>
      <div className='home-details-container'>
        <DetailsText/>
        <TextButton button_text='Download CV' text_button_color='#6E6F64' font_color='#fff' top={442} left={114}/>
        <IconButton icon={faGithubAlt} icon_button_color='#6E6F64' icon_color="#fff" top={442} left={310}/>
        <IconButton icon={faEnvelope} icon_button_color='#6E6F64' icon_color="#fff" top={442} left={380}/>
        <IconButton icon={faLinkedinIn} icon_button_color='#6E6F64' icon_color="#fff" top={442} left={451}/>
        <IconButton icon={faTwitter} icon_button_color='#6E6F64' icon_color="#fff" top={442} left={523}/>
        <ProfileImage 
          image={'d'}
          width={344}
          height={403}
          border_radius={172}
          left={765}
          image_background_top={142}
          image_container_top={81}
        />
      </div>
      <div className='about'>
        <HeaddingText headding='About' color='#fff' />
        <ProfileImage 
          image='D:/Anirudh/Coding/React/portfolio/src/assets/anirudh_about.png'
          width={117.977}
          height={138.227}
          border_radius={69}
          left={171}
          image_background_top={140}
          image_container_top={119}
        />
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
        <BottomDecorator/>
        <TopDecorator/>
      </div>
      <ProjectScreen username='anirudh-mk' token='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'/>
      <div className='contact'>
        <HeaddingText headding='Contact' color='#fff'/>
        <TextButton button_text='Download CV' text_button_color='#fff' font_color='#000' top={227} left={421}/>
        <IconButton icon={faGithubAlt} icon_button_color='#fff' icon_color="#000" top={227} left={644}/>
        <IconButton icon={faEnvelope} icon_button_color='#fff' icon_color="#000" top={227} left={724}/>
        <IconButton icon={faLinkedinIn} icon_button_color='#fff' icon_color="#000" top={227} left={805}/>
        <IconButton icon={faTwitter} icon_button_color='#fff' icon_color="#000" top={227} left={886}/>
        <BottomDecorator/>
        <TopDecorator/>
      </div>
    </div>
  );
}

export default App;
