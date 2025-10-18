const Car = require('../models/Car')


const getCars = async (req, res) => {
  const cars = await Car.find();
  res.render("cars/index.ejs", {
    cars,
  });
}
const addCarPage =  (req, res) => {
  res.render("cars/addCarsPage.ejs");
}
const addCar= async (req, res) => {
  await Car.create(req.body);
  res.redirect("/cars");
}

const getSingleCar = async (req, res) => {
  const singleCar = await Car.findById(req.params.id);
  res.render("cars/singleCar.ejs", {
    car: singleCar,
  }); 
}
const editCarPage = async(req, res) => {
    const singleCar = await Car.findById(req.params.id);
  res.render('cars/editCar.ejs',{
    car:singleCar
  });
}

const updateCar = async (req, res) => {
  await Car.findByIdAndUpdate(req.params.id,req.body)
  res.redirect('/cars')

}
const deleteCar = async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.redirect('/cars');
}


module.exports ={
    getCars,
    addCarPage,
    addCar,
    getSingleCar,
    editCarPage,
    updateCar,
    deleteCar

}