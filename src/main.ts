import fs from "node:fs";
import express from "express";
import image from "./image.js";

const imagesDirPath = process.cwd() + "/images";

if (!fs.existsSync(imagesDirPath)) {
  fs.mkdirSync(imagesDirPath);
}
const server = express();
const port = process.env.PORT || 8080;

server.use(express.json());

server.get(
  "/generate",
  async (req, res) => {
    const kanji = req.body.kanji || {};
    const imagePath = await image.generate(kanji);

    return res.sendFile(imagePath);
  },
);
server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
