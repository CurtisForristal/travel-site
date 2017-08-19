var gulp = require("gulp"),
    watch = require("gulp-watch");



gulp.task("default", function () {
    console.log("You created a gulp task");
});


gulp.task("html", function () {
    console.log("Something useful is done to html");
});


gulp.task("styles", function () {
    console.log("Imagine SASS or PostCSS takes running here");
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