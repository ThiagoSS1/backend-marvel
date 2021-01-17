import {
  Router
} from "express";
const express = require("express");

import UserService from "./app/services/UserServices";

const userService = new UserService();

const routes = express.Router();


routes.get("/users", async (req, res) => {
  const response = await userService.getCharacters(req.query.offset, req.query.limit);
  res.status(200).json(response);
});

routes.get("/users/:hero_id", async (req, res) => {
  const response = await userService.getCharacter(req.params.hero_id);
  res.status(200).json(response);
});

routes.get("/users/log", async (req, res) => {
  const response = await userService.getLog();
  res.status(200).json(response);
});



export default routes;