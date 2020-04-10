import { Express, Request, Response } from "express";
import Book from "../../book/book";
import { DomainRoute } from "../../../core/contracts/IDomainContracts";

const handle = async (request: Request, response: Response) => {
  const bookToDelete = await Book.findById(request.params.id);
  const book = { ...bookToDelete.toObject() };
  bookToDelete.remove();

  return response.status(200).send({ status: "success", data: { book } });
};

module.exports = (app: Express, route: DomainRoute) => {
  app[route.method](route.endpoint, handle);
};
