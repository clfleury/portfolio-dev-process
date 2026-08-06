import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

imagemin(["public/sources/*.{jpg,png}"], {
  destination: "public/images",
  plugins: [imageminWebp({ quality: 70 })],
}).then(function () {
  console.log("Images converted!");
});
