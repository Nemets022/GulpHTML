const gulp = require('gulp')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')
const plumber = require('gulp-plumber')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')

module.exports = pug2html = (cd) => {
	return gulp.src('src/pages/*.pug')
		.pipe(plumber())
		.pipe(pugLinter())
		.pipe(pug())
		.pipe(htmlValidator())
		.pipe(bemValidator())
		.pipe(gulp.dest('build'))
}