import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const GallerySection = () => {
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
    <button
      className={`swiper-button-prev transition hover:bg-slate-200 p-2 rounded-full ${
        activeSlide === 1 && "text-slate-400 hover:bg-slate-100 "
      }`}
    >
      <FaArrowLeft />
    </button>
  );
  const CustomNextArrow = () => (
    <button
      className={`swiper-button-next transition hover:bg-slate-200 p-2 rounded-full ${
        activeSlide === imgs.length && "text-slate-400 hover:bg-slate-100 "
      }`}
    >
      <FaArrowRight />
    </button>
  );

  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <section className="p-5 md:p-10 lg:p-20 overflow-hidden" id="gallery">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
          Explore Our Gallery
        </h1>
        <div className="custom-navigation flex items-center gap-4 mt-4 md:mt-0">
          <button onClick={handlePrev} className="swiper-button-prev">
            <CustomPrevArrow />
          </button>
          <span className="text-base md:text-lg lg:text-xl">
            {activeSlide}/{imgs.length}
          </span>
          <button onClick={handleNext} className="swiper-button-next">
            <CustomNextArrow />
          </button>
        </div>
      </div>
      <div className="swiper-container-wrapper">
        <Swiper
          className="h-[300px] md:h-[400px] lg:h-[500px]"
          modules={[Navigation, A11y]}
          spaceBetween={20}
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
                className="h-full w-full rounded-xl object-cover"
                src={slide.img}
                alt={`Slide ${slide.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export { GallerySection };
