import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
//Configuring Cors
app.use(
  cors({
    orgin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

//Configuring for Request in json format!!
app.use(express.json({ limit: "16kb" }));

//URl Encoder Configuration
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//Cofifguring for Public assests
app.use(express.static("public"));

//Configuring cookies
app.use(cookieParser());

export { app };
