import {
  Router
} from "express";
const express = require("express");

import UserController from "./app/services/UserController";

const userController = new UserController();

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



export default routes;