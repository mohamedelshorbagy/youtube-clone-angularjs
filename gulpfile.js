const gulp = require('gulp');
const sass = require('gulp-sass');
// const autoPrefixer = require('gulp-autoprefixer');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

// Styles Task
gulp.task('styles', () => {
    gulp.src('src/app/styles/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(postcss([ autoprefixer({
            browsers: ['last 2 versions']
        }) ]))
        .pipe(gulp.dest('src/app'));
})


// Watch Task 
gulp.task('watch', () => {
    gulp.watch('src/app/styles/**/*.scss', ['styles']);
});