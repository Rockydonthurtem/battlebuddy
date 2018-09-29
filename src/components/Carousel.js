import React from "react";
import Slider from "react-slick";
import army from "../img/army2.jpg";
import airForce from "../img/af7.jpg";
import coastguard from "../img/cg3.jpg";
import marines from "../img/marines3.jpg";
import navy from "../img/navy1.jpg";
import "./carousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 1,
      speed: 9000,
      autoplay: true,
      autoplaySpeed: 700
      // pauseOnFocus: true,
      // pauseOnHover: true
      // swipeToSlide: true,
      // draggable: true
    };
    return (
      <Slider {...settings}>
        {/* <div> */}
        <img className="slider" src={army} alt="bulletin board" />
        {/* </div> */}
        {/* <div className="slider"> */}
        <img className="slider" src={airForce} alt="carry" />
        {/* </div> */}
        {/* <div className="slider"> */}
        <img className="slider" src={coastguard} alt="combat check" />
        <img className="slider" src={marines} alt="combat check" />
        <img className="slider" src={navy} alt="combat check" />
        {/* </div> */}
      </Slider>
    );
  }
}

export default Carousel;
