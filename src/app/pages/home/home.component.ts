import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.interface';
import { Item } from 'src/app/shared/models/item.interface';
import { CookieService } from 'ngx-cookie-service';
import { TaskService } from '../services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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


  constructor(public taskService: TaskService, private cookieService: CookieService, private fb: FormBuilder) {
    this.empId = parseInt(this.cookieService.get('session_user'), 10)

    this.taskService.findAllTasks(this.empId).subscribe(res => {
      console.log('--Server response from findAllTask--');
      console.log(res)

      this.employee = res;
      console.log('--Employee Object--')
      console.log(this.employee)
    }, err => {
      console.log('--Eerver Error');
      console.log(err);
    }, () => {
      console.log('Inside complete function of findAllTasks API');

      this.toDo = this.employee.toDo;
      this.done = this.employee.done;

      console.log('--ToDo Tasks');
      console.log(this.toDo);

      console.log('--Done Tasks');
      console.log(this.done)
    })

  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      text: [null, Validators.compose([Validators.required])]
    })
  }

  newTask() {
    this.taskService.createTask(this.empId, this.taskForm.controls['text'].value).subscribe(res => {
      this.employee = res.data;
    }, err => {
     console.log(err);
    })
  }





}
