
var gulp = require('gulp');

// var clean = require('gulp-clean');
// var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var gulpJade = require('gulp-jade');
var jade = require('jade');
// var minifyCss = require('gulp-minify-css');
// var uglify = require('gulp-uglify');

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
  index: [baseDirs.app + 'views/*.jade', baseDirs.app + 'public/www/partials/*.jade']
};

// var concatFilenames = {
//   js: 'js.js',
//   css: 'css.css'
// };

var startupScript = 'server.js';

var sysDirs = [
  baseDirs.app + 'public/**/*.js',
  baseDirs.app + 'public/www/**/*.js',
  // baseDirs.app + 'config/**/*.js',
  baseDirs.app + 'public/www/partials/*.jade',
  baseDirs.app + 'views/**/*.jade',
  baseDirs.app + 'conrollers/**/*.js',
  baseDirs.app + 'models/**/*.js',
  baseDirs.app + 'views/**/*.jade'
  // baseDirs.app + 'node_modules/'
];

gulp.task('jade', function () {
  return gulp.src('./public/www/partials/*.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./public/www/partials/'))
})

// gulp.task('clean', function() {
//   return gulp.src(baseDirs.dist, {read: false}).pipe(clean());
// });

// gulp.task('dev:concatjs', function () {
//   return gulp.src(appFiles.js)
//     .pipe(concat(concatFilenames.js))
//     .pipe(gulp.dest(baseDirs.app + publicDirs.js));
// });

// gulp.task('dev:concatcss', function () {
//   return gulp.src(appFiles.css)
//     .pipe(concat(concatFilenames.css))
//     .pipe(gulp.dest(baseDirs.app + publicDirs.css));
// });

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

gulp.task('livereload', ['dev:concatjs', 'dev:concatcss'], function () {
  return gulp.src(appFiles.index)
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch([
      appFiles.js,
      appFiles.css,
      baseDirs.app + '**/*.jade',
      baseDirs.app + 'public/www/partials/*.jade'
  ], ['jade', 'livereload'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['nodemon', 'watch']);
// gulp.task('dist', ['dist:copy']);

// gulp.task('dist:copy', function() {
//   // server.js
//   gulp.src(baseDirs.app + '/' + startupScript)
//     .pipe(gulp.dest(baseDirs.dist));
//
//   // sysDirs
//   gulp.src(sysDirs, {cwd: baseDirs.app + '**'})
//     .pipe(gulp.dest(baseDirs.dist));
// });
