import React from 'react';
import './achievements.css';
import Brand from '../../assets/images/No1_Brand.png';

function Achievement() {
  return (
    <>
      <section className="w-screen">
        <h3 className="text-xl font-bold text-center text-red-700">những điểm nổi bật của arena multimedia</h3>
        <div className="process-wrapper">
          <div className="point-content">
            <div id="top-content">
              <ul>
                <li className="point brand">
                  <img src={Brand} alt="" />
                </li>
                <li className="point"></li>
                <li className="point"></li>
                <li className="point"></li>
                <li className="point"></li>
              </ul>
            </div>
          </div>
          <div id="progress-bar-container">
            <ul>
              <li className="step1 ">
                {/* <div className="step-inner"></div> */}
                <img src="" alt="" />
              </li>
              <li className="step step2 active">
                <div className="step-inner"></div>
              </li>
              <li className="step step3 ">
                <div className="step-inner"></div>
              </li>
              <li className="step step4 ">
                <div className="step-inner"></div>
              </li>
              <li className="step step5 ">
                <div className="step-inner"></div>
              </li>
            </ul>
            <div id="line"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Achievement;
