import BottomDecorator from '../Components/BottomDecorator/BottomDecorator';
import HeaddingText from '../Components/HeaddingText/HeaddingText';
import TextButton from '../Components/TextButton/TextButton';
import TopDecorator from '../Components/TopDecorator/TopDecorator';
import DetailsText from '../Components/DetailsText/DetailsText';

import  AnirudhImage from '../assets/anirudh.png'
import AnirudhAboutImage from '../assets/anirudh_about.png'

import { faGithubAlt, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import NavigationButton from '../Components/NavigationButton/NavigationButton';
import IconButton from '../Components/IconButton/IconButton';
import ProfileImage from '../Components/ProfileImage/ProfileImage';
import ProjectScreen from '../Screens/ProjectScreen/ProjectScreen';

function App() {
  return (
    <div id='home'>
      <div className='home-headding-container'>
        <HeaddingText href='#home' headding='Anirudh MK' color='#fff'/>
        <NavigationButton href='#home' title='Home' width={115} top={33} left={588} background='rgba(255, 255, 255, 0.50)'/>
        <NavigationButton href='#about' title='About' width={115} top={33} left={730}/>
        <NavigationButton href='#project' title='Project' width={115} top={33} left={872}/>
        <NavigationButton href='#contact' title='Contact Me' width={149} top={33} left={1014}/>
      </div>
      <div className='home-details-container'>
        <DetailsText/>
        <TextButton button_text='Download CV' link='https://drive.google.com/uc?export=download&id=1-4GLCPY6f3s-t-zt0tmb95Kg-2hHJ0B3' text_button_color='#6E6F64' font_color='#fff' top={442} left={114}/>
        <IconButton icon={faGithubAlt} link='https://github.com/anirudh-mk' icon_button_color='#6E6F64' icon_color="#fff" top={442} left={310} />
        <IconButton icon={faEnvelope} link='https://mail.google.com/mail/u/0/?fs=0&to=anirudhmk123@gmail.com&tf=cm' icon_button_color='#6E6F64' icon_color="#fff" top={442} left={380}/>
        <IconButton icon={faLinkedinIn} link='https://www.linkedin.com/in/anirudh-mk' icon_button_color='#6E6F64' icon_color="#fff" top={442} left={451}/>
        <IconButton icon={faTwitter} icon_button_color='#6E6F64' icon_color="#fff" top={442} left={523}/>
        <ProfileImage 
          image={AnirudhImage}
          width={344}
          height={403}
          border_radius={172}
          left={765}
          image_background_top={142}
          image_container_top={83}
        />
      </div>
      <div id='about' className='about'>
        <HeaddingText href='#about' headding='About' color='#fff' />
        <ProfileImage 
          image={AnirudhAboutImage}
          width={117.977}
          height={138.227}
          border_radius={69}
          left={171}
          image_background_top={140}
          image_container_top={120}
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
      <ProjectScreen href='#project' id='project' username='anirudh-mk' token='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'/>
      <div id='contact' className='contact'>
        <HeaddingText href='#contact' headding='Contact' color='#fff'/>
        <TextButton button_text='Download CV' link='https://drive.google.com/uc?export=download&id=1-4GLCPY6f3s-t-zt0tmb95Kg-2hHJ0B3' text_button_color='#fff' font_color='#000' top={227} left={421}/>
        <IconButton icon={faGithubAlt} link='https://github.com/anirudh-mk' icon_button_color='#fff' icon_color="#000" top={227} left={644}/>
        <IconButton icon={faEnvelope} link='https://mail.google.com/mail/u/0/?fs=0&to=anirudhmk123@gmail.com&tf=cm' icon_button_color='#fff' icon_color="#000" top={227} left={724}/>
        <IconButton icon={faLinkedinIn} link='https://www.linkedin.com/in/anirudh-mk' icon_button_color='#fff' icon_color="#000" top={227} left={805}/>
        <IconButton icon={faTwitter} icon_button_color='#fff' icon_color="#000" top={227} left={886}/>
        <BottomDecorator/>
        <TopDecorator/>
      </div>
    </div>
  );
}

export default App;
