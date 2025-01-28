import React from "react";
import GoogleLogo from "../../assets/Images/googleLogo.png";
import styles from "./Home.module.css";
import SearchBox from "../SearchBox/SearchBox";
import { HomeProp } from "./Home.type";

export const Home: React.FC<HomeProp> = ({
  onSearch,
  searchInput,
  onChange,
}) => {
  return (
    <div className={styles.homeBox}>
      <div className={styles.mainContainer}>
        <img className={styles.gLogo} src={GoogleLogo} alt="google logo" />
        <SearchBox
          searchInput={searchInput}
          handleChangeInput={onChange}
          handleSearchBtnClick={onSearch}
        />
        <button
          className={styles.searchBtn}
          onClick={onSearch}
          disabled={searchInput.trim() === ""}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Home;
