import * as express from "express";
import database from "./db";
import controller from "./controller";
import * as bodyParser from "body-parser";
class App {
  public app: express.Application;
  private controller: controller;
  private database: database;

  constructor() {
    this.app = express();
    this.routes();
    this.database = new database();
    this.database.createConnection();
    this.controller = new controller();
    this.middleware();
  }

  middleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.status(200).json({
        result: "hello World",
      });
    });
    this.app.route("/api/crushes/").get((req, res) => {
      this.controller.select(req, res);
    });

    this.app.route("/api/crushes/").post((req, res) => {
      this.controller.create(req, res);
    });

    this.app.route("/api/crushes/:id").get((req, res) => {
      this.controller.selectById(req, res);
    });
    this.app.route("/api/crushes/:id").delete((req, res) => {
      this.controller.deleteById(req, res);
    });
    this.app.route("/api/crushes/:id").put((req, res) => {
      this.controller.editById(req, res);
    });
  }
}

export default new App();
