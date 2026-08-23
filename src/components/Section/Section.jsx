import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({ title, dataSource }) => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(dataSource);
      setData(response.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataSource]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={() => setToggle((prev) => !prev)}>
          {toggle ? "Collapse" : "Show All"}
        </h4>
      </div>
      {loading ? (
        <div className={styles.loader}>
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className={styles.cardsWrapper}>
          {toggle && (
            <div className={styles.grid}>
              {data.map((item) => (
                <Card key={item.id} data={item} type="album" />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;