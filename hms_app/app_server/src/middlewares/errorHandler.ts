import { NextFunction, Request, Response } from "express";

const errorHandler = (err:TypeError, req:Request, res:Response, next:NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
};

export default errorHandler;
