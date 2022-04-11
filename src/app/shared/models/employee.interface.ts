//   Title: item.component.ts
//   Author: Gunner Bradley
//   Date: March 23rd 2022
//   Description: employee model for data base

import { Item } from "./item.interface"; // import item model

export interface Employee {
  empId: String;
  toDo: [Item];
  done: [Item];
}
