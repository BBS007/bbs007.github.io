var gulp = require('gulp');
var del = require('del');


/**
 * Deploy the Angular dist on root.
 * It copies everything from dist/ to root folder.
 */
gulp.task('deploy', ['clean'], () => {
    return gulp.src('dist/*')
        .pipe(gulp.dest('../'));
});


/**
 * Clean the root path.
 * Delete everything except hidden files and the current directory.
 */
gulp.task('clean', () => {
    return del.sync([
        // Delete everything
        '../*',

        // But hidden files
        '!../.*',

        // And the my-app directory
        '!../my-app'
    ], {
            // Allow execution outside this directory    
            force: true
        }
    );
});