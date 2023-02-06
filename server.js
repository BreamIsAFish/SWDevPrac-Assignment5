const express = require("express");
const dotenv = require("dotenv");
// Route files //
const hospitals = require("./routes/hospitals");

dotenv.config({ path: "./config/config.env" });

const app = express();

// Mount routers //
app.use("/api/v1/hospitals", hospitals);

// Port //
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
