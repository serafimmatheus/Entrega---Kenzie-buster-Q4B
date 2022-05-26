import app from "./app";
import { AppDataSource } from "./data-source";
import * as dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("DB Connected");

    const PORT = process.env.PORT ?? 5000;

    app.listen(PORT, () => {
      console.log(`App is running \nhttp://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
