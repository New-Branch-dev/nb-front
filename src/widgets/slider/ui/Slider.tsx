"use client";

import type { ReactNode } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  sliderItem,
  sliderSlide,
  sliderViewport,
  sliderWrapper,
} from "./Slider.css";

import "swiper/css";
import "swiper/css/navigation";

type SliderProps = {
  items: Array<{
    id: string;
    card: ReactNode;
  }>;
};

export function Slider({ items }: SliderProps) {
  return (
    <section className={sliderWrapper} aria-label="Content slider">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3.2}
        spaceBetween={12}
        breakpoints={{
          0: { slidesPerView: 1.15 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        className={sliderViewport}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className={sliderSlide}>
            <article className={sliderItem}>{item.card}</article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
