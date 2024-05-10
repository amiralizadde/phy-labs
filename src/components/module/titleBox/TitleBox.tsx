import React from "react";
import styles from './titlebox.module.css'
type TitleBoxProps = {
  title: string;
};

const TitleBox = ({ title }: TitleBoxProps) => {
  return (
    <div>
      <p className={styles.text}>{title}</p>
    </div>
  );
};

export default TitleBox;
