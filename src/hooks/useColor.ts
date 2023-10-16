import { useEffect } from 'react';
import { gsap } from '@/gsap';
import { RefElementType } from '@/types/commonTypes';

type useColorParamsType = {
  color: string;
  duration?: number;
};

export function useColor(element: RefElementType, params: useColorParamsType) {
  useEffect(() => {
    const recolorAnimation = gsap.to(element.current, { ...params });

    return () => {
      recolorAnimation.kill();
    };
  }, []);
}
