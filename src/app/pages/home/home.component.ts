import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Employee } from 'src/app/shared/models/employee.interface';
import { Item } from 'src/app/shared/models/item.interface';
import { CookieService } from 'ngx-cookie-service';
import { TaskService } from '../services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taskForm: FormGroup;
  employee: Employee;
  toDo: Item[];
  done: Item[];
  empId: number;
  mySubscription: any;

  constructor(public taskService: TaskService, private cookieService: CookieService, private fb: FormBuilder, private router: Router) {
    this.empId = parseInt(this.cookieService.get('session_user'), 10)

    this.taskService.findAllTasks(this.empId).subscribe(res => {
      console.log('--Server response from findAllTask--');
      console.log(res)

      this.employee = res;
      console.log('--Employee Object--')
      console.log(this.employee)

    }, err => {
      console.log('--Server Error');
      console.log(err);
    }, () => {

      console.log('findAllTasks API');

      this.toDo = this.employee.toDo;
      this.done = this.employee.done;

      console.log('--ToDo Tasks--');
      console.log(this.toDo);

      console.log('--Done Tasks--');
      console.log(this.done)
    })

  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      text: [null, Validators.compose([Validators.required])]
    })
  }

   drop(event: CdkDragDrop<any[]>) {

    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      console.log(`Reordered the existing list of task items`);
    } else {
      transferArrayItem(event.previousContainer.data, // array data
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      console.log(`Moved task item to the container`);

        this.updateTaskList(this.empId, this.toDo, this.done);
    }
  }

  newTask() {
      if (this.taskForm.controls['text'].value) {
        this.taskService.createTask(this.empId, this.taskForm.controls['text'].value).subscribe(res => {
          this.employee = res.data;
          window.location.reload();
        }, err => {
         console.log(err);
        }, () => {
          this.toDo = this.employee.toDo;
          this.done = this.employee.done;
        }
      )
    }
  }

  deleteTask(taskId: string) {
    if (taskId) {
      console.log(`Delete Function: ${taskId} was deleted`);

      this.taskService.deleteTask(this.empId, taskId).subscribe(res => {
        this.employee = res.data;

      }, err => {
        console.log(err);
      }, () => {
        this.toDo = this.employee.toDo;
        this.done = this.employee.done;
      })
    }
     window.location.reload();
  }

  updateTaskList(empId: number, toDo: Item[], done: Item[]): void {
    this.taskService.updateTask(empId, toDo, done).subscribe(res => {
      this.employee = res.data;
    }, err => {
      console.log(err)
    }, () => {
      this.toDo = this.employee.toDo;
      this.done = this.employee.done;
    })
  }
}
