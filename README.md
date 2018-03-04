## FimlPlayer Video Concatenating Service

It's a web service based on REST with the functionality of concatenate short films. The operation of union short films takes place on the server side, releasing this computer load from the client side, being the server who executes the processing in the cloud.

Supported formats: mp4.

```
filmplayer-service/
  config/
    notification.js
  controllers/
    films.js
  docs/
    definitions.yaml
    options.js
  films/
    clips/
    generated/
  node_modules/
  routes/
    films.js
    index.js
  app.json
  package.json
  README.md
```
In films/clips directory must be the sort films, which will be concatenated in a mp4 file. The generated file will be stored in films/generated.

## Imprtant, very important!

You must have previously installed [ffmpeg](https://www.ffmpeg.org)!

## Available Scripts

In the project directory, you must run:

### `npm install`

Install project dependencies to start the project.

### `npm start`

Runs the server in the development mode.<br>
Open [http://localhost:2999](http://localhost:2999) to view the Swagger UI api description. You can interact with this one.