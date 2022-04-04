import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.interface';
import { Item } from 'src/app/shared/models/item.interface';
import { CookieService } from 'ngx-cookie-service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employee: Employee;
  toDo: Item[];
  done: Item[];
  empId: number;

  constructor(public taskService: TaskService, private cookieService: CookieService) {
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

  ngOnInit(): void {}

  createTask(data) {
    this.taskService.createTask(this.empId, data)
	}




}
