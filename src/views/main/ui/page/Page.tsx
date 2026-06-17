"use client";

import { Slider } from "@widgets/slider";

import { MAIN_SLIDER_ITEMS } from "@views/main/model/consts";

import { SliederItems } from "../slider-items/SliederItems";
import { header, sliderWrapper } from "./Page.css";

export const MainPage = () => {
  return (
    <main>
      <header>
        <h1 className={header}>
          안녕하세요,
          <br />
          뉴브랜치님
        </h1>
      </header>

      <article className={sliderWrapper}>
        <Slider items={MAIN_SLIDER_ITEMS} ItemComponent={SliederItems} />
      </article>
    </main>
  );
};
