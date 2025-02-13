'use strict';

const sass = require('gulp-sass')(require('sass'));

const
	gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	prefixer = require('gulp-autoprefixer'),
	rigger = require('gulp-rigger'),
	rimraf = require('rimraf'),
	browserSync = require("browser-sync"),
	cache = require('gulp-cache'),
	reload = browserSync.reload;

const path = {
	build: {
		html:   'BUILD/',
		js:     'BUILD/js/',
		css:    'BUILD/css/',
		img:    'BUILD/img/',
		fonts:  'BUILD/fonts/'
	},
	src: {
		html:   'SRC/*.html',
		js:     'SRC/js/*.js',
		style:  'SRC/style/*.scss',
		img:    'SRC/img/**/*.*',
		fonts:  'SRC/fonts/**/*.*'
	},
	watch: {
		html:   'SRC/**/*.html',
		js:     'SRC/js/**/*.js',
		style:  'SRC/style/**/*.scss',
		img:    'SRC/img/**/*.*',
		fonts:  'SRC/fonts/**/*.*'
	},
	clean: './BUILD'
};

const config = {
	server: {
		baseDir: "./BUILD"
	},
	tunnel: false,
	host: 'localhost',
	port: 3000,
	logPrefix: "Promoting"
};

gulp.task('html:build', () => {
	return gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
});

gulp.task('js:build', () => {
	return gulp.src(path.src.js)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream: true}));
});

gulp.task('style:build', () => {
	return gulp.src(path.src.style)
		.pipe(plumber())
		.pipe(sass({
			sourceMap: false,
			errLogToConsole: true
		}))
		.pipe(prefixer())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
});

gulp.task('image:build', () => {
	return gulp.src(path.src.img)
		.pipe(gulp.dest(path.build.img))
		.pipe(reload({stream: true}));
});

gulp.task('fonts:build', () => {
	return gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts));
});

gulp.task('build', gulp.parallel(
		'html:build',
		'js:build',
		'style:build',
		'fonts:build',
		'image:build'
	)
);


gulp.task('watch', () => {
	gulp.watch(path.watch.html,  gulp.series('html:build'));
	gulp.watch(path.watch.js,    gulp.series('js:build'));
	gulp.watch(path.watch.style, gulp.series('style:build'));
	gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
	gulp.watch(path.watch.img,   gulp.series('image:build'));
});


gulp.task('webserver', () => {
	browserSync.init(config);
});


gulp.task('clean', (cb) => {
	rimraf(path.clean, cb);
});


gulp.task('default', gulp.series('build', gulp.parallel('webserver', 'watch')));