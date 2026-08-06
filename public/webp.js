const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin(["public/sources/*.{jpg,png}"], {
  destination: "public/images",
  plugins: [imageminWebp({ quality: 70 })],
}).then(function () {
  console.log("Images converted!");
});
