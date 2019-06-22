
'use strict'

// gulp 自动化工作流
var gulp = require('gulp');



// 浏览器同步
var browserSync = require('browser-sync').create();

// 监听所有文件变化
gulp.task('watchAll',function(done) {
	
	// 浏览器同步
	browserSync.init({
        server: {
            baseDir: "./dist"
        },
        // browser: "Google",
        port: 8083
    });

    // 文件移动
	gulp.watch('src/**',function(done) {
		gulp.src('src/**')
			.pipe(gulp.dest('dist/'))
			.pipe(browserSync.reload({stream:true}));
		// console.log(123);
		done();
	});	
	
	


    done();

});