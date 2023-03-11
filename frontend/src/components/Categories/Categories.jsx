import React from "react";
import styles from "./Categories.module.css";

const categories = [
  {
    name: "Metal",
    image:
      "https://www.scrapware.com/wp-content/uploads/2020/09/We-All-Benefit-from-Metal-Recycling-1-1024x768.jpg",
  },
  {
    name: "Plastic",
    image:
      "https://www.thestatesman.com/wp-content/uploads/2019/03/plastic.jpg",
  },
  {
    name: "Paper",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/552B/production/_105130812_img_1867.jpg",
  },
  {
    name: "Cardboard",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2017_24/2041966/giant_pile.jpg",
  },
  {
    name: "Glass",
    image: "https://cdn.hswstatic.com/gif/glass-recycling.jpg",
  },
  {
    name: "Trash",
    image:
      "https://c4.wallpaperflare.com/wallpaper/96/479/785/pollution-trash-bags-waste-wallpaper-preview.jpg",
  },
];

const Categories = () => {
  return (
    <div className={styles.container} id="categories">
      <div className={styles.mainText}>
        As accurate as a human eye. Sorts limitless classes of waste
      </div>
      <div className={styles.subText}>
        Click below to discover real-life client and use case studies, by
        material
      </div>

      <div className={styles.categoriesContainer}>
        {categories.map((item) => (
          <div className={styles.categoryContainer}>
            <div
              className={styles.category}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className={styles.categoryName}>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
