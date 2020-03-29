const gulp = require('gulp')

module.exports = fonts = (cd) => {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('build/fonts'))
}