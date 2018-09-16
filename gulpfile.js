// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  assets = require('postcss-assets'),
  autoprefixer = require('autoprefixer'),
  mqpacker = require('css-mqpacker'),
  cssnano = require('cssnano'),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/SASS/',
    build: 'build/static/css/'
  }
;


// stylesheet
gulp.task('stylesheetcss',  function() {
  return gulp.src(folder.src + 'stylesheet.scss')
    .pipe(sass({
      outputStyle: 'nested',
      precision: 3,
      errLogToConsole: true
    }))
    .pipe(gulp.dest(folder.build + 'css/'));
});

// Bootstrap 
gulp.task('bootrap4css',  function() {
  return gulp.src(folder.src + 'bootstrap-4.1.3/scss/bootstrap*.scss')
    .pipe(sass({
      outputStyle: 'nested',
      imagePath: 'images/',
      precision: 3,
      errLogToConsole: true
    }))
    .pipe(gulp.dest(folder.build + 'css/bootstrap-4.1.3/dist/css/'));
});
gulp.task('default',['stylesheetcss', 'bootrap4css']);

