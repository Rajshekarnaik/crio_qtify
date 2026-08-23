import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={require("../../assets/logo.png")} alt="QTify Logo" width={67} />
      </div>
      <Search placeholder="Search a album of your choice" />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;