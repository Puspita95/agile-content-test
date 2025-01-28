import React, { useEffect, useState } from "react";
import styles from "./Result.module.css";
import ResultCard from "../ResultCard/ResultCard";
import ResultCardDetail from "../ResultCardDetail/ResultCardDetail";
import { Animal } from "../../App.type";
import { ResultProp } from "./Result.type";
import ShimmerEffect from "../ShimmerEffect/ShimmerEffect";

const Results: React.FC<ResultProp> = ({
  searchInput,
  filteredAnimalList,
  isLoading,
}) => {
  const [activeCard, setActiveCard] = useState<Animal | null>();

  useEffect(() => {
    if (searchInput === "") {
      setActiveCard(null);
    }
  }, [searchInput]);

  const handleResultCardClick = (animal: Animal) => {
    setActiveCard(animal);
    if (window.innerWidth > 768) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  if (isLoading) {
    return <ShimmerEffect count={7} />;
  }

  return (
    <>
      <div
        className={`${styles.container} ${
          activeCard ? styles.showDetails : ""
        }`}
      >
        <div className={styles.resultContainer}>
          {filteredAnimalList.length > 0 ? (
            filteredAnimalList.map((animal) => (
              <div key={animal.id} title="Results list">
                <ResultCard
                  animal={animal}
                  onResultCardClick={handleResultCardClick}
                />
              </div>
            ))
          ) : (
            <div style={{ width: "100%" }}>
              {searchInput && (
                <p>
                  {" "}
                  No results found for "<strong>{searchInput}</strong>".
                </p>
              )}

              <p>
                Try looking for{" "}
                <strong>
                  insect, fish, horse, crocodile, bear, cetacian, cow, lion,
                  rabbit, cat, snake, dog, bird
                </strong>
                .
              </p>
            </div>
          )}
        </div>
        {activeCard && (
          <div className={` ${styles.details}`}>
            <ResultCardDetail activeCard={activeCard} />
          </div>
        )}
        {activeCard && (
          <div
            className={`${styles.overlay} ${styles.show}`}
            onClick={(e) => {
              setActiveCard(null);
            }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Results;
