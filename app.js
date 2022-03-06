const express = require("express");
const { errors, isCelebrateError } = require("celebrate");

const app = express();
const port = 3000;
app.use(express.json());
require("./routes")(app);

app.use((err, req, res, next) => {
  if (isCelebrateError(err)) {
    console.error(err);
  }
  next(err);
});

app.use(errors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
