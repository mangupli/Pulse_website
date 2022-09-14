const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

/*live server*/

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

/*compilation*/

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) /* compile the file */
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css")) /* put the files in the folder */
        .pipe(browserSync.stream()); /* stream the files when smth is changed */
});

/*watch the changing of the files*/

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html", gulp.parallel('html'));
})

gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
})

gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
})

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*+(woff|woff2|eot)')
    .pipe(gulp.dest('dist/fonts'));
})

gulp.task('icons', function() {
    return gulp.src('src/icons/**/*+(jpg|png|svg)')
    .pipe(gulp.dest('dist/icons'));
})

gulp.task('img', function() {
    return gulp.src('src/img/**/*+(jpg|png|svg)')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
})


gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'img', 'icons', 'fonts', 'scripts'));