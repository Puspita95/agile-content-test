import styles from "./Header.module.css";
import gitHubImage from "../../assets/Images/gitHubImage.png";
import SearchBox from "../SearchBox/SearchBox";
import GoogleLogo from "../../assets/Images/googleLogo.png";
import { useLocation } from "react-router-dom";
import { HeaderProp } from "./Header.type";

const Header: React.FC<HeaderProp> = ({ searchInput, onChange, onSearch }) => {
  const location = useLocation();
  return (
    <div className={styles.headerContainer}>
      {location.pathname !== "/" ? (
        <div className={`${styles.stateContainer}`}>
          <img src={GoogleLogo} alt="google logo" className={styles.logoWH} />
          <SearchBox
            searchInput={searchInput}
            handleChangeInput={onChange}
            handleSearchBtnClick={onSearch}
          />
        </div>
      ) : (
        <>
          <div>
            <strong>Agile Content</strong> Frontend test
          </div>
        </>
      )}
      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <svg className="gb_E" focusable="false" viewBox="0 0 24 24">
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            <img
              src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
              alt=""
              height="24"
              width="24"
              className={styles.pIcon}
            />
          </svg>
        </div>
        <a href="/">
          <img src={gitHubImage} alt="profile icon" className={styles.gitImg} />
        </a>
      </div>
    </div>
  );
};

export default Header;
