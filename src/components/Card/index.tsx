import React, { FunctionComponent } from "react";
import styles from "./styles.css";
import { Link } from "react-router-dom";
import HeartIcon from "./heart.svg";
import classNames from "classnames";

export interface Props {
  title: string;
  url: string;
  id: string;
  isLiked: boolean;
  handleLoveClick(): void;
  fullSize?: boolean;
}

export const Card: FunctionComponent<Props> = ({
  title,
  url,
  id,
  isLiked,
  handleLoveClick,
  fullSize = false
}) => (
  <div
    className={classNames(styles.card, {
      [styles.fullSize]: fullSize
    })}
  >
    <div className={styles.imageContainer}>
      <span className={styles.title}>{title}</span>

      <div
        onClick={handleLoveClick}
        className={classNames(styles.icon, {
          [styles.liked]: isLiked
        })}
      >
        <HeartIcon />
      </div>

      {id ? (
        <Link to={`./image/${id}`} className={styles.link}>
          <img src={url} className={styles.img} />
        </Link>
      ) : (
        <img src={url} className={styles.img} />
      )}
    </div>
  </div>
);
