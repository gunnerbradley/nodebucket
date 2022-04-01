// /*
// ============================================
// ; Title:  employee.js
// ; Author: Gunner Bradley
// ; Date:   March 23rd, 2022
// ; Description: model for employees DB
// ;===========================================
// */
const mongoose = require('mongoose'); //import mongoose

 let Schema = mongoose.Schema;

 //Task schema
 const taskSchema = new Schema({
    text: String
  });



  //Employee document schema
  const employeeSchema = new Schema({
    empID: String,
    toDo:[taskSchema],
    done: [taskSchema]
  }, {collection: 'employees'});

let Employee = mongoose.model("Employee", employeeSchema);

// Export the User model
module.exports = Employee;
