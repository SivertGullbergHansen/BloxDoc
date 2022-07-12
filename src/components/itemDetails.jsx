import React from "react";
import styles from "../scss/styles.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function ItemDetails({ id = 0, json = "", children }) {
  var itemData = json;

  return (
    <div className={styles.itemDetails}>
      <div>
        <h2>Description</h2>
        <p>{json.description}</p>
      </div>
      <div className={styles.itemCard}>
        <p className={styles.itemId}>ID: {id}</p>
        <img
          src={
            itemData.assetId > 0
              ? `https://thumbnails.roblox.com/v1/assets?assetIds=${itemData.assetId}&returnPolicy=PlaceHolder&size=700x700&format=Png&isCircular=false`
              : useBaseUrl("/img/placeholder.png")
          }
          alt="item model preview"
        />
        <h3>{json.category}</h3>
        <h4>{json.itemType}</h4>
        <h5>{json.rarity}</h5>
        <table>
          <tbody>
            <tr>
              <th>Inventory Size</th>
              <td>{json.itemSize}</td>
            </tr>
            <tr>
              <th>{json.itemType !== "Drink" ? "Weight" : "Volume"}</th>
              <td>
                {json.itemType !== "Drink" ? json.weight : json.weight / 1000}
                {json.itemType !== "Drink" ? "g" : "L"}
              </td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
