import * as mongoose from "mongoose";

class DataBaseConfiguration {
  private url = "mongodb://127.0.0.1/crushes_db";
  private dbConnection;

  constructor() {}

  createConnection() {
      mongoose.connect(this.url);
      this.logger(this.url);
  }

  logger(url) {
    this.dbConnection = mongoose.connection;
    this.dbConnection.on("connected", () => {
      console.log("mongoose connected");
    });
    this.dbConnection.on("error", (error) => {
      console.error.bind(console, "error on connection: ", error);
    });
  }
}

export default DataBaseConfiguration;
