import { Router } from "express";

import { CitiesControllers } from "./../controllers";

export const router = Router();

router.get("/teste", (_, res) => {  
  return res.send("Olá, DEV!");
});

router.post("/cities", CitiesControllers.createValidation ,CitiesControllers.create);
