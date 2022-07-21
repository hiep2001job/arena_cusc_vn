import React from 'react';
import './achievements.css';

function achievement() {
  return (
    <>
      <div className="ola">
        <h3 className="title">những điểm nổi bật của arena multimedia</h3>
        <div className="process-wrapper">
          <div id="progress-bar-container">
            <ul>
              <li className="step1 ">
                {/* <div className="step-inner"></div> */}
                <img src="./public/image/No1_Brand.png" alt="" />
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
            <div id="line">
              <div className="line-process"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default achievement;
