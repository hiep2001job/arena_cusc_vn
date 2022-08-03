import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Slide from './components/Slide';
import CallToAction from './components/CallToAction';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Curriculum from './components/Curriculum';
import GoodStudentExamples from './components/GoodStudentExamples';
import Instructors from './components/Instructors';
import News from './components/News';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Slide />
      <CallToAction/>
      <Instructors/>
      <GoodStudentExamples /> 
      <News/>
 
    </>
  );
}

export default App;
