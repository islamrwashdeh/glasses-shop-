// const express = require("express");
// const mydb = require('./src/config/config')

require('dotenv').config();
// const app = express();

// const server = app.listen(process.env.PORT, () =>
//   console.log(`Server started on 🚀 ${process.env.PORT} Let the adventure begin! 🌟`)
// );




const express = require('express');
const userRoutes = require('./src/routs/userRouts');
 const adminRoutes = require('./src/routs/adminRouts');

const app = express();
app.use(express.json());

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});