import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  if (type !== "album") return null;

  const { image, follows, title, songs } = data;

  return (
    <Tooltip title={`${songs?.length || 0} songs`} placement="top" arrow>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt={title} loading="lazy" />
          <div className={styles.banner}>
            <Chip
              label={`${follows} Follows`}
              size="small"
              className={styles.chip}
            />
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{title}</p>
        </div>
      </div>
    </Tooltip>
  );
};

export default Card;