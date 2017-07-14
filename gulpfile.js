const gulp = require('gulp');
const iceBuilder = require('gulp-ice-builder');
const replace = require('gulp-replace');
const rename = require('gulp-rename')


gulp.task('build-ice',()=>{
  slice2js('./data','./ice-js')
})


function slice2js(inputDir, outputDir) {
  /**
   * 转换ice文件
   */
  gulp
    .src(`${inputDir}/**/*.ice`)
    .pipe(iceBuilder.compile({dest: outputDir}))
    .pipe(replace(/\(function\(module, require, exports\)\s*\{/, ''))
    .pipe(replace(/\}\s*\(typeof\(global\)(.|\s)*/, ''))
    .pipe(rename((path)=>{
      path.extname = '.ts';
    }))
    .pipe(gulp.dest(outputDir));
}