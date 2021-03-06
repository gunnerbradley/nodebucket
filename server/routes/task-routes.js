// /*
// ============================================
// ; Title:  task-routes.js
// ; Author: Gunner Bradley
// ; Date:   March 23rd, 2022
// ; Description: task API fot HTTP calls
// ;===========================================
// */

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
                res.json(employee);
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
    } catch (err) { console.log(err) }
});


// DeleteTask
router.delete('/employees/:empId/tasks/:taskId', async(req, res) => {
  try {
    Employee.findOne({'empId': req.params.empId}, (err, employee) => {
      if (err) {
        console.log(err);
      } else {
        console.log(employee);

        const todoItem = employee.toDo.find(item => item._id.toString() === req.params.taskId);
        const doneItem = employee.done.find(item => item._id.toString() === req.params.taskId);

        if(todoItem) {
          employee.toDo.id(todoItem._id).remove();
          employee.save();
          res.send('ToDo Item Deleted')

        }  else if (doneItem) {
            employee.done.id(doneItem._id).remove();
            employee.save();
            res.send('Done Item Deleted')

        }
      }
    });
  } catch (err) { console.log(err) }
 });

  // update Task
  router.put('/employees/:empId/tasks', async(req, res) => {
   try {

    Employee.findOne({'empId': req.params.empId}, (err, employee) => {

      if (err) {
        console.log(err);

      } else {
          console.log(employee);

          employee.set({
            toDo: req.body.toDo,
            done: req.body.done
          });

          employee.save();
          res.send('Item Updated')
      }
    });

   } catch (err) {
      console.log(err);
   }
 });

module.exports = router;




