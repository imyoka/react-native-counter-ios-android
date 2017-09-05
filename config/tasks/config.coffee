pkg= require('../../package.json')
dirs= pkg['rn-config'].directories


Config=
    # static files
    SVG: "#{dirs.src}/assets/svgs" # svgs

    # destination dir
    DestPath: dirs.dist

module.exports= Config