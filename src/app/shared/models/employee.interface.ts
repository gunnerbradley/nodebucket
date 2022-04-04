import { Item } from "./item.interface";
export interface Employee {
  empId: String;
  toDo: [Item];
  done: [Item];
}
