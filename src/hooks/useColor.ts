import { RefObject, useEffect } from 'react';
import { gsap } from '@/gsap';

type useColorParamsType = {
  color: string;
  duration?: number;
};
type useColorElementType = RefObject<HTMLInputElement>;

export function useColor(
  element: useColorElementType,
  params: useColorParamsType,
) {
  useEffect(() => {
    const recolorAnimation = gsap.to(element.current, { ...params });

    return () => {
      recolorAnimation.kill();
    };
  }, []);
}
