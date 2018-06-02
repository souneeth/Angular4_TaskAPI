import { Component, OnInit, OnDestroy } from "@angular/core";
import { TasksService } from "../service/tasks.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
  providers: [TasksService]
})
export class TaskListComponent implements OnInit, OnDestroy {
  constructor(private tasksService: TasksService) {}
  taskData: any;
  sub: any;
  timer: any;
  ngOnInit() {
    this.loadData();
    this.timer = Observable.interval(500);
    this.timer.subscribe(t => this.loadData());
  }
  loadData(): void {
    //this.taskData = this.tasksService.getTasksData();
    //this.tasksService.getTasksData().then(tasks => this.taskData = tasks);
    this.tasksService.getTasksData().subscribe(data => (this.taskData = data));
  }
  ngOnDestroy(){
   this.timer.unscubscribe();
  }
}
