// GULP TASKS - CSS

// REQUIRE
var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssImport = require("postcss-import"),
    mixins = require("postcss-mixins"),
    hexrgba = require("postcss-hexrgba");


gulp.task("styles", function () {
    // this line  moves the code from the styles.css file
    // through a PostCSS filter (which expects an array of arguments), but we only supply one - autoprefixer
    // to a new file in temp/styles
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        .on("error", function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit("end");
        })
        .pipe(gulp.dest("./app/temp/styles"));
});