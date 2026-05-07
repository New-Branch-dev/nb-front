"use client";

import type { ComponentType } from "react";
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

type SliderItemBase = {
  id: string;
};

type SliderProps<T extends SliderItemBase> = {
  items: T[];
  ItemComponent: ComponentType<{ item: T }>;
};

export const Slider = <T extends SliderItemBase>({
  items,
  ItemComponent,
}: SliderProps<T>) => {
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
            <article className={sliderItem}>
              <ItemComponent item={item} />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
