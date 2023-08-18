import React from 'react'
import "../Styles/Carousel.css"
const Carousel = () => {
  return (
<>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  
    <div className="carousel-item active">
    <img
        src="/images/img1.jpg"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />

    </div>
    <div className="carousel-item">
    <img
        src="/images/img7.jpg"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />

    </div>
    <div className="carousel-item">
    <img
        src="/images/img2.jpg"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon btn12" aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next btn12" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>



</div>
</>
  )
}

export default Carousel