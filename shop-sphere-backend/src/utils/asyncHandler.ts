import { Request, Response, NextFunction } from "express";

type RequestHandlerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any> | void;

const asyncHandler = (requestHandler: RequestHandlerType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

export { asyncHandler };
