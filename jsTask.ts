import gulp  from 'gulp';
import concat from "gulp-concat";
import terser  from "gulp-terser";
import sourcemaps  from "gulp-sourcemaps";

import { src, dest } from "gulp";
import { data } from 'autoprefixer';

const jsPath = 'src/assets/js/**/*.js';


function jsTask () {


    return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/js'));


  }

export default  jsTask ;
