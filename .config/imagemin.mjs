import imagemin from "imagemin-keep-folder";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import imageminSvgo from "imagemin-svgo";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminGifsicle from "imagemin-gifsicle";

const srcDir = "./src/assets/img/**/*.{jpg,jpeg,png,gif,svg}";
const outDir = "./dist/assets/img/**/*";

const convertWebp = (targetFiles) => {
  imagemin([targetFiles], {
    use: [imageminWebp({ quality: 50 })],
  });
};

imagemin([srcDir], {
  plugins: [
    imageminMozjpeg(),
    imageminPngquant(),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => {
    return output.replace(/assets\//, "../dist/assets/");
  },
}).then(() => {
  convertWebp(outDir);
  console.log("Images are optimized✨");
});
