'use strict'

const videoStitch = require('video-stitch');
const notification = require('../config/notification');

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
            notification.trigger('FilmPlayer', 'Notification', {
                "type": "done",
                "message": "terminando"
            });
            return outputName;
        })
}

module.exports = { concat };