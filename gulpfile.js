var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");

gulp.task("sass", function() {
  return gulp.src("src/scss/*.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(rename(function(path) {
      path.extname = ".min.css";
    }))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("watch", function() {
  gulp.watch("src/scss/*.scss", ["sass"]);
});

gulp.task("default", ["sass"]);
