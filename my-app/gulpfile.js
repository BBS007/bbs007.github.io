var gulp = require('gulp');

gulp.task('deploy', () => {
    gulp.src('dist/*')
        .pipe(gulp.dest('../'));
});
