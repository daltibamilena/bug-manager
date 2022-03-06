const { Router } = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const BugController = require("../controller/BugController");
const routes = Router();

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.post(
    "/bugs",
    celebrate({
      [Segments.BODY]: {
        bugs: Joi.array().items({
          titulo: Joi.string().required(),
          idade: Joi.number().precision(2).required(),
          estimativa: Joi.number().precision(2).required(),
          prioridade: Joi.string().required(),
        }),
      },
    }),
    BugController.bugs_to_resolve
  );


  app.post(
    "/bugs_group",
    celebrate({
      [Segments.BODY]: {
        bugs: Joi.array().items({
          titulo: Joi.string().required(),
          idade: Joi.number().precision(2).required(),
          estimativa: Joi.number().precision(2).required(),
          prioridade: Joi.string().required(),
        }),
      },
    }),
    BugController.assign_bugs
  );
};
