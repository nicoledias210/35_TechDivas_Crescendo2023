import React from "react";
import styles from "./Team.module.css";

const members = [
  {
    name: "Nicole",
    image: "dummy",
  },
  {
    name: "Nicole",
    image: "dummy",
  },
  {
    name: "Nicole",
    image: "dummy",
  },
  {
    name: "Nicole",
    image: "dummy",
  },
];

const Team = () => {
  return (
    <div className={styles.container} id="teams">
      <div className={styles.title}>Meet The Team</div>

      <div className={styles.subContainer}>
        {members.map((item) => (
          <div className={styles.member}>
            <img src="https://www.mordeo.org/files/uploads/2021/03/The-Batman-DC-Darkness-2021-Poster-4K-Ultra-HD-Mobile-Wallpaper-scaled.jpg" />
            <div className={styles.name}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
