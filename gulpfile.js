const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min"
          }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/scss/**/*.scss", gulp.parallel("styles"));
    gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'styles'));