"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cardStyle from "./card.module.css";

export function CardNavigateMain({ id }) {
  return (
    <div className={cardStyle.cardHeader}>
      <p>{id}</p>
    </div>
  );
}

export function CardMore({ title, suptitle, imageSrc, link }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div className={cardStyle.cardMore}>
      <div className={cardStyle.cardMore_title}>
        <h2>{title}</h2>
      </div>
      <div className={cardStyle.cardMore_suptitle}>
        <p>{suptitle}</p>
      </div>
      <div className={cardStyle.cardMore_image}>
        <Image
          src={imageSrc}
          width={124}
          height={120}
          alt="Изображение карточки"
        />
      </div>
      <button
        className={cardStyle.cardMore_button_adress}
        onClick={handleClick}
      >
        Узнать больше <img src="/assets/svg/arrow.svg" alt="стрелка" />
      </button>
    </div>
  );
}
