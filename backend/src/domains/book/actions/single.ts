import { Express, Request, Response } from "express";
import Book from "../../book/book";
import { DomainRoute } from "../../../core/contracts/IDomainContracts";

const handle = async (request: Request, response: Response) => {
  const book = await Book.findById(request.params.id);
  return response.status(200).send({ status: "success", data: { book } });
};

module.exports = (app: Express, route: DomainRoute) => {
  app[route.method](route.endpoint, handle);
};
