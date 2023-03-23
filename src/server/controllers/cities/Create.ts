import { Request, Response } from "express";

import { StatusCodes } from "http-status-codes";

interface ICity {
  nome: string
}

export const create = (req: Request<{}, {}, ICity>, res: Response) => {

  return res.send("Create!");
};

export const teste = {};