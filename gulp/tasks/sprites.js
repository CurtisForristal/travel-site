var gulp = require("gulp"),
    svgSprite = require("gulp-svg-sprite"),
    rename = require("gulp-rename"),
    del = require("del");


var config = {
    mode: {
        css: {
            // Removes .css from the generated filename
            sprite: "sprite.svg",
            render: {
                css: {
                    template: "./gulp/templates/sprite.css"
                }
            }
        }
    }
}

// Delete the existing sprite folder first to make sure there are no old copies before making a new one
gulp.task("beginClean", function() {
    return del(["./app/temp/sprite", "./app/assets/images/sprites"]);
});


gulp.task("createSprite", ["beginClean"], function () {
    // add all the icon files into the pipeline
    return gulp.src("./app/assets/images/icons/**/*.svg")
        .pipe(svgSprite(config))
        .pipe(gulp.dest("./app/temp/sprite"));
});


gulp.task("copySpriteGraphic", ["createSprite"], function() {
    return gulp.src("./app/temp/sprite/css/**/*.svg")
        .pipe(gulp.dest("./app/assets/images/sprites"));
});


gulp.task("copySpriteCSS", ["createSprite"], function() {
    return gulp.src("./app/temp/sprite/css/*.css")
        .pipe(rename("_sprite.css"))
        .pipe(gulp.dest("./app/assets/styles/modules"));
});


gulp.task("endClean", ["copySpriteGraphic", "copySpriteCSS"], function() {
    return del("./app/temp/sprite");
});


// automatially run createSprite and copySpriteCSS
gulp.task("icons", ["beginClean", "createSprite", "copySpriteGraphic", "copySpriteCSS", "endClean"]);