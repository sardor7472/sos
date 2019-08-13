const   gulp = require('gulp'),
        browsersync = require('browser-sync').create();

function browswerSync () {
    browsersync.init({
        server: {
            baseDir: "./app"
        }
    });
};

function browswersynsReload (done) {
    browsersync.reload();
    done()
}

function watchFile() {
    gulp.watch('./app/*.html', browswersynsReload);
    gulp.watch('./app/css/*.css', browswersynsReload);
    gulp.watch('./app/js/*.js', browswersynsReload)
}


exports.default = gulp.parallel(watchFile, browswerSync)