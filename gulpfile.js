const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const imageMin = require('gulp-imagemin')

function gulp_sass(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle:'compressed'
    }
    ))
    .pipe(gulp.dest('./build/styles'))
}

function jsMin(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function imageCompress() {
    return gulp.src('./source/images/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./build/images'))
}


exports.default = function(){
    gulp.watch('./source/styles/*scss', {ignoreInitial: false}, gulp.series(gulp_sass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(jsMin))
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(imageCompress))
}

//exports.sass = gulp_sass
//exports.javascript = jsMin
//exports.images = imageCompress