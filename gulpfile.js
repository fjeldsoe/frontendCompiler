var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var paths = require('./package.json').paths;

console.log(paths);

gulp.task('clean', function() {
  	return del('dist');
});

gulp.task('scripts-bundle', ['scripts'], function() {
	return gulp.src(paths.scripts.bundles.base.src)
		.pipe(concat(paths.scripts.bundles.base.name))
		.pipe(uglify())
		.pipe(gulp.dest(paths.scripts.bundles.base.dest));
});

gulp.task('scripts', ['clean'], function() {
	return gulp.src([paths.scripts.dev])
		.pipe(uglify())
    	.pipe(gulp.dest(paths.scripts.dist));
});

gulp.task('copy', ['clean'], function(){
	return gulp.src(paths.html.dev)
		.pipe(gulp.dest(paths.html.dist));
});

gulp.task('build', ['scripts-bundle', 'copy'], function(){

});