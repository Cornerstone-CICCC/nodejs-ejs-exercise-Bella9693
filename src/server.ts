// This is your server file :)
import express from "express";
import path from "path";
import dotenv from "dotenv";
import routes from "./routes/index";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
