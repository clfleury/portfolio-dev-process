/*const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["sources/*.png"], "images", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Images converted!");
});*/

const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin(["sources/*.{jpg,png}"], {
  destination: __dirname + "/images/",
  plugins: [
    imageminWebp({
      quality: 75,
    }),
  ],
}).then(() => {
  console.log("Images optimized");
});
