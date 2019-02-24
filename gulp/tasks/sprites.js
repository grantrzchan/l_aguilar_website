var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    //renders out the svg as CSS, by measuring coordinates and cutting
                    template: './gulp/templates/sprite.css'
                }
            }

        }
    }
};

gulp.task('createSprite', function () {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('copySpriteGraphic', ['createSprite'],function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', 
// 'createSprite must run FIRST, before copySpriteCSS. Create a dependency for createSprite
['createSprite'],
function(){
    return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', ['createSprite', 'copySpriteCSS', 'copySpriteGraphic']);