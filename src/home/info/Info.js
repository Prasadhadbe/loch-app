import React from "react";
import "./info.css";
import NotiData from "./Notidata";
import InfoCarousel from "./Infocarousel";
import LiveData from "./Livedata";
import Cohorts from "../../assets/Cohorts.png";
import Testimonials from "./Testimonials";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-grid">
        <div className="info-noti_data">
          <NotiData />
        </div>
        <div className="info-carousel">
          <InfoCarousel />
        </div>
        <div className="info-home">
          <img src={Cohorts} alt="" className="info-img" />
        </div>
        <div className="info-live_data">
          <LiveData />
        </div>
      </div>
      <div className="info-footer">
        <Testimonials />
      </div>
    </div>
  );
};

export default Info;
