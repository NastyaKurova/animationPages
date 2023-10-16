'use client';
import classes from './MainSection.module.scss';
import React, { FC, useRef } from 'react';
import classNames from 'classnames';
import { useColor } from '@/hooks/useColor';
import { Parallax } from '@/app/gsap/components/Parallax';
const PARALLAX_ELEMENT = 'parallax';
export const MainSection: FC = () => {
  const forestRef = useRef(null);
  useColor(forestRef, { color: '#ececa6', duration: 3 });

  return (
    <Parallax parallaxElement={PARALLAX_ELEMENT}>
      <div className={classes.container}>
        <div className={classes.layers}>
          <div
            className={classNames(classes.header, PARALLAX_ELEMENT)}
            data-depth="-4.8"
          >
            <div className={classes.caption}>Welcome to Parallax</div>
            <div className={classes.title} ref={forestRef}>
              Fairly Forest
            </div>
          </div>
          <div
            className={classNames(
              classes.layer,
              classes.layerBase,
              PARALLAX_ELEMENT,
            )}
            data-depth="-0.8"
          ></div>
          <div
            className={classNames(
              classes.layer,
              classes.layerMiddle,
              PARALLAX_ELEMENT,
            )}
            data-depth="-0.4"
          ></div>
          <div
            className={classNames(
              classes.layer,
              classes.layerFront,
              PARALLAX_ELEMENT,
            )}
            data-depth="-0.2"
          ></div>
        </div>
      </div>
    </Parallax>
  );
};
