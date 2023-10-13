'use client';
import classes from './MainSection.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { useScrollTop } from '@/hooks/useScrollTop';

export const MainSection: FC = () => {
  useScrollTop();
  return (
    <section className={classes.container}>
      <div className={classes.layers}>
        <div className={classes.header}>
          <div className={classes.caption}>Welcome to Parallax</div>
          <div className={classes.title}>Fairly Forest</div>
        </div>
        <div className={classNames(classes.layer, classes.layerBase)}></div>
        <div className={classNames(classes.layer, classes.layerMiddle)}></div>
        <div className={classNames(classes.layer, classes.layerFront)}></div>
      </div>
    </section>
  );
};
