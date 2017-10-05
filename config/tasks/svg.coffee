gulp = require 'gulp'
mkdirp = require 'mkdirp'
co = require 'co'
fs = require 'co-fs'
config = require './config'
path = require 'path'

gulp.task 'svg', ->
    co ->
        svgJson = {}
        svgList = yield fs.readdir config.SVG
        for svg in svgList
            
            svgFile = yield fs.readFile path.join(config.SVG, svg), 'utf8'
            svgName = svg.replace '.svg', ''
            svgJson[svgName] = svgFile
        
        mkdirp.sync config.DestPath
        fs.writeFile path.resolve(config.DestPath, './svgs.js'), 'export default ' + JSON.stringify svgJson
