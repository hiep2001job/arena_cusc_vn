import './App.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Slide from './components/Slide';
import CallToAction from './components/CallToAction';
import Curriculum from './components/Curriculum';
import GoodStudentExamples from './components/GoodStudentExamples';
import Instructors from './components/Instructors';
import News from './components/News';
import Footer from './components/Footer';
import WhyArena from './components/WhyArena';
import AdmissionInfo from './components/AdmissionInfo';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Slide />
      <CallToAction />
      <Instructors />
      <GoodStudentExamples />
      <News />
      <Footer />
    </>
  );
}

export default App;
