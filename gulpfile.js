
var gulp = require("gulp"),
    watch = require("gulp-watch"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssImport = require("postcss-import");



gulp.task("default", function () {
    console.log("You created a gulp task");
});


gulp.task("html", function () {
    console.log("Something useful is done to html");
});


gulp.task("styles", function () {
    // this line  moves the code from the styles.css file
    // through a PostCSS filter (which expects an array of arguments), but we only supply one - autoprefixer
    // to a new file in temp/styles
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest("./app/temp/styles"));
});


gulp.task("watch", function() {
    watch("./app/index.html", function() {
        // name of task you want to run
        gulp.start("html");
    });

    // ** is for any other folders (current or future) under the styles folder
    // *. is for any file that has that extension
    watch("./app/assets/styles/**/*.css", function() {
        gulp.start("styles")
    });
});