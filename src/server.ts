import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVar } from "./env/environment";
import userRoutes from "./routes/userRoutes";

interface Error {
  status?: number;
  message?: string;
}

class Server {
  public app: express.Application = express();

  constructor() {
    // constroctor for initialize the menthods
    this.setConfig();
    this.setRoute();
    this.error404Handler();
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

  // not found
  error404Handler () {
    this.app.use((req, res, next) => {
      const error:Error = new Error('Route not found');
      error.status = 404
      next(error);
    });
  }

  // error handler
  errorHandler() {
    this.app.use((error:Error, req, res, next) => {
      const statusCode = error.status || 500;
      res
        .status(statusCode)
        .json({
          status: statusCode,
          message: error.message || "something went wrong!",
        });
    });
    console.log("Hello")
  }
}

export default Server;
