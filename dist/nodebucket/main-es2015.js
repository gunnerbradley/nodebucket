(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gunnerbradley/Documents/GitHub/nodebucket/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/task.service */ "yDtv");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function HomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeComponent_div_23_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r3.deleteTask(item_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", item_r2.text, " ");
} }
function HomeComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeComponent_div_28_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r6.deleteTask(item_r5._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", item_r5.text, " ");
} }
class HomeComponent {
    constructor(taskService, cookieService, fb, router) {
        this.taskService = taskService;
        this.cookieService = cookieService;
        this.fb = fb;
        this.router = router;
        this.empId = parseInt(this.cookieService.get('session_user'), 10);
        this.taskService.findAllTasks(this.empId).subscribe(res => {
            console.log('--Server response from findAllTask--');
            console.log(res);
            this.employee = res;
            console.log('--Employee Object--');
            console.log(this.employee);
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
            console.log(this.done);
        });
    }
    ngOnInit() {
        this.taskForm = this.fb.group({
            text: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])]
        });
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
            console.log(`Reordered the existing list of task items`);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, // array data
            event.container.data, event.previousIndex, event.currentIndex);
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
            });
        }
    }
    deleteTask(taskId) {
        if (taskId) {
            console.log(`Delete Function: ${taskId} was deleted`);
            this.taskService.deleteTask(this.empId, taskId).subscribe(res => {
                this.employee = res.data;
            }, err => {
                console.log(err);
            }, () => {
                this.toDo = this.employee.toDo;
                this.done = this.employee.done;
            });
        }
        window.location.reload();
    }
    updateTaskList(empId, toDo, done) {
        this.taskService.updateTask(empId, toDo, done).subscribe(res => {
            this.employee = res.data;
        }, err => {
            console.log(err);
        }, () => {
            this.toDo = this.employee.toDo;
            this.done = this.employee.done;
        });
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 29, vars: 5, consts: [[1, "main-content"], ["fxLayout", "row wrap"], ["fxFlex", ""], [1, "title"], ["fxLayout", "row"], ["fxLayout", "column", "fxFlex", "100%", 1, "new-task-forum"], [1, "subtitle"], ["method", "post", 3, "formGroup"], ["matInput", "", "formControlName", "text", "type", "text", "placeholder", "Enter Task...", 1, "task-input", 3, "keydown.enter"], [1, "task-submit", 3, "click"], ["cdkDropListGroup", ""], ["fxFlex", "50%", 1, "todo-list"], ["cdkDropList", "", 1, "list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "item", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["fxFlex", "50%", 1, "done-container"], ["cdkDrag", "", 1, "item"], [1, "x-button", 3, "click"], ["src", "../../../assets/icons/x-symbol.svg", "alt", "Remove task item button", "height", "20", "width", "20", 1, "x-icon"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "To-Do List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "mat-card-subtitle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Add New Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("keydown.enter", function HomeComponent_Template_input_keydown_enter_14_listener() { return ctx.newTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeComponent_Template_button_click_15_listener() { return ctx.newTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Add+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "mat-card-subtitle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "To-Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("cdkDropListDropped", function HomeComponent_Template_div_cdkDropListDropped_22_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](23, HomeComponent_div_23_Template, 4, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "mat-card-subtitle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("cdkDropListDropped", function HomeComponent_Template_div_cdkDropListDropped_27_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](28, HomeComponent_div_28_Template, 4, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.taskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("cdkDropListData", ctx.toDo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.toDo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("cdkDropListData", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.done);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]], styles: [".main-content[_ngcontent-%COMP%] {\n    margin: 50px auto 0 auto;\n    padding: 0;\n    width: 50%;\n    border-radius: 5px;\n    box-shadow: 20px 20px 50px rgba(0,0,0,0.25),\n               -5px -5px 80px white;\n  }\n\n.main-list[_ngcontent-%COMP%]{\n  padding: 0 0 40px 0;\n}\n\n.title[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  font-size: 3em;\n  margin: 0 0 40px 40px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2em;\n  margin-top: 10px;\n}\n\n.new-task-forum[_ngcontent-%COMP%]{\n  border-radius: 50px;\n}\n\n.task-input[_ngcontent-%COMP%]{\n  margin: 0 20px 20px 20px;\n  padding: 10px;\n  width: 70%;\n  font-size: 1.5em;\n}\n\n.task-submit[_ngcontent-%COMP%]{\n  width: 20%;\n  padding: 10px;\n  font-size: 1.5em;\n\n}\n\n.list[_ngcontent-%COMP%]{\n  padding: 5px;\n  min-height: 100px;\n}\n\n.todo-list[_ngcontent-%COMP%]{\n  border-right: 4px solid #CBCBCB;\n  height: auto;\n}\n\n.item[_ngcontent-%COMP%]{\n  list-style-type: none;\n  border: 1px solid #CBCBCB;\n  border-radius: 50px;\n  padding: 15px;\n  margin-bottom: 10px;\n  font-size: 1.5em;\n  display: flex;\n  align-items:center;\n  justify-content:center;\n  cursor: move;\n}\n\n.x-button[_ngcontent-%COMP%]{\n  background-color: rgba(0,0,0,0);\n  border: none;\n  justify-content: flex-end;\n  margin-left:auto;\n  cursor: pointer;\n}\n\n\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQjttQ0FDK0I7RUFDakM7O0FBRUY7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztHQUVHIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLm1haW4tY29udGVudCB7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDUwcHggcmdiYSgwLDAsMCwwLjI1KSxcbiAgICAgICAgICAgICAgIC01cHggLTVweCA4MHB4IHdoaXRlO1xuICB9XG5cbi5tYWluLWxpc3R7XG4gIHBhZGRpbmc6IDAgMCA0MHB4IDA7XG59XG5cbi50aXRsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBtYXJnaW46IDAgMCA0MHB4IDQwcHg7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXctdGFzay1mb3J1bXtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLnRhc2staW5wdXR7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDcwJTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi50YXNrLXN1Ym1pdHtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcblxufVxuXG4ubGlzdHtcbiAgcGFkZGluZzogNXB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLnRvZG8tbGlzdHtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI0NCQ0JDQjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLml0ZW17XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NCQ0JDQjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi54LWJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgYm9yZGVyOiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tbGVmdDphdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIERyYWcgYW5mIERyb3AgKi9cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi8qIC5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59ICovXG4iXX0= */"] });


/***/ }),

/***/ "50Te":
/*!*************************************************************!*\
  !*** ./src/app/shared/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.??fac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });


/***/ }),

/***/ "VgDn":
/*!************************************!*\
  !*** ./src/app/sign-in.service.ts ***!
  \************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SignInService {
    constructor(router, cookieService, http) {
        this.router = router;
        this.cookieService = cookieService;
        this.http = http;
    }
    /*
     *  getSessionCookie()
     *  Params: none
     *  Response: string
     *  Description: Returns the session_user cookie.
     */
    getSessionCookie() {
        const sessionUser = this.cookieService.get('session_user');
        if (sessionUser) {
            return sessionUser;
        }
        else {
            return null;
        }
    }
    /*
     *  signInCheck()
     *  Params: none
     *  Response: Boolean
     *  Description: Checks if a user has a session_user cookie.
     */
    signInCheck() {
        if (this.cookieService.get('session_user')) {
            return true;
        }
        else {
            return false;
        }
    }
    /*
     *  signOut()
     *  Params: none
     *  Description: Removes the session_user cookie.
     */
    signOut() {
        // Properties
        let signedIn;
        signedIn = this.cookieService.get('session_user');
        if (signedIn) {
            this.cookieService.delete('session_user');
            this.cookieService.delete('session_first_name');
            this.router.navigate(['/session/signin']);
        }
    }
}
SignInService.??fac = function SignInService_Factory(t) { return new (t || SignInService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SignInService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: SignInService, factory: SignInService.??fac, providedIn: 'root' });


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 30, vars: 0, consts: [[1, "contact-card"], [1, "contact-title"], [1, "border-top", "card-content"], ["fxLayout", "row", "fxLayoutAlign", "space-between"], ["fxFlex", "50", 1, "left-panel"], ["fxFlex", "25"], [1, "contact-text"], ["fxFlex", "75"], ["fxFlex", "50", 1, "right-panel"], [1, "bottom-panel", "border-top"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Get in Touch!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Fax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "(123) 456-7891");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "(123) 456-7892");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "1234 Node St.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Ameri Town, NE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "68104, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Email: support@nodebucket.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"]], styles: [".contact-card[_ngcontent-%COMP%]{\n  width: 50%;\n  margin: 10px auto;\n  font-size: 30px;\n}\n.contact-title[_ngcontent-%COMP%]{\n  font-size: 30px;\n  padding: 5px;\n}\n.contact-text[_ngcontent-%COMP%]{\n  padding: 10px;\n  margin: 15px 10px 10px 10px;\n  font-size: 30px;\n}\n.left-panel[_ngcontent-%COMP%]{\n  border-right: 1px solid #CBCBCB;\n}\n.bottom-panel[_ngcontent-%COMP%]{\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1jYXJke1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmNvbnRhY3QtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY29udGFjdC10ZXh0e1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDE1cHggMTBweCAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxlZnQtcGFuZWx7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDQkNCQ0I7XG59XG5cbi5ib3R0b20tcGFuZWx7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "XWge":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sign-in.service */ "VgDn");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");










function SignInComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "The employee ID is missing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function SignInComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "The employee ID is not valid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function SignInComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r2.err);
} }
class SignInComponent {
    constructor(router, cookieService, http, signInService) {
        this.router = router;
        this.cookieService = cookieService;
        this.http = http;
        this.signInService = signInService;
    }
    ngOnInit() {
        this.formModel = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^\d/)]))
        });
    }
    signIn() {
        let signInCheck;
        signInCheck = this.signInService.signInCheck();
        const employeeId = this.formModel.value.employeeId;
        if (signInCheck == false) {
            this.http.get(`/api/employee/${employeeId}`).subscribe((response) => {
                if (response) {
                    this.cookieService.set('session_user', employeeId);
                    this.cookieService.set('session_first_name', response.firstName);
                    this.router.navigate(['/']);
                }
                else {
                    this.err = 'The employee ID was not found.';
                }
            });
        }
        else {
            this.router.navigate(['/session/tasks']);
        }
    }
}
SignInComponent.??fac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_sign_in_service__WEBPACK_IMPORTED_MODULE_5__["SignInService"])); };
SignInComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 14, vars: 4, consts: [[1, "row"], ["id", "signInCard", 1, "mat-elevation-z8"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "employeeId", "name", "employeeId", "placeholder", "Employee ID", "required", "", 1, "input-style"], ["class", "error-style", 4, "ngIf"], [1, ""], ["type", "submit", "color", "none", 1, "button", "submit-style"], [1, "error-style"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, " Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_5_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, SignInComponent_mat_error_7_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, SignInComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, SignInComponent_mat_error_9_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "mat-card-actions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.formModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.formModel.get("employeeId").hasError("required") && ctx.formModel.get("employeeId").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.formModel.get("employeeId").hasError("pattern") && ctx.formModel.get("employeeId").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.err);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["#signInCard[_ngcontent-%COMP%]{\n  margin: 15vh auto;\n  padding: 20px;\n  width: 550px;\n  border-radius: 10px;\n\n}\n.input-style[_ngcontent-%COMP%]{\n  margin: 10px auto;\n  padding: 15px;\n  width: 90%;\n}\n.error-style[_ngcontent-%COMP%]{\n  margin: 10px;\n}\n.submit-style[_ngcontent-%COMP%]{\n  margin: 20px auto;\n  padding: 15px;\n  width: 50%;\n  display: block;\n  font-size: large;\n}\n@media only screen and (max-width: 1000px) {\n\n  #signInCard[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRTtFQUNBLFdBQVc7QUFDYjs7QUFFQSIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lnbkluQ2FyZHtcbiAgbWFyZ2luOiAxNXZoIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA1NTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuLmlucHV0LXN0eWxle1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmVycm9yLXN0eWxle1xuICBtYXJnaW46IDEwcHg7XG59XG4uc3VibWl0LXN0eWxle1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuXG4gICNzaWduSW5DYXJke1xuICB3aWR0aDogMTAwJTtcbn1cblxufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "tcz+");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "50Te");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "XWge");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");








// Components







// Material imports










class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_9__["BaseLayoutComponent"],
        _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthLayoutComponent"],
        _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
        _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"]] }); })();


/***/ }),

/***/ "chz9":
/*!**********************************!*\
  !*** ./src/app/sign-in.guard.ts ***!
  \**********************************/
/*! exports provided: SignInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInGuard", function() { return SignInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");



class SignInGuard {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    canActivate(next, state) {
        const sessionUser = this.cookieService.get('session_user');
        if (sessionUser) {
            return true;
        }
        else {
            this.router.navigate(['/session/sign-in']);
            return false;
        }
    }
}
SignInGuard.??fac = function SignInGuard_Factory(t) { return new (t || SignInGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
SignInGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: SignInGuard, factory: SignInGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 13, vars: 0, consts: [[1, "about-card"], ["fxLayout", "row wrap"], ["fxLayout", "col", 1, "title-section"], [1, "title-style"], ["fxLayout", "col", 1, "text-section"], ["href", "https://github.com/gunnerbradley/nodebucket", "alt", "link to GitHub repository"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Bucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "NodeBucket is a minimalist task tracking application that allows users to visually monitor their progress. Built on the MEAN stack for my Web-450 Capstone course, this project is 1 of 2 final projects demonstrating an understanding of the resources used to construct it. Feel free to explore the functionality and the code over on my ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " GitHub page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"]], styles: [".about-card[_ngcontent-%COMP%]{\n  margin: 5% auto;\n  background-color: rgba(0,0,0,0);\n  box-shadow: none;\n}\n.title-section[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 25%;\n  border-right: 3px solid black;\n  padding-right: 20px;\n}\n.title-style[_ngcontent-%COMP%]{\n  font-weight: 900;\n  font-size: 100px;\n  line-height: 100px;\n  text-align: right;\n  margin-left: auto;\n}\n.text-section[_ngcontent-%COMP%]{\n  width: 65%;\n  font-size: 24px;\n  line-height: 58px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1jYXJke1xuICBtYXJnaW46IDUlIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4udGl0bGUtc2VjdGlvbntcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjUlO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnRpdGxlLXN0eWxle1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRleHQtc2VjdGlvbntcbiAgd2lkdGg6IDY1JTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNThweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "tcz+":
/*!*************************************************************!*\
  !*** ./src/app/shared/base-layout/base-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class BaseLayoutComponent {
    constructor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
    }
    ngOnInit() {
    }
    signOut() {
        this.cookieService.deleteAll();
        this.router.navigate(['/session/sign-in']);
    }
}
BaseLayoutComponent.??fac = function BaseLayoutComponent_Factory(t) { return new (t || BaseLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BaseLayoutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BaseLayoutComponent, selectors: [["app-base-layout"]], decls: 18, vars: 0, consts: [[1, "navbar-container"], [1, "logo"], [2, "width", "80%"], ["fxLayout", "row wrap", "fxLayoutAlign", "end start"], ["mat-button", "", "routerLink", "/"], ["mat-button", "", "routerLink", "/about"], ["mat-button", "", "routerLink", "/contact"], ["mat-button", "", 3, "click"], [1, "hr-style"], ["fxLayout", "row wrap"], ["fxFlex", ""]], template: function BaseLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Node Bucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BaseLayoutComponent_Template_button_click_12_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".logo[_ngcontent-%COMP%] {\n    margin-left: 75px;\n    font-size: 24px;\n    font-weight: lighter;\n\n  }\n\n  .navbar-container[_ngcontent-%COMP%] {\n    padding: 5px;\n    background-color: rgba(0,0,0,0);\n  }\n\n  .navbar-link[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: lighter;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n  }\n\n  .footer-content[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: lighter;\n    padding-left: 100px;\n    letter-spacing: 3px;\n  }\n\n  .bu-link[_ngcontent-%COMP%] {\n    text-decoration: none;\n  }\n\n  .bu-link[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjs7RUFFdEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCIiwiZmlsZSI6ImJhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuXG4gIH1cblxuICAubmF2YmFyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gIH1cblxuICAubmF2YmFyLWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZm9vdGVyLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIH1cblxuICAuYnUtbGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmJ1LWxpbms6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4iXX0= */"] });


/***/ }),

/***/ "v2M4":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.??fac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 9, vars: 0, consts: [[1, "not-found-card"], ["aria-hidden", "false", "aria-label", "error icon", 1, "error-icon"], [1, "not-found-title"], [1, "not-found-text"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "404!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Sorry, the page you looking for doesn't exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: [".not-found-card[_ngcontent-%COMP%]{\n  width: 700px;\n  height: auto;\n  margin: auto;\n  text-align: center;\n  margin-top: 100px;\n  padding: 30px;\n}\n\n.not-found-title[_ngcontent-%COMP%]{\n  font-size: 4em;\n  font-weight: 900;\n  margin-bottom: 30px;\n}\n\n.not-found-text[_ngcontent-%COMP%]{\n  font-size: 2em;\n  margin-top: 20px;\n}\n\n.error-icon[_ngcontent-%COMP%]{\n  width: auto;\n  height: auto;\n  font-size: 4em;\n  text-align: center;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZC1jYXJke1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4ubm90LWZvdW5kLXRpdGxle1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm5vdC1mb3VuZC10ZXh0e1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmVycm9yLWljb257XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogNGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/base-layout/base-layout.component */ "tcz+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sign_in_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.guard */ "chz9");
/* harmony import */ var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/auth-layout/auth-layout.component */ "50Te");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "XWge");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
//   Title: app-routing.component.ts
//   Author: Gunner Bradley
//   Date: March 23rd 2022
//   Description: routing for app











/* configure routes*/
const routes = [
    {
        // main routes
        path: '',
        component: _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_1__["BaseLayoutComponent"],
        children: [
            {
                path: '',
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
                canActivate: [_sign_in_guard__WEBPACK_IMPORTED_MODULE_3__["SignInGuard"]]
            },
            {
                path: 'home',
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
                canActivate: [_sign_in_guard__WEBPACK_IMPORTED_MODULE_3__["SignInGuard"]]
            },
            {
                path: 'contact',
                component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                canActivate: [_sign_in_guard__WEBPACK_IMPORTED_MODULE_3__["SignInGuard"]],
            },
            {
                path: 'about',
                component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                canActivate: [_sign_in_guard__WEBPACK_IMPORTED_MODULE_3__["SignInGuard"]],
            },
            {
                path: 'not-found',
                component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
            }
        ]
    },
    //  login routes
    {
        path: 'session',
        component: _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
        children: [
            {
                path: 'sign-in',
                component: _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"]
            },
            {
                path: 'not-found',
                component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"]
            }
        ]
    },
    // all unknown to 404 page
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "yDtv":
/*!************************************************!*\
  !*** ./src/app/pages/services/task.service.ts ***!
  \************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class TaskService {
    constructor(http) {
        this.http = http;
    }
    findAllTasks(empId) {
        console.log(empId);
        return this.http.get('api/employees/' + empId + '/tasks');
    }
    createTask(empId, task) {
        return this.http.post('/api/employees/' + empId + '/tasks', {
            text: task
        });
    }
    updateTask(empId, toDo, done) {
        return this.http.put('/api/employees/' + empId + '/tasks', {
            toDo,
            done
        });
    }
    deleteTask(empId, taskId) {
        return this.http.delete('/api/employees/' + empId + '/tasks/' + taskId);
    }
}
TaskService.??fac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TaskService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: TaskService, factory: TaskService.??fac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map