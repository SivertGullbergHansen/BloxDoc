console.log("Generating Items from Database...");

const fs = require("fs");
const path = require("path");

let rawdata = fs.readFileSync("./src/data/twd/database.json");
let categoryLink = "./src/data/_category_.json";
let jsonData = JSON.parse(rawdata);

for (let i = 0; i < jsonData.length; i++) {
  let item = jsonData[i];
  const category = item.category;
  const subCategory = item.itemType;
  const name = item.name;
  const itemId = i + 1;

  const firstPath = path.join(
    __dirname,
    "docs/games/the walking dead/game data/items",
    category
  );
  const secondPath = path.join(
    __dirname,
    "docs/games/the walking dead/game data/items",
    category,
    subCategory
  );

  const dirPath = path.join(
    __dirname,
    "docs/Games/The Walking Dead/Game Data/Items",
    category,
    subCategory,
    itemId.toString() + ".mdx"
  );

  const content = `---
slug: /games/twd/items/${itemId}
---

import ItemDetails from "@site/src/components/itemDetails";

# ${name}

<ItemDetails id={${itemId}} json={${JSON.stringify(item)}}></ItemDetails>`;

  try {
    if (!fs.existsSync(firstPath)) {
      fs.mkdirSync(firstPath);
      fs.copyFileSync(categoryLink, path.join(firstPath, "_category_.json"));
    }
    if (!fs.existsSync(secondPath)) {
      fs.mkdirSync(secondPath);
      fs.copyFileSync(categoryLink, path.join(secondPath, "_category_.json"));
    }

    fs.writeFileSync(dirPath, content);

    // file written successfully
  } catch (err) {
    console.error(err);
  }
}

console.log("Success!");
