import React, { useEffect, useRef, useState } from 'react';
import { ReactChildrenType, RefElementType } from '@/types/commonTypes';

const MagneticGsapWrapper = ({ children }: ReactChildrenType) => {
  const magneticRef: RefElementType = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prevPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (magneticRef.current !== null) {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magneticRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        const deltaX = x - prevPositionRef.current.x;
        const deltaY = y - prevPositionRef.current.y;

        setPosition((prevPosition) => ({
          x: prevPosition.x + deltaX * 0.5, // freeze
          y: prevPosition.y + deltaY * 0.5,
        }));
        prevPositionRef.current = { x, y };
      }
    };
    const onMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      prevPositionRef.current = { x: 0, y: 0 };
    };

    magneticRef.current?.addEventListener('mousemove', onMouseMove);
    magneticRef.current?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      magneticRef.current?.removeEventListener('mousemove', onMouseMove);
      magneticRef.current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={magneticRef}
      className={'icon'}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default MagneticGsapWrapper;
