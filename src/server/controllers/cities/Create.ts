import { Request, RequestHandler, Response } from "express";

import { StatusCodes } from "http-status-codes";

import * as yup from "yup";

import { validation } from "../../shared/middlewares";

interface ICity {
  name: string;
  state: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICity>(yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(3),
  })),
}));

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).send("Created!");
};

export const teste = {};
