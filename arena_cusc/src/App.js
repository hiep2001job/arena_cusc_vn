import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slide from './components/Slide';
import CallToAction from './components/CallToAction';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Curriculum from './components/Curriculum';
import GoodStudentExamples from './components/GoodStudentExamples';

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto min-w-[375px]">
        {/* <Header /> */}
        <Slide />
        <CallToAction />
        <GoodStudentExamples />

        <Curriculum />
        <h1 className="bg-red-600">ok</h1>
      </div>
    </>
  );
}

export default App;
