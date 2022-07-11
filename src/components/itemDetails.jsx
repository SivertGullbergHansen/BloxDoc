import React from "react";
import styles from "../scss/styles.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function ItemDetails({ id = 0, json = "", children }) {
  var itemData = json;

  return (
    <div className={styles.itemDetails}>
      <p>{json.description}</p>
      <div>
        <img
          src={
            itemData.assetId > 0
              ? `https://thumbnails.roblox.com/v1/assets?assetIds=${itemData.assetId}&returnPolicy=PlaceHolder&size=700x700&format=Png&isCircular=false`
              : useBaseUrl("/img/placeholder.png")
          }
          alt=""
        />
        <h1>{json.rarity}</h1>
        <h3>{json.itemType}</h3>
        <table>
          <tr>
            <th>Inventory Size</th>
            <td>{json.itemSize}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{json.weight}g</td>
          </tr>
          {json.equipSlot && (
            <tr>
              <th>Equip Slot</th>
              <td>{json.equipSlot}</td>
            </tr>
          )}
          {json.slots && (
            <tr>
              <th>Volume (slots)</th>
              <td>{json.slots}</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}