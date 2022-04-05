const Employee = require("../models/employee");

const express = require("express");

const router = express.Router();


//findAllTasks
router.get('/employees/:empId/tasks', async (req, res) => {
   try {
        Employee.findOne({'empId': req.params.empId}, (err, employee) => {
            if (err) {
                console.log(err);
                res.status(500).send({
                    'message': `MongoDB Exception: ${err}`
                })
            } else {

                console.log(` TODO: ${employee.toDo}`);
                console.log(` DONE: ${employee.done}`);
                res.json(` TODO: ${employee.toDo} DONE: ${employee.done}`);
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            'message': `Server Exception: ${err.message}`
        })
    }
});



//createTask
router.post('/employees/:empId/tasks', async (req, res) => {

   try {
        Employee.findOne({'empId': req.params.empId}, (err, empDoc) => {
            if (err) {
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exception: ${err}`
                })
            } else if (empDoc){

                const newTask = {
                    text: req.body.text,
                }

                empDoc.toDo.push(newTask);
                console.log(empDoc)

                empDoc.save(empDoc)
                    .then(()=>{
                        console.log('message: Task added');
                        res.status(200).send({
                            'message': `Task added`
                        })
                });

            } else if (!empDoc) {
                console.log('Invalid Employee ID');
                res.status(401).send({ 'message': `Invalid ID`})
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({'message': `Server Exception: ${err}`})
    }
});

module.exports = router;




