var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default', function () {
    console.log("hi");
});

gulp.task('html', function () {
    console.log("Something useful in html");
});

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([autoprefixer, cssvars, nested]))
        .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    });

});