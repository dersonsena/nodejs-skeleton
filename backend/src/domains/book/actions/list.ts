import { Express, Request, Response } from "express";
import Book from "../../book/book";
import { DomainRoute } from "../../../core/contracts/IDomainContracts";

const handle = async (request: Request, response: Response) => {
  let query: string = request.query.q;
  let books = await Book.find().sort({ name: 1 });

  if (query) {
    query = query.trim();
    books = await Book.find({
      title: { $regex: query, $options: "i" }
    });
  }

  return response
    .status(200)
    .send({ status: "success", count: books.length, data: { books } });
};

module.exports = (app: Express, route: DomainRoute) => {
  app[route.method](route.endpoint, handle);
};
