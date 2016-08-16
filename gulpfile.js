"use strict";

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    merge = require('gulp-merge'),
    sass = require('gulp-sass'),
    inject = require('gulp-inject'),
    browserSync = require('browser-sync').create(),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware')

function compileCss() {
    return merge(
        merge(
            gulp.src('node_modules/reveal.js/css/reveal.css'),
            gulp.src(['src/css/site.scss', 'src/css/reveal-theme.scss'])
                .pipe(sass()),
            gulp.src(['src/css/vs.css', 'src/css/normalize.css', 'src/css/site.css', 'src/css/skeleton.css'])
        )
            .pipe(concat('bundle.css'))
            .pipe(gulp.dest('dist/css')),
        gulp.src('src/css/skeleton.css')
            .pipe(gulp.dest('dist/css')),
        gulp.src('src/css/bootstrap.scss')
            .pipe(sass())
            .pipe(gulp.dest('dist/css')));
}
gulp.task('css', compileCss)

gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('js', function() {
    let webpackConfig = require('./webpack.config')
    return gulp.src('src/js/examples/index.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('jscopy', function() {
    return gulp.src(['src/js/head.min.js', 'node_modules/reveal.js/js/reveal.js', 'node_modules/reveal.js/plugin/highlight/highlight.js'])
        .pipe(gulp.dest('dist/js'))
})

gulp.task('watchHtml', function() {
    gulp.watch('src/**/*.html', ['html'])
})

gulp.task('build', ['css', 'html', 'js', 'jscopy']);
