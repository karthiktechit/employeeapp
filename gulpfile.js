var gulp = require('gulp'),
	browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    notify = require('gulp-notify');
	reactify = require('reactify');


gulp.task('browserify', function(){
	console.log('starting browserify');
    var appBundler =  browserify({
        entries: ['./app/main.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    console.log('starting rebundle');
    // The rebundle process
    var rebundle = function () {
    var start = Date.now();
    console.log('Building APP bundle');
    appBundler.bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('./build'))
      .pipe(notify(function () {
        console.log('APP bundle built in ' + (Date.now() - start) + 'ms');
      }));
	}; 
	rebundle();

});

gulp.task('watch', function(){
    gulp.watch(['./react-components/**/*.jsx', './js/**/*.js'], ['browserify']);
});

gulp.task('hello', function(){
		console.log('hello');
});