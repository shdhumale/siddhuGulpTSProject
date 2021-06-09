import gulp  from 'gulp';
import concat from "gulp-concat";
import sourcemaps  from "gulp-sourcemaps";
import postcss from "gulp-postcss";
import cssnano from "cssnano";
import  autoprefixer  from "autoprefixer";
import { src, dest } from "gulp";



const cssPath = 'src/assets/css/**/*.css';

function  cssTask () {

    return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer(), cssnano()])) //not all plugins work with postcss only the ones mentioned in their documentation
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/css'));

  }
    
//exports.cssTask = cssTask;
export default  cssTask;
