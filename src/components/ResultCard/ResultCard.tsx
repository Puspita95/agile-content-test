import React from "react";
import styles from "./ResultCard.module.css";
import { ResultCardProp } from "./ResultCard.type";

const ResultCard: React.FC<ResultCardProp> = ({
  animal,
  onResultCardClick,
}) => {
  return (
    <>
      <div
        className={styles.resultCard}
        onClick={() => onResultCardClick(animal)}
      >
        <a href={animal.url} className={styles.url}>
          {animal.url}
        </a>
        <div className={styles.name}>
          <div>{animal.name}</div>
        </div>
        <div className={styles.description}>{animal.description}</div>
      </div>
    </>
  );
};
export default ResultCard;
