global.$ = {
    gulp: require('gulp'),
    cfg: require('./gulp/config'),
    path: {
        task: require('./gulp/path/tasks.js'),
        jsLibs: require('./gulp/path/js-libs.js'),
        cssLibs: require('./gulp/path/css-libs.js')
    },
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    errHdl: require('./gulp/tasks/error').default
}

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', [
    'clean',
    'sass',
    'pug',
    'css-libs',
    'scripts',
    'js-libs',
    'fonts',
    'img',
    'browser-sync',
    'sprite',
    'watch'
])