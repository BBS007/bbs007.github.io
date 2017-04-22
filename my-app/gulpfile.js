var gulp = require('gulp');
var del = require('del');

gulp.task('deploy', () => {
    return gulp.src('dist/*', {read: false})
        .pipe(gulp.dest('../'));
});


gulp.task('clean', () => {
    return del([
        // Delete everything
        '../*',

        // But hidden files
        '!../.*',

        // And the my-app directory
        '!../my-app'
    ]);
});