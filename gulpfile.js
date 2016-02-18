
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var gulpJade = require('gulp-jade');
var jade = require('jade');


var baseDirs = {
  app: './',
  dist: './dist/'
};

var publicDirs = {
  _self: 'public/',
  js: 'public/javascripts/',
  css: 'public/stylesheets/',
  www: 'public/www/'
};

var bowerComponentsDir = 'public/lib/';

// Bower components first!
var appFiles = {
  js: [bowerComponentsDir + '**/*.min.js', baseDirs.app + 'public/javascripts/**/*.js', baseDirs.app + 'public/www/**/*.js'],
  css: [bowerComponentsDir + '**/*.min.css', baseDirs.app + 'public/stylesheets/**/*.css'],
  index: [baseDirs.app + 'views/*.jade', baseDirs.app + 'ng-jade-partials/*.jade']
};

var startupScript = 'server.js';

var sysDirs = [
  baseDirs.app + 'public/**/*.js',
  baseDirs.app + 'public/www/**/*.js',
  // baseDirs.app + 'config/**/*.js',
  baseDirs.app + 'ng-jade-partials/*.jade',
  baseDirs.app + 'views/**/*.jade',
  baseDirs.app + 'conrollers/**/*.js',
  baseDirs.app + 'models/**/*.js',
  baseDirs.app + 'views/**/*.jade'
];

gulp.task('jade', function () {
  return gulp.src('./ng-jade-partials/*.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./public/www/partials/'))
})

gulp.task('nodemon', function () {
  nodemon({
      script: baseDirs.app + startupScript,
      ext: 'js',
      ignore: [
        baseDirs.app + 'public/',
        baseDirs.app + 'controllers/',
        baseDirs.app + 'models/']
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
      baseDirs.app + '**/*.jade',
      baseDirs.app + 'ng-jade-partials/*.jade'
  ], ['jade', 'livereload'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['nodemon', 'watch']);
