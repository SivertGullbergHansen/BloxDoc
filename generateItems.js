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
  const assetId = item.assetId;
  const name = item.name;
  const description = item.description;

  const firstPath = path.join(
    __dirname,
    "docs/games/the walking dead/game data/items",
    category
  );
  const secondPath = path.join(
    __dirname,
    "docs/games/the walking dead/game data/items",
    subCategory
  );

  const dirPath = path.join(
    __dirname,
    "docs/Games/The Walking Dead/Game Data/Items",
    category,
    subCategory,
    i.toString(),
    ".mdx"
  );

  const content = `---
  \nslug: /games/twd/items/${i}
  \n---
  \n
  \nimport ItemDetails from "@site/src/components/itemDetails";
  \n
  \n# ${name}
  \n
  \n<ItemDetails id={${i}} assetId={${assetId}}>${description}</ItemDetails>
  `;

  try {
    console.log(dirPath);
    console.log("writing for item:", item.name, "...");

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
