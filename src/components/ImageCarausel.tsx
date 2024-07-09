import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ImageCarouselProps } from "../Types/Types";

const ImageCarousel: React.FC<ImageCarouselProps> = ({ sprites }) => {
  const relevantKeys: Array<keyof ImageCarouselProps["sprites"]> = [
    "front_default",
    "front_shiny",
    "front_female",
    "front_shiny_female",
    "back_default",
    "back_shiny",
    "back_female",
    "back_shiny_female",
  ];

  const otherImageUrl = sprites.other?.dream_world.front_default;

  return (
    <div className="relative">
      {otherImageUrl && (
        <div className="flex justify-center mb-4">
          <img
            src={otherImageUrl}
            alt="dream_world front_default"
            className="w-40 lg:w-64 md:w-64 rounded-lg border-gray-200 transition-shadow duration-300 ease-in-out "
          />
        </div>
      )}

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={false}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {relevantKeys.map((key) => {
          const imageUrl = sprites[key];
          return typeof imageUrl === "string" ? (
            <SwiperSlide key={key} className="relative">
              <div className="flex justify-center">
                <img
                  src={imageUrl}
                  alt={key}
                  className="w-auto h-auto rounded-lg border-gray-200 mt-4 mb-12 transition-shadow duration-300 ease-in-out"
                />
              </div>
            </SwiperSlide>
          ) : null;
        })}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
