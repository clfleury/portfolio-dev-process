const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

/*imagemin(["sources/*.jpg"], "images", {
  use: [
    webp({
      quality: 75,
    }),
  ],
}).then(function () {
  console.log("Images converted!");
});*/

imagemin(["public/sources/*.{jpg,png}"], {
  destination: "public/images",
  plugins: [imageminWebp({ quality: 50 })],
}).then(function () {
  console.log("Images converted!");
});

/*const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");*/

/*imagemin(["sources/*.{jpg,png}"], {
  destination: __dirname + "/images/",
  plugins: [
    imageminWebp({
      quality: 75,
    }),
  ],
}).then(() => {
  console.log("Images optimized");
});*/
