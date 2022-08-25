import './App.css';

import Stroke from './components/shared/Stroke-double';

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
import Achieverments from './components/Achievement2/';
import Products from './components/Products/';

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto min-w-[375px]">
        <Header />
        <Banner />
        <Slide />
        <CallToAction />
        <WhyArena />
        <Achieverments />
        <Instructors />
        {/* Addmission */}
        <GoodStudentExamples />
        <Curriculum />
        <Products />
        <News />
        <Footer />
      </div>
    </>
  );
}

export default App;
