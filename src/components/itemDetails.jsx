import React from "react";
import styles from "../scss/styles.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function ItemDetails({ id = 0, json = "", children }) {
  var itemData = json;

  return (
    <div className={styles.itemDetails}>
      <img
        src={
          itemData.assetId > 0
            ? `https://thumbnails.roblox.com/v1/assets?assetIds=${itemData.assetId}&returnPolicy=PlaceHolder&size=700x700&format=Png&isCircular=false`
            : useBaseUrl("/img/placeholder.png")
        }
        alt=""
      />
    </div>
  );
}
