import wanakana from "wanakana";
import nodeHtmlToImage from "node-html-to-image";
import { Kanji } from "./interfaces.js";

class Image {
  async generate(kanji: Kanji) {
    const html = this.getHtml(kanji);
    const filePath = process.cwd() + `/images/${kanji.kanji}.png`;
    await nodeHtmlToImage({ output: filePath, html });
    return filePath;
  }

  getHtml(kanji: Kanji) {
    return `<html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
  
        html {
          background-color: gray;
          font-family: "Noto Sans JP", sans-serif;
        }
  
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1080px;
          height: 1080px;
          color: #d8dee9;
          background-color: #212529;
          letter-spacing: 2.5;
        }
  
        .box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 85%;
          max-height: 85%;
          height: 70%;
          margin-bottom: 50px;
        }
  
        .kanji-char {
          font-size: 280px;
          margin: 15px 0;
        }
  
        .kanji-kana,
        .kanji-meaning,
        .kanji-level {
          text-align: center;
          font-size: 40px;
          margin: 8px;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <div class="kanji-char">
          <span>${kanji.kanji}</span>
        </div>
        <div class="kanji-kana">
          <span>Kana: ${kanji.kana} - ${wanakana.toRomaji(kanji.kana)}</span>
        </div>
        <div class="kanji-meaning">
          <span>Meaning: ${kanji.meaning}</span>
        </div>
        <div class="kanji-level">
          <span>Level: n${kanji.level}</span>
        </div>
      </div>
    </body>
  </html> 
  `;
  }
}
const image = new Image();

export default image;
