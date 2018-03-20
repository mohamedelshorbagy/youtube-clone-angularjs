const gulp = require('gulp');
const sass = require('gulp-sass');


// Styles Task
gulp.task('styles', () => {
    gulp.src('src/app/styles/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('src/app'));
})


// Watch Task 
gulp.task('watch', () => {
    gulp.watch('src/app/styles/**/*.scss', ['styles']);
});