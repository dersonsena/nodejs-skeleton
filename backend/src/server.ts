import express, { Express } from "express";
import bodyParser from "body-parser";
import bookRoutes from "./domains/book/routes";
import cors from "cors";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const routes = bookRoutes;

routes.map(route => require(`.${route.action}`)(app, route));

app.listen(3000);
