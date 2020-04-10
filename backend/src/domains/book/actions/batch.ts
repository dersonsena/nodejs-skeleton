import { Express, Request, Response } from "express";
import Book from "../../book/book";
import { DomainRoute } from "../../../core/contracts/IDomainContracts";

const handle = async (request: Request, response: Response) => {
  try {
    const book = await Book.collection.insert(request.body);

    return response.status(200).send({ status: "success" });
  } catch (err) {
    return response
      .status(400)
      .send({ status: "error", message: "Book registration failed" });
  }
};

module.exports = (app: Express, route: DomainRoute) => {
  app[route.method](route.endpoint, handle);
};
