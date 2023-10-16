import React from 'react';
import { ReactChildrenType, RefElementType } from '@/types/commonTypes';
import { gsap } from '@/gsap';

type FloatingGsapWrapper = ReactChildrenType & {
  plane1: RefElementType;
  plane2: RefElementType;
  plane3: RefElementType;
};
const FloatingWrapper = ({
  children,
  plane1,
  plane2,
  plane3,
}: FloatingGsapWrapper) => {
  let requestAnimationFrameId: number = 0;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

//The Linear Interpolation
  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });

    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });

    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;

    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);

      requestAnimationFrameId = 0;
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { movementX, movementY } = e;

    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId === 0) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  return <section onMouseMove={handleMouseMove}>{children}</section>;
};

export default FloatingWrapper;
