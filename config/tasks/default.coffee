gulp= require 'gulp'
runSequence = require('run-sequence')
config= require './config'

gulp.task 'default', (done)->
    runSequence('init', done)

einTask= ['watch']
einTask.push 'svg'
gulp.task 'init', einTask