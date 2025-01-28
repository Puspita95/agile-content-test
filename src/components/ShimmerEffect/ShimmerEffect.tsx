import React from "react";
import styles from "./ShimmerEffect.module.css";
import { ShimmerEffectProps } from "./ShimmerEffect.type";

const ShimmerEffect: React.FC<ShimmerEffectProps> = ({ count }) => {
  return (
    <>
      <div className={styles.shimmerContainer}>
        {new Array(count).fill(null).map((item, index) => {
          return (
            <div key={index} className={styles.shimmerListItem}>
              <div className={`${styles.shimmerUrl} ${styles.shimmer} `}></div>
              <div className={`${styles.shimmerName} ${styles.shimmer}`}></div>
              <div
                className={`${styles.shimmerDescription} ${styles.shimmer}`}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShimmerEffect;
