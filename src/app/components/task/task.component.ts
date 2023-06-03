import { Component, OnInit } from '@angular/core';
import { task } from '../../task';
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: task[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.taskService.getTask().subscribe((task) => {
      this.task = task;
    })
  }
  deleteTask(tasks: task) {
    this.taskService.deleteTask(tasks).subscribe(() => {
      this.task = this.task.filter(t =>
        t.id !== tasks.id
      )
    })
  }
  toggleReminder(task: task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
