'use strict'

const videoStitch = require('video-stitch');
const Files = require('fs-finder');
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

function findAllGenerated() {
    var files = Files.in('films/generated').findFiles();

    for (var i = 0; i < files.length; i++) {
        files[i] = files[i].substring(files[i].lastIndexOf("\\") + 1, files[i].lastIndexOf("."));
    }

    return files;
}

module.exports = { concat, findAllGenerated };