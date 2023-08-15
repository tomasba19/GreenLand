const app = require("./app");
const PORT = process.env.PORT || 3001;
const SERVER_HOST = process.env.SERVER_HOST;
const { db } = require("./database/config");

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

db.sync({
  force: false,})
  .then(() => {
    //relaciones de las tablas
    console.log("Database has been synced , the models are synced.");
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });

app.listen(PORT, SERVER_HOST ,() => {
  console.log(`Server is running on port ${PORT}`);
});
