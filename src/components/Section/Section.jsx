import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";
import styles from "./Section.module.css";

const Section = ({ title, dataSource, type = "album" }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataSource);
        setData(response.data);
        setFilteredData(response.data);

        if (type === "song") {
          const genresRes = await axios.get(
            "https://qtify-backend.labs.crio.do/genres"
          );
          setFilters([{ key: "all", label: "All" }, ...genresRes.data.data]);
        }
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };

    fetchData();
  }, [dataSource, type]);

  useEffect(() => {
    if (type === "song") {
      const selectedFilter = filters[selectedFilterIndex];
      if (!selectedFilter || selectedFilter.key === "all") {
        setFilteredData(data);
      } else {
        setFilteredData(
          data.filter(
            (song) =>
              song.genre && song.genre.key === selectedFilter.key
          )
        );
      }
    } else {
      setFilteredData(data);
    }
  }, [selectedFilterIndex, data, filters, type]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type !== "song" && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!toggle ? "Show All" : "Collapse"}
          </h4>
        )}
      </div>

      {type === "song" && (
        <div style={{ marginBottom: "20px" }}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}

      {loading ? (
        <div className={styles.loader}>
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className={styles.cardsWrapper}>
          {toggle && type !== "song" ? (
            <div className={styles.grid}>
              {filteredData.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel data={filteredData} type={type} />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;