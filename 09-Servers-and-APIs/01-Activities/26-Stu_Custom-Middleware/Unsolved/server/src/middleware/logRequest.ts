import { type Request, type Response } from "express";

const logRequest = (req: Request, _res: Response, next: any) => {


  //TODO: log both the incoming request method and url.
  //TODO: call the next function.
  console.log(`${req.method} request received to ${req.url}`); // get request recieved to 
  next();
};

export default logRequest;
