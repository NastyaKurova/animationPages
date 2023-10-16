'use client';
import React, { useRef } from 'react';
import classes from './FloatingGallery.module.scss';
import Image from 'next/image';
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from '@/app/gsap/FloatingGallery/ImgMap';
import { RefElementType } from '@/types/commonTypes';
import FloatingWrapper from '@/app/gsap/components/FloatingGsapWrapper';

const FloatingGallery = () => {
  const plane1: RefElementType = useRef(null);
  const plane2: RefElementType = useRef(null);
  const plane3 = useRef(null);

  return (
    <FloatingWrapper plane1={plane1} plane2={plane2} plane3={plane3}>
      <div className={classes.container}>
        <div ref={plane1} className={classes.plane}>
          <Image src={img1} alt="image" width={300} />
          <Image src={img2} alt="image" width={300} />
          <Image src={img7} alt="image" width={225} />
        </div>
        <div ref={plane2} className={classes.plane}>
          <Image src={img4} alt="image" width={250} />
          <Image src={img6} alt="image" width={200} />
          <Image src={img8} alt="image" width={225} />
        </div>
        <div ref={plane3} className={classes.plane}>
          <Image src={img3} alt="image" width={150} />
          <Image src={img5} alt="image" width={200} />
        </div>
        <div className={classes.title}>
          <h1>Floating Images Gallery</h1>
        </div>
      </div>
    </FloatingWrapper>
  );
};

export default FloatingGallery;
