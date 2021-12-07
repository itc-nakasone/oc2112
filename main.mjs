import express from "express";
import layouts from "express-ejs-layouts";
import {router} from "./router.mjs";

const port = 3000,
    app = express();

app.set("view engine", "ejs");
app.use(layouts);
app.use("/", router);

app.listen(port, "0.0.0.0", () => {

});