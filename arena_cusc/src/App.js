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
        {/* Wrap components in sections with id for scrollpy  */}
        <section id="banner"><Banner /></section>
        <section id="gioithieu"><Slide /></section>
        <section id="ghidanh"><CallToAction /></section>
        <section id="whilearena"><WhyArena /></section>
        <section id="achieverments"><Achieverments /></section>
        <section id="instructors"><Instructors /></section>
        {/* Addmission */}
        <section id="goodstudent"><GoodStudentExamples /></section>
        <section id="daotao"><Curriculum /></section>
        <section id="sanpham"><Products /></section>
        <section id="tintuc"><News /></section>
        <section id="footer"><Footer /></section>
      </div>
    </>
  );
}

export default App;
