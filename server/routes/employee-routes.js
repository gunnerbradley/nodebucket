// /*
// ============================================
// ; Title:  employee-routes.js
// ; Author: Gunner Bradley
// ; Date:   March 23rd, 2022
// ; Description: employee API fot HTTP calls
// ;===========================================
// */

const Employee = require("../models/employee");
const express = require("express");
const router = express.Router();


// get an one Employee document
router.get('/employee/:empId', async(req, res) => {
    try {
        Employee.findOne({'empId': req.params.empId}, (err, employeeById) => {
            if (err) {
                console.log(err);
                res.status(500).send({
                    'message': `MongoDB Exception: ${err}`
                })
            } else {
                console.log(employeeById);
                res.json(employeeById);
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            'message': `Server Exception: ${err.message}`
        })
    }
})

// get all employees
router.get('/employee', async(req, res) => {
    try {
        Employee.find({}, (err, employee) =>{
            if (err) {
                console.log(err);
                res.status(500).send({
                    'message': `MongoDB Exception: ${err}`
                })
            } else {
                console.log(employee);
                res.json(employee);
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            'message': `Server Exception: ${err.message}`
        })
    }
})

module.exports = router;
