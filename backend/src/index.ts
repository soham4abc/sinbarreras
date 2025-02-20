import express from "express";
import IndexRoutes from "./routes/index.routes";
import path from "path";
import cors from "cors";

const app: express.Application = express();
const PORT = 4000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(IndexRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});
