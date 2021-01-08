const mysql = require("mysql");

// Set database connection credentials
const config = {
  host: "141.45.91.40",
  user: "s0570790",
  password: "54X5pf93",
  database: "US-Wahlen-Projekt"
};

// Create a MySQL pool
const pool = mysql.createPool(config);
