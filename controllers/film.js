'use strict'

const videoStitch = require('video-stitch');

/**
   * concatenates clips together
   * @param  {[json]} clips Address of a text file containing filenames of the clips
   * @param  {string} filmName Name of the generated file
   * @return {[type]} [description]
   */
async function concat(clips, filmName) {
    videoStitch.concat({ silent: true })
        .clips(clips)
        .output('films/generated/' + filmName)
        .concat()
        .then((outputName) => {
            return outputName;
        })
}

module.exports = { concat };