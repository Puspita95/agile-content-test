import React from "react";
import styles from "./SearchBox.module.css";
import { SearchBoxProp } from "./SearchBox.type";

const SearchBox: React.FC<SearchBoxProp> = ({
  searchInput,
  handleChangeInput,
  handleSearchBtnClick,
}) => {
  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <svg
            data-testid="googleLogo"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
          <input
            type="search"
            placeholder="Type something to search"
            value={searchInput}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSearchBtnClick(searchInput);
              }
            }}
            onInput={(e) =>
              handleChangeInput((e.target as HTMLInputElement).value)
            }
          />
          {searchInput && (
            <button
              className={styles.clearBtn}
              onClick={() => handleChangeInput("")}
            >
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default SearchBox;
