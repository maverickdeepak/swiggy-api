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

  setRoute() {}

  // calling the userRoutes
  userRoutes() {
    this.app.use("/api/user", userRoutes);
  }
}

export default Server