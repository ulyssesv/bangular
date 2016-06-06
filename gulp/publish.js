'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('publish', ['build'], function () {
  var awsConfig = {
    params: { "Bucket": "<>" },
    "accessKeyId": "<>",
    "secretAccessKey": "<>",
    "region": "" // needed for us-standard, failing if us-standard is used in the region
  };

  var publisher = $.awspublish.create(awsConfig);
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  return gulp.src('./dist/**')
    .pipe(publisher.publish(headers))
    .pipe($.awspublish.reporter());
});
