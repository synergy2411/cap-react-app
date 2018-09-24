var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect'),
     history = require('connect-history-api-fallback');

gulp.task('browserify',function(){
    gulp.src('src/main.js')
    .pipe(browserify({transform:'reactify'}))
	.pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('copyHtml',function(){
    gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
	middleware: function(connect, opt){
		return [history({})];
	}
  });
});

gulp.task('default',['browserify','copyHtml','connect']);
