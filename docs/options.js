'use strict';

var options = (env = "development") => {
    return {
      swaggerDefinition: {
        info: {
          title: "FilmPlayer API",
          description: "Endpoints provided by FilmPlayer API.",
          version: "1.0"
        },
        schemes: env == "production" ? ["https"] : ["http", "https"],
        basePath: "/api",
        produces: ["application/json"],
        security: [
          {
            basicAuth: []
          }
        ]
      },
      apis: ["./docs/*.yaml", "./routes/*.js"]//, "./models/*.js"]
    };
  };
  
  module.exports = options;