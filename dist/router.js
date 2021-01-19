"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _express = require('express');
const express = require("express");

var _UserController = require('./app/services/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

const userController = new (0, _UserController2.default)();

const routes = express.Router();


routes.get("/users", async (req, res) => {
  const response = await userController.getCharacters(req.query.offset, req.query.limit);
  res.status(200).json(response);
});

routes.get("/users/:hero_id", async (req, res) => {
  const response = await userController.getCharacter(req.params.hero_id);
  res.status(200).json(response);
});

routes.get("/users/log", async (req, res) => {
  const response = await userController.getLog();
  res.status(200).json(response);
});



exports. default = routes;