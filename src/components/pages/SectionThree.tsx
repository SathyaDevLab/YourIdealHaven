import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/navigation";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../../assets";
import { useState } from "react";

const SectionThree = () => {
  const [swiper, setSwiper] = useState<any>(null);

  const [activeSlide, setActiveSlide] = useState(1);

  const imgs = [
    { id: 1, img: Image1 },
    { id: 2, img: Image2 },
    { id: 3, img: Image3 },
    { id: 4, img: Image4 },
    { id: 5, img: Image5 },
    { id: 6, img: Image6 },
    { id: 7, img: Image7 },
  ];

  const CustomPrevArrow = () => (
    <button className="swiper-button-prev">Prev</button>
  );
  const CustomNextArrow = () => (
    <button className="swiper-button-next">Next</button>
  );

  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <section className="p-20">
      <div className="flex items-center justify-around mb-10">
        <h1 className="text-4xl font-bold">YouRIdealHavel gallery</h1>
        <div className="custom-navigation flex items-center gap-5">
          <div onClick={handlePrev}>
            <CustomPrevArrow />
          </div>
          <span>
            {activeSlide}/{imgs.length}
          </span>
          <div onClick={handleNext}>
            <CustomNextArrow />
          </div>
        </div>
      </div>
      <div>
        <Swiper
          className="h-[500px] px-20 ml-40"
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex + 1);
          }}
        >
          {imgs.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                className="h-full w-[90%] rounded-xl object-cover"
                src={slide.img}
                alt="slide image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export { SectionThree };
