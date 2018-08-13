var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('default', ['browser']);

gulp.task('browser', function (){
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
});

gulp.watch('public/*').on('change', function () {
    browserSync.reload();
})