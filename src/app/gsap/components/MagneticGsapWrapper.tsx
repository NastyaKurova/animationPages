import React, { useEffect, useRef } from 'react';
import { ReactChildrenType, RefElementType } from '@/types/commonTypes';
import { gsap } from '@/gsap';
const MagneticGsapWrapper = ({ children }: ReactChildrenType) => {
  const magneticRef: RefElementType = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magneticRef.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
    });
    const yTo = gsap.quickTo(magneticRef.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
    });
    const onMouseMove = (e: MouseEvent) => {
      if (magneticRef.current !== null) {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magneticRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x);
        yTo(y);
      }
    };
    const onMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magneticRef.current?.addEventListener('mousemove', onMouseMove);
    magneticRef.current?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      magneticRef.current?.removeEventListener('mousemove', onMouseMove);
      magneticRef.current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return <div ref={magneticRef}>{children}</div>;
};

export default MagneticGsapWrapper;
