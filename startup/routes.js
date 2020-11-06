const tables = require("../routes/tables");
const waitLists = require("../routes/waitList");

module.exports = function (app) {
  app.use("/api/tables", tables);
  app.use("/api/waitLists", waitLists);
};