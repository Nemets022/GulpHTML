const gulp = require('gulp')
const rename = require('gulp-rename')
const webpack = require('webpack-stream')

module.exports = javaScript = (cd) => {
	return gulp.src('src/javascript/main.js')
		.pipe(webpack({
			mode: 'production',
			module: {
				rules: [
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: ['@babel/env']
						}
					}
				]
			}
		})).on('error', function handleError() {
			this.emit('end')
		})
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('build/js'))
}