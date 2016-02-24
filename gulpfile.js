"use strict";

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var gulpJade = require('gulp-jade');
var jade = require('jade');

var baseDir = './';

var bowerComponentsDir = 'public/lib/';

// Bower components first!
var appFiles = {
  js: [bowerComponentsDir + '**/*.min.js', baseDir + 'public/javascripts/**/*.js', baseDir + 'public/www/**/*.js'],
  css: [bowerComponentsDir + '**/*.min.css', baseDir + 'public/stylesheets/**/*.css'],
  index: [baseDir + 'views/*.jade', baseDir + 'ng-jade-partials/*.jade']
};

var startupScript = 'server.js';

gulp.task('jade', function () {
  return gulp.src('./ng-jade-partials/*.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./public/www/partials/'));
});

gulp.task('nodemon', function () {
  nodemon({
      script: baseDir + startupScript,
      ext: 'js',
      ignore: [
        baseDir + 'public/',
        baseDir + 'controllers/',
        baseDir + 'models/']
    })
    .on('restart', function () {
      console.log('Magic restarted');
    });
});

gulp.task('livereload', function () {
  return gulp.src(appFiles.index)
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch([
      appFiles.js,
      appFiles.css,
      baseDir + '**/*.jade',
      baseDir + 'ng-jade-partials/*.jade'
  ], ['jade', 'livereload'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['nodemon', 'watch']);
