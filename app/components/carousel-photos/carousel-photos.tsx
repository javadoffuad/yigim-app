import React from "react";
import styles from "./carousel-photos.module.css";
import Slider from "react-slick";
import Image from "next/image";
import carousel1 from '@/public/images/carousel-1.png';
import carousel2 from '@/public/images/carousel-2.png';
import carousel3 from '@/public/images/carousel-3.png';
import carousel4 from '@/public/images/carousel-4.png';
import carousel5 from '@/public/images/carousel-5.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselPhotos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: '20px',
        }
      }
    ]
  };

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        <div className={styles["carousel-item"]}>
          <Image src={carousel1} alt="" />
        </div>
        <div className={styles["carousel-item"]}>
          <Image src={carousel2} alt="" />
        </div>
        <div className={styles["carousel-item"]}>
          <Image src={carousel3} alt="" />
        </div>
        <div className={styles["carousel-item"]}>
          <Image src={carousel4} alt="" />
        </div>
        <div className={styles["carousel-item"]}>
          <Image src={carousel5} alt="" />
        </div>
      </Slider>
    </div>
  );
};