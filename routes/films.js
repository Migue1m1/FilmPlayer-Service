'use strict'

const film = require('../controllers/film');
const express = require("express");
const router = express.Router();
const notification = require('../config/notification');

/**
   * @swagger
   * /films:
   *   get:
   *    summary: Get generated files
   *    description: get generated files list
   *    tags:
   *     - Films
   *    produces:
   *     - application/json 
   *    responses:
   *     '200':
   *       description: Files succesfully obtained.
   *       type: array
   *       items:
   *        type: object
   *        properties:
   *         title:
   *          type: string
*/

router.get("/", (req, res) => {
    var films = film.findAllGenerated();
    return res.status(200).json({ films: films });
});

/**
   * @swagger
   * /films/concat:
   *   post:
   *    summary: Concat some clips
   *    description: concat some clips
   *    tags:
   *     - Films
   *    consumes:
   *     - application/json
   *    parameters:
   *     - in: body
   *       name: Film concat
   *       schema:
   *        type: object
   *        properties:
   *         filmName:
   *          type: string
   *          description: Clips that will be concatenating
   *          example: film.mp4
   *         clips:
   *          type: array
   *          description: Film name to the film concatenated
   *          items:
   *           $ref: '#/definitions/Clip'
   *          example: [ 
   *           fileName: 'films/clips/clip-0.mp4', 
   *           fileName: 'films/clips/clip-1.mp4', 
   *           fileName: 'films/clips/clip-2.mp4',
   *           fileName: 'films/clips/clip-3.mp4',
   *           fileName: 'films/clips/clip-4.mp4',
   *           fileName: 'films/clips/clip-5.mp4']
   *    produces:
   *     - application/json 
   *    responses:
   *     '204':
   *       description: Films succesfully concatenated.
*/

router.post("/concat", (req, res) => {
        notification.trigger('FilmPlayer', 'Notification', {
            "type": "wait",
            "message": "iniciando"
        });
        film.concat(req.body.clips, req.body.filmName)
            .then((outputName) => { 
                return res.status(204).json({ message: "Films succesfully concatenated"})
            })
    }
);
  
module.exports = router;