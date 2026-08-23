import React from "react";
import styles from "./Search.module.css";

const Search = ({ placeholder }) => {
  return (
    <form className={styles.wrapper}>
      <input
        className={styles.search}
        placeholder={placeholder}
        required
      />
      <button className={styles.searchButton} type="submit">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  );
};

export default Search;