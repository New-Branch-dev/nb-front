import Image from "next/image";
import Link from "next/link";

import type { MainSliderItem } from "@views/main/model/consts";

import {
  actionRow,
  contentColumn,
  descriptionText,
  firstVisualWrap,
  iconImage,
  iconImageWrap,
  iconText,
  infoColumn,
  startLink,
  titleText,
  visualImage,
  visualWrap,
} from "./SliederItems.css";

type SliederItemsProps = {
  item: MainSliderItem;
};

export const SliederItems = ({ item }: SliederItemsProps) => {
  const visualWrapClassName = [
    visualWrap,
    item.id === "1" ? firstVisualWrap : "",
  ]
    .join(" ")
    .trim();

  return (
    <div>
      <div className={contentColumn}>
        <div className={infoColumn}>
          <span className={iconText} aria-hidden>
            <span className={iconImageWrap}>
              <Image
                src={item.icon}
                alt={item.iconAlt}
                fill
                sizes="2rem"
                className={iconImage}
              />
            </span>
          </span>
          <h3 className={titleText}>{item.title}</h3>
          <p className={descriptionText}>{item.description}</p>
        </div>

        <div className={actionRow}>
          <Link href={item.href} className={startLink}>
            시작하기 <span aria-hidden>&gt;</span>
          </Link>
        </div>
      </div>

      <div className={visualWrapClassName}>
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="8.5rem"
          className={visualImage}
        />
      </div>
    </div>
  );
};
