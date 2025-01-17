import React from 'react'
import './suche-job.css'
import TitleBlock from '../title-block';

const SucheJob = () => {
  return (
    <div className="suche-job__container">
      <TitleBlock
        title="Suche Job auf 450 Basis"
        description="Nam condimentum lectus vel varius auctor. Maecenas interdum elementum
        ante, ut consectetur tellus laoreet non. Etiam enim leo, efficitur in
        risus et."
      />
      <div className="suche-job__container__content">
        <img
          loading="lazy"
          src="./images/suche-job-left.png"
          alt="suche-job-left"
          className="image__left"
        />
        <div className="suche-job__container__content__percent">
          <h4>+21%</h4>
          <p>Pellentesque eu tortor nec quam.</p>
          <img src="./images/suche-job-quam.png" alt="suche-job-quam" />
        </div>
        <div className="suche-job__container__content__dollar">
          <img
            loading="lazy"
            src="./images/suche-job-moon.png"
            alt="suche-job-moon"
          />
          <h4>$500</h4>
          <p>Aliquam tristique cursus.</p>
        </div>
        <img
          loading="lazy"
          src="./images/suche-job-right.png"
          alt="suche-job-right"
          className="image__right"
        />
      </div>
    </div>
  );
}

export default SucheJob