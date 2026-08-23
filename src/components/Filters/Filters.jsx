import React from "react";
import { Tabs, Tab } from "@mui/material";
import styles from "./Filters.module.css";

const Filters = ({ filters, selectedFilterIndex, setSelectedFilterIndex }) => {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="song genre filters"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#34c759",
            height: "4px",
            borderRadius: "2px",
          },
        }}
      >
        {filters.map((item, idx) => (
          <Tab
            key={item.key}
            label={item.label}
            className={styles.tab}
            style={{
              color: selectedFilterIndex === idx ? "#ffffff" : "#ffffff",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
            }}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default Filters;