import imagemin from "gulp-imagemin";
import { series, parallel, watch  } from "gulp";
import { src, dest } from 'gulp';
import gulp  from 'gulp';

import  cssTask  from "./cssTask.ts";
import  jsTask  from "./jsTask.ts";

const jsPath = 'src/assets/js/**/*.js';
const cssPath = 'src/assets/css/**/*.css';

function copyHtml() {
  return src('src/*.html').pipe(gulp.dest('dist'));
}

function imgTask() {
  return src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}

function watchTask() {
  watch([cssPath, jsPath], { interval: 1000 }, parallel(cssTask, jsTask));
}

exports.imgTask = imgTask;
exports.copyHtml = copyHtml;
exports.default = series(
  parallel(copyHtml, imgTask, cssTask, jsTask),
  watchTask
);
