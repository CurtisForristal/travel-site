// GULP TASKS - WATCH

// REQUIRE
var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require("browser-sync").create(); //only need to use the create() method


    
gulp.task("watch", function() {
    
    browserSync.init({
        // So the nofitication box doesn't pop up in the top right of the site when refreshing
        notify: false,
        // tell browserSync where the site lives
        server: {
            baseDir: "app"
        }
    });
    
    
    watch("./app/index.html", function() {
        browserSync.reload();
    });

    // ** is for any other folders (current or future) under the styles folder
    // *. is for any file that has that extension
    watch("./app/assets/styles/**/*.css", function() {
        gulp.start("cssInject")
    });
});


// Have browserSync auto refresh the site when the CSS is changed
// Also tell it to complete the "styles" task as a dependency argument first
gulp.task("cssInject", ["styles"], function() {
    return gulp.src("./app/temp/styles/styles.css")
        .pipe(browserSync.stream());
});