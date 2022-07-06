import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import './Carousel.scss';
import carouselData from '../../carouselData';

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {carouselData.map((data) => <SwiperSlide key={data.id}>
          <img src={data.url} alt="carousel" className="image" />
        </SwiperSlide>)}

      </Swiper>
    </div>
  )
}

export default Carousel