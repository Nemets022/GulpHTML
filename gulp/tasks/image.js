const gulp = require('gulp')
const image = require('gulp-imagemin')
const webp = require('gulp-webp')

module.exports = imageTask = (cd) => {
	return gulp.src('src/image/**/*')
		.pipe(image())
		.pipe(webp())
		.pipe(gulp.dest('build/img'))
}