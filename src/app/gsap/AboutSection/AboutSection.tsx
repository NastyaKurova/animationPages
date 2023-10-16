'use client';
import classes from './AboutSection.module.scss';
import { Parallax } from '@/app/gsap/components/Parallax';
import classNames from 'classnames';
const PARALLAX_ELEMENT = 'parallax-about';
export default function AboutSection() {
  return (
    <Parallax parallaxElement={PARALLAX_ELEMENT}>
      <div className={classes.container}>
        <div className={classes.layer}>
          <div
            className={classNames(classes.content, PARALLAX_ELEMENT)}
            data-depth="0.45"
          >
            <h2 className={classes.header}>About Page</h2>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
