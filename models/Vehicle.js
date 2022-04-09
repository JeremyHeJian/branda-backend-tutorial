const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a ship.
 */
let VehicleSchema = new Schema({
  /**
   * make of the vehicle
   */
  Make: {type: String},
  /**
   * model of the vehicle
   */
  Model: {type: String},
  /**
   * year of the vehicle
   */
  Model_year: {type: Number},
  /**
   * MPG or range of the vehicle(gas cars for MPG, range for EVs)
   */
  Energy_consuming: {
    MPG: {type: Number},
    Range: {type: Number},
  },
  /**
   * odometer of the car
   */
  Odometer_miles: {type: Number},
  /**
   * engine type of the vehicle
   */
  Engine_type: {type: String},
  /**
   * display of the car
   */
  Display_name: {type: String},
  /**
   * VIN of the car
   */
  VIN: {type: String},
});

let Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle;
