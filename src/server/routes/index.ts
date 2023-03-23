import { Router } from "express";

import { StatusCodes } from "http-status-codes";

export const router = Router();

router.get("/teste", (_, res) => {
  return res.send("Olá, DEV!");
});

router.post("/teste", (req, res) => {
  console.log(req.body);

  return res.status(StatusCodes.OK).json(req.body);
}); 
