import React from 'react'
import './donec-ac-neque.css'
import TitleBlock from '../title-block';
import CardFeature from '../card-feature';

const DonecAcNeque = () => {
  return (
    <div className="donec-ac-neque__container" id='about'>
      <TitleBlock
        title="Donec ac neque porta fringilla."
        description="Nam condimentum lectus vel varius auctor. Maecenas interdum elementum ante, ut consectetur tellus laoreet non. Etiam enim leo, efficitur in risus et."
      />

      <div className="donec-ac-neque__container__block__wrapper">
        <div className="donec-ac-neque__container__block">
            <CardFeature
              title="Nulla dapibus"
              description="Etiam tempus euismod conse. Phasellus erat risus, porta a facilisis sed, accumsan a dui."
              imageUrl="./images/nulla-dapibus.png"
              isLearMore={true}
            />
            <CardFeature
              title="Sed eget ante leo."
              description="lectus vel varius auctor. Maecenas interdum elementum ante."
              imageUrl="./images/sed-eget-ante-leo.png"
              isLearMore={true}
            />
          <div className="donec-ac-neque__container__block__img">
            <img
              loading="lazy"
              src="./images/donec-ac-moon.jfif"
              alt="donec-ac-moon"
            />
          </div>
        </div>
        <div className="donec-ac-neque__container__block">
          <div className="donec-ac-neque__container__block__img">
            <img
              loading="lazy"
              src="./images/donec-ac-astronaut.jfif"
              alt="donec-ac-astronaut"
            />
          </div>
            <CardFeature
              title="Nulla dapibus"
              description="Etiam tempus euismod conse. Phasellus erat risus, porta a facilisis sed, accumsan a dui."
              imageUrl="./images/gain-consumer.png"
              isLearMore={true}
            />
            <CardFeature
              title="Sed eget ante leo."
              description="lectus vel varius auctor. Maecenas interdum elementum ante."
              imageUrl="./images/elementum-ante.png"
              isLearMore={true}
            />
        </div>
      </div>
    </div>
  );
}

export default DonecAcNeque