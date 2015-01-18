var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-ruby-sass'),
    ts = require('gulp-typescript'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify');

gulp.task('connect', function(){
    connect.server({
        root: './app',
        port: 8888,
        livereload: true
    });
});

gulp.task('sass', function(){
    gulp
        .src('./scss/style.scss')
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(sass({style: 'expanded'}))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('ts', function(){
    gulp
        .src('./ts/*.ts')
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(ts({module: 'amd'}))
        .pipe(gulp.dest('./app/js'));
});

gulp.task('watch', function(){
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./ts/*.ts', ['ts']);
    gulp.watch(['./app/*.html', './app/css/style.css', './app/js/*.js'], function(){
        gulp.src('app/*.html').pipe(connect.reload());
    });
});

gulp.task('default', ['connect', 'watch']);