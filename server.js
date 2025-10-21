const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Car = require("./models/Car");
const methodOverride = require("method-override");
const carCtrls= require('./controllers/cars')

const app = express();

app.use(express.static("public"));  
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.get('/',(req,res)=>{
  res.render('index.ejs')
})
app.get("/cars", carCtrls.getCars);
app.get("/cars/new",carCtrls.addCarPage);
app.post("/cars", carCtrls.addCar);
app.get("/cars/:id",carCtrls.getSingleCar);
app.get("/cars/:id/edit",carCtrls.editCarPage );
app.put("/cars/:id", carCtrls.updateCar);
app.delete("/cars/:id",carCtrls.deleteCar );

app.listen(3000, () => {
  console.log("connected");
});
