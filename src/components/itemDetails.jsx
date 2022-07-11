import React from "react";
import styles from "../scss/styles.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function ItemDetails({
  id,
  assetId = 0,
  itemSize = 0,
  weight = 0,
  category,
  subCategory,
  rarity,
  name,
  equipSlot = null,
  children,
}) {
  const itemData = require("../data/twd/database.json")[id];
  return (
    <div className={styles.itemDetails}>
      <img
        src={
          assetId > 0
            ? `https://thumbnails.roblox.com/v1/assets?assetIds=${itemData.assetId}&returnPolicy=PlaceHolder&size=700x700&format=Png&isCircular=false`
            : useBaseUrl("/img/placeholder.png")
        }
        alt=""
      />
    </div>
  );
}
