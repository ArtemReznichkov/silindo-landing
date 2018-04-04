var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
  
  gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 16 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('css'));
  });

  gulp.task('watch', ['sass'], function (){
    gulp.watch('scss/**/*.scss', ['sass']); 


  });

gulp.task('default', ['watch']);