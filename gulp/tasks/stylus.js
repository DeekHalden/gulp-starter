var gulp = require('gulp');
var postcss = require('gulp-postcss');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var notify = require('gulp-notify');
var mqpacker = require("css-mqpacker");
var config = require('../config');


gulp.task('stylus', function() {

    var processors = [
        autoprefixer({browsers: ['last 10 versions'], cascade: false}),
        mqpacker({
            sort: function (a, b) {
                a = a.replace(/\D/g,'');
                b = b.replace(/\D/g,'');
                return a-b;
                // replace this with a-b for Mobile First approach
            }
        })
    ];

    return gulp.src(config.src.stylus+'style.styl')
    .pipe(stylus({
        sourcemap: true,
        style: 'compact',
        emitCompileError: true
    }))
    .on('error', notify.onError({
        title: 'stylus Error!',
        message: '<%= error.message %>'
    }))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest.css));
});

gulp.task('stylus:watch', function() {
    gulp.watch(config.src.stylus + '/**/*', ['stylus']);
});