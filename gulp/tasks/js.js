var gulp = require('gulp');
var include = require("gulp-include");
var uglify = require('gulp-uglify');
var config = require('../config');
var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
reload = browserSync.reload;

gulp.task('js', function () {
    gulp.src(config.src.js+'**/*.js')
        .pipe(include())
        .on('error', function(){notify("Javascript include error");})
        // .pipe(uglify())
        // .pipe(gulp.dest(config.dest.js))
        // .pipe(webpackStream({
        //     entry: {
        //         app: './build/js/app.js',
        //     },
        //     output: {
        //         filename: 'app.min.js',
        //     },
        //     module: {
        //         loaders: [{
        //             test: /\.js$/,
        //             // excluding some local linked packages.
        //             // for normal use cases only node_modules is needed.
        //             use: {
        //                 loader: 'babel-loader',
        //                 options: {
        //                     presets: ['es2015']
        //                 }
        //             }

        //         }],
        //         // postLoaders: [
        //         //     {
        //         //         include: '/node_modules/pixi.js',
        //         //         loader: 'transform?brfs'
        //         //     }
        //         // ]

        //     }
        // }, webpack))
        // .pipe(uglify())
        .pipe(gulp.dest(config.dest.js))
        .pipe(reload({stream: true}));
});

gulp.task('js:watch', function() {
    gulp.watch(config.src.js+'**/*', ['js']);
});