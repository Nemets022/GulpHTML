const gulp = require('gulp')
const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/style')
const imageTask = require('./gulp/tasks/image')
const javaScript = require('./gulp/tasks/javascript')
const fonts = require('./gulp/tasks/fonts')
const server = require('./gulp/tasks/server')


const build = gulp.series(pug2html, styles, fonts, imageTask, javaScript)
const startServer = gulp.series(build, server)
module.exports.start = startServer
module.exports.build = build