import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="35" // Adjust width as necessary
      height="35" // Adjust height as necessary
      viewBox="0 0 300 300" // Adjust viewBox to fit the entire path properly
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path transform="scale(2.9126214)" fill="#ffffff" d="M 63,67 V 36 h 2.93 C 74.338,35.793 80.04,40.626 80,51.5 80.04,62.658 74.623,67.207 66.072,67 Z M 43,23 63,80 h 4 C 86.453,80 97,68.344 97,51.5 97,34.372 86.595,23 67,23 Z m -14.887,34.495 5.36,-17.95 5.388,17.95 H 28.114 Z M 26,23 6,80 H 21.453 L 24.288,70.326 42.703,70.282 45.585,80 H 61 L 41,23 Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});