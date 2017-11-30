module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch($.cfg.app + 'sass/**/*.scss', ['sass']);
        $.gulp.watch($.cfg.app + 'img/', ['img']);
        $.gulp.watch($.cfg.app + 'sprite/', ['sprite']);
        $.gulp.watch($.cfg.app + 'pug/**/*.pug', ['pug']);
        $.gulp.watch($.cfg.app + 'js/**/*.js', ['scripts']);
    })
}