import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1>NICOLE</h1>
      <p className={styles.subTitle}>Turning the world's waste into resource</p>

      <div className={styles.copywriteContainer}>
        <p>©2023 All rights reserved</p>
        <p>
          Registered office: 43 Central Street, London, EC1V 8AB, United Kingdom
        </p>
      </div>
    </div>
  );
};

export default Footer;
