import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Slide from './components/Slide';
import CallToAction from './components/CallToAction';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Curriculum from './components/Curriculum';
import GoodStudentExamples from './components/GoodStudentExamples';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Slide />
      <CallToAction />
      <GoodStudentExamples />  
  
    </>
  );
}

export default App;
