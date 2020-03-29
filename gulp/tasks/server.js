const gulp = require('gulp')
const pug2html = require('../tasks/pug2html')
const styles = require('../tasks/style')
const javaScript = require('../tasks/javascript')
const javaScriptLibs = require('../tasks/jslibs')
const image = require('../tasks/image')
const fonts = require('../tasks/fonts')
const browserSync = require('browser-sync').create()


module.exports = server = () => {
	browserSync.init({
		server: "./build"
	});
	gulp.watch("src/styles/**/*.scss", styles).on('change', browserSync.reload)
	gulp.watch("src/javascript/**/*.js", javaScript).on('change', browserSync.reload)
	gulp.watch("src/javascript/libs.js", javaScriptLibs).on('change', browserSync.reload)
	gulp.watch("src/image/**/*{png,jpg,svg,jpeg,webpb}", image).on('change', browserSync.reload)
	gulp.watch("src/pages/**/*.pug", pug2html)
	gulp.watch("src/fonts/**/*", fonts)
	gulp.watch("build/*.html").on('change', browserSync.reload)

}