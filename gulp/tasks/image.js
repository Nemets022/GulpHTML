const gulp = require('gulp')
const image = require('gulp-image')

module.exports = imageTask = (cd) => {
	return gulp.src('src/image/**/*')
		.pipe(image())
		.pipe(gulp.dest('build/img'))
}