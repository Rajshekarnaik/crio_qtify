import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
  return (
    <div className={App}>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          title="Top Albums"
          dataSource="https://qtify-backend.labs.crio.do/albums/top"
          type="album"
        />
        <Section
          title="New Albums"
          dataSource="https://qtify-backend.labs.crio.do/albums/new"
          type="album"
        />
        <Section
          title="Songs"
          dataSource="https://qtify-backend.labs.crio.do/songs"
          type="song"
        />
      </div>
    </div>
  );
}

export default App;