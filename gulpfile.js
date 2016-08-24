var gulp = require('gulp');
// tape and tapColorize are used for tests
var tape = require('gulp-tape');
var tapColorize = require('tap-colorize');
// git for commits
var git = require('gulp-git');
// gulp-util to pass arguments to task
var gutil = require('gulp-util');

// gulp-gh-pages deploys to gh-pages
var ghPages = require('gulp-gh-pages');

// runs every file in the test dir
gulp.task('test', function(){
  return gulp.src('test/*.js')
  .pipe(tape({
    reporter: tapColorize()
  }));
});

// use: gulp commit --m='the commit message'
gulp.task('commit', function () {
  var msg = gutil.env.m || 'generic commit message';
  return gulp.src('.')
    .pipe(git.add())
    .pipe(git.commit(msg));
});
// use: gulp push --b=branchName
gulp.task('push', ['commit'], function () {
  var branch = (gutil.env.b || 'master');
  git.push('origin', branch, function (error) {
    console.log(error);
  });
})
// deploys everything in dist/ to gh-pages
// assuming gulpfile is in git repo w remote
// on GitHub
gulp.task('deploy', function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('copyHtml', function(){
  // copies any html file in app to dist
  gulp.src('app/*.html').pipe(gulp.dest('dist'))
})
