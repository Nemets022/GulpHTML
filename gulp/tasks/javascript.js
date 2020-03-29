const gulp = require('gulp')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const esLint = require('gulp-eslint')
const rename = require('gulp-rename')
const include = require('gulp-include')

module.exports = javaScript = (cd) => {
	return gulp.src('src/javascript/main.js')
		.pipe(esLint())
		.pipe(esLint.format())
		.pipe(include())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(terser())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('build/js'))
}