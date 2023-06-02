import { Component } from '@angular/core';
import { task } from '../../task';
import { TASKS } from '../../mockTask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  task: task[] = TASKS;

}
