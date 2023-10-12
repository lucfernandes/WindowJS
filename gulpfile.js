// requires
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

gulp.task("default", watch);

function compilaSass() {
	return gulp
		.src("./src/scss/*.scss")
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(rename("windowjs-1-0-0.css"))
		.pipe(gulp.dest("./dist"));
}

function compilaJs() {
	return gulp
		.src("./src/js/*.js")
		.pipe(uglify())
		.pipe(rename("windowjs-1-0-0.js"))
		.pipe(gulp.dest("./dist"));
}

function watch() {
	gulp.watch("./src/scss/*.scss", compilaSass);
	gulp.watch("./src/js/*.js", compilaJs);
}
