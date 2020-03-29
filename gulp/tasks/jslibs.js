const gulp = require('gulp')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const rename = require('gulp-rename')
const include = require('gulp-include')

module.exports = javaScriptLibs = (cd) => {
	return gulp.src('src/javascript/libs.js')
		.pipe(include())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(terser())
		.pipe(rename('jslibs.min.js'))
		.pipe(gulp.dest('build/js'))
}