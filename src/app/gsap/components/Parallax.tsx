import React, { FC, useEffect } from 'react';
import { gsap } from '@/gsap';
import { ReactChildrenType } from '@/types/commonTypes';

type ParallaxType = ReactChildrenType & {
  parallaxElement: string;
};

export const Parallax: FC<ParallaxType> = ({ children, parallaxElement }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#main',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    (gsap.utils.toArray(`.${parallaxElement}`) as HTMLElement[]).forEach(
      (layer: HTMLElement) => {
        const depth: string | number = layer.dataset.depth || 1;
        const movement = -(layer.offsetHeight * Number(depth));
        tl.to(layer, { y: movement, ease: 'none' }, 0);
      },
    );
    return () => {
      tl.kill();
    };
  }, []);

  return <section id="main">{children}</section>;
};
