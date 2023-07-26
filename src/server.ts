import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVar } from "./env/environment";
import userRoutes from "./routes/userRoutes";

class Server {
  public app: express.Application = express();

  constructor() {
    // constroctor for initialize the menthods
    this.setConfig();
    this.setRoute();
    this.errorHandler();
  }

  setConfig() {
    this.connectMongoDB();
  }

  // connection to mongoDB
  connectMongoDB() {
    mongoose.connect(getEnvironmentVar().db_uri).then(() => {
      console.log("DB is connected 🚀");
    });
  }

  // routes
  setRoute() {
    this.app.use("/api/user", userRoutes);
  }

  // error handler
  errorHandler() {
    this.app.use((error, req, res, next) => {
      const statusCode = error.statusCode || 500;
      res
        .status(statusCode)
        .json({
          status: statusCode,
          message: error.message || "something went wrong!",
        });
    });
  }
}

export default Server;
