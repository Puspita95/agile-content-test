import React from "react";
import styles from "./ResultCardDetail.module.css";
import { ResultCardDetailProp } from "./ResultCardDetail.type";

const ResultCardDetail: React.FC<ResultCardDetailProp> = ({ activeCard }) => {
  return (
    <>
      <div className={`${styles.cardContainer}`}>
        <img
          src={activeCard.image}
          alt={`${activeCard.name} `}
          className={styles.activeCardClass}
        />
        <a href={activeCard.url} className={styles.url}>
          {activeCard.url}{" "}
        </a>
        <div className={styles.animalName}>{activeCard.name} </div>
        <div>{activeCard.description}</div>
      </div>
    </>
  );
};

export default ResultCardDetail;
