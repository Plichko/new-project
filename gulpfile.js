'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('app/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(), {
            browsers: [
                'last 2 versions',
                'android 4',
                'opera 12'
            ]
        })
        .pipe(gulp.dest('app'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    browserSync.init({
        server: "app"
    });
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});