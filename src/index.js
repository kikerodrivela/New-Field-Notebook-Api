import app from "./app.js";

import { sequelize } from "./database/database.js";

// import "./models/models.js";

async function main() {
  // Sequelize connect to database
  await sequelize.sync({/**force: false // only if you want to drop all tables and recreate them */ });
  // Start server
  app.listen(5000, () => {
    console.log("Server started on port", 5000);
    console.log("Connection has been established successfully.");
  });
}

main();
