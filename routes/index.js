const { Router } = require("express");
const { celebrate, Joi, Segments } = require("celebrate");
const BugController = require("../controller/BugController");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello, successful request to bug manager o/. Happy to see you here!");
  });

  app.post(
    "/bugs",
    celebrate({
      [Segments.BODY]: {
        bugs: Joi.array().items({
          titulo: Joi.string().required(),
          idade: Joi.number().precision(2).required(),
          estimativa: Joi.number().precision(2).required(),
          prioridade: Joi.string().valid("normal", "critico").required(),
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
