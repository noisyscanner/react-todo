import gulp from 'gulp';
import babel from 'gulp-babel';

// gulp.task('default', () => console.log('Default task called'));


// Compile the jsx
gulp.task('es6', () =>
    gulp.src('src/main.jsx')
    .pipe(babel())
    .pipe(gulp.dest('dist')));